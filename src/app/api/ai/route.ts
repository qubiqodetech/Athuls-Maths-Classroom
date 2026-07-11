import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";

interface Message {
  role: string;
  content: string;
}

let ai: GoogleGenAI;
function getGenAI() {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
       throw new Error("GEMINI_API_KEY environment variable is required");
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

// System instruction sets the behavior of our AMC AI Smart Assistant
const SYSTEM_INSTRUCTION = `You are the AMC Smart Assistant, the official AI Academic & Admission Assistant for Athul's Maths Classroom (AMC).
You are professional, intelligent, trustworthy, conversational, and highly helpful to parents and students in Kerala, India.

Your primary goals are:
1. Help parents and students with queries about admissions, courses, and faculties.
2. Recommend appropriate courses based on the student's current class (e.g., SSLC, Plus One, Plus Two) and their goals.
3. Be friendly and conversational.
4. Keep answers concise. Use short paragraphs, Markdown for formatting, bulleted lists where appropriate.
5. NEVER fabricate (hallucinate) data. If you don't know the exact batch timing or fee, tell them to contact admissions.

Key Information:
- Courses offered: SSLC Mathematics, Plus One Mathematics, Plus Two Mathematics.
- We focus on strong foundational concepts, academic excellence, and personalized mentoring.
- Faculty: Our tutors are highly experienced and friendly.
- Location: Provide contact details for admissions (e.g., contact via our website's Contact page or WhatsApp).
- The website has pages for: Home, About, Courses, Faculty, Resources, Results, Gallery, News, Contact.

Use Markdown formatting (like **bolding** key terms).
Do NOT use code blocks unless strictly necessary (which it shouldn't be).
Provide an engaging and premium experience.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const formattedMessages = messages.map((m: Message) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    // The stream API from the standard @google/genai package
    const genAI = getGenAI();
    const responseStream = await genAI.models.generateContentStream({
      model: "gemini-3.5-flash",
      contents: formattedMessages,
      config: {
         systemInstruction: {
            role: "user",
            parts: [{ text: SYSTEM_INSTRUCTION }]
         }
      }
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
         try {
            for await (const chunk of responseStream) {
               if (chunk.text) {
                  controller.enqueue(encoder.encode(`0:${JSON.stringify(chunk.text)}\n`));
               }
            }
            controller.close();
         } catch (error) {
            controller.error(error);
         }
      }
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Vercel-AI-Data-Stream": "v1"
      }
    });

  } catch (error: any) {
    console.error("AI Route Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

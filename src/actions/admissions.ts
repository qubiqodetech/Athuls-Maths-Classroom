"use server";

import nodemailer from "nodemailer";

export async function submitAdmissionForm(data: any) {
  try {
    const { course, fullName, email, phone, school, parentName, parentPhone, relation, batch, notes } = data;

    // Simulate nodemailer configuration (since env variables are probably not set)
    // If SMTP_HOST is not set, we just log it and return success
    if (!process.env.SMTP_HOST) {
      console.log("Admissions form submitted (simulated):", data);
      return { success: true, message: "Application submitted successfully." };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || "admissions@athulsmathsclassroom.com",
      to: process.env.SMTP_TO || "admin@athulsmathsclassroom.com",
      subject: `New Admission Application - ${fullName}`,
      html: `
        <h2>New Admission Application</h2>
        <p><strong>Course:</strong> ${course}</p>
        <h3>Student Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>School:</strong> ${school}</p>
        <h3>Parent Details</h3>
        <p><strong>Name:</strong> ${parentName}</p>
        <p><strong>Phone:</strong> ${parentPhone}</p>
        <p><strong>Relation:</strong> ${relation}</p>
        <h3>Preferences</h3>
        <p><strong>Batch:</strong> ${batch}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Application submitted successfully." };
  } catch (error) {
    console.error("Error submitting admission form:", error);
    return { success: false, message: "Failed to submit application. Please try again later." };
  }
}

import { Metadata } from "next";
import { Container } from "@/src/components/layout/container";
import { Section } from "@/src/components/layout/section";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | Athul's Maths Classroom`,
  };
}

export default async function AnnouncementDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Replace hyphens with spaces for a dummy title
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <main className="min-h-screen bg-light-gray pt-24 pb-20">
      <Section className="pb-8">
        <Container className="max-w-4xl mx-auto">
          <Link href="/announcements" className="inline-flex items-center text-gray-500 hover:text-primary-red transition-colors font-medium mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary-red/10 text-primary-red text-sm font-semibold rounded-full uppercase tracking-wider">
              News
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1.5" />
              Oct 20, 2026
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={14} className="mr-1.5" />
              5 min read
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-sora text-primary-navy mb-8 leading-tight">
            {title}
          </h1>
          
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt={title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="prose prose-lg prose-blue max-w-none font-inter text-charcoal/80">
            <p className="lead text-xl mb-6 font-medium text-primary-navy">
              This is a placeholder page for the announcement detailing all the necessary information for students and parents regarding this update.
            </p>
            <p className="mb-4">
              At Athul's Maths Classroom, we are committed to providing the best learning environment. Stay tuned for more detailed information and comprehensive strategies regarding our latest programs and initiatives. 
            </p>
            <p className="mb-4">
              Detailed content for this specific announcement will be published shortly by our administration team.
            </p>
            <h3 className="text-2xl font-bold font-sora text-primary-navy mt-10 mb-4">What's Next?</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Register early for priority access</li>
              <li>Download the latest syllabus materials</li>
              <li>Join our orientation sessions</li>
            </ul>
          </div>
        </Container>
      </Section>
    </main>
  );
}

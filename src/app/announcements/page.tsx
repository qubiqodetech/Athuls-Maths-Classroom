import { Metadata } from "next";
import { Container } from "@/src/components/layout/container";
import { Section } from "@/src/components/layout/section";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "News & Announcements | Athul's Maths Classroom",
  description: "Stay informed about important updates, exam schedules, events, and results from Athul's Maths Classroom.",
};

const CATEGORIES = [
  "All", "Admissions", "Exams", "Batch Updates", "Events", "Results", "Workshops", "Holiday Notices"
];

const FEATURED_POST = {
  id: "featured-1",
  title: "Admissions Open for 2026-2027 Academic Year",
  summary: "We are thrilled to announce that admissions for the upcoming academic year are now open. Early bird registrations receive special study materials and priority batch selection. Join Kerala's premier mathematics coaching institute.",
  date: "Oct 15, 2026",
  category: "Admissions",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  slug: "/announcements/admissions-2026",
};

const ANNOUNCEMENTS = [
  {
    id: "ann-1",
    title: "Class 10 CBSE Board Exam Revision Strategy Workshop",
    summary: "Join our intensive 3-day workshop focused on mastering the CBSE mathematics syllabus and previous year question papers.",
    date: "Oct 12, 2026",
    category: "Workshops",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/announcements/class-10-revision-workshop"
  },
  {
    id: "ann-2",
    title: "Outstanding Results in State Board Mathematics",
    summary: "Congratulations to all our students for achieving a 100% pass rate with 85% students scoring A+ in their studies.",
    date: "Sep 28, 2026",
    category: "Results",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/announcements/state-board-results-2026"
  },
  {
    id: "ann-3",
    title: "Change in Weekend Batch Timings for Plus Two",
    summary: "Please note the revised schedule for Plus Two weekend batches starting next month to accommodate special doubt-clearing sessions.",
    date: "Sep 15, 2026",
    category: "Batch Updates",
    readTime: "2 min read",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/announcements/plus-two-timing-change"
  },
  {
    id: "ann-4",
    title: "Diwali Holidays Announcement",
    summary: "The institute will remain closed for Diwali celebrations from Oct 22 to Oct 25. Online materials will be accessible.",
    date: "Sep 10, 2026",
    category: "Holiday Notices",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1603831596700-1c3fcce21c22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "/announcements/diwali-holidays"
  }
];

const UPCOMING_EVENTS = [
  {
    id: "evt-1",
    date: "25 Oct",
    title: "Mock Test Series - JEE Mains Phase 1",
    time: "09:00 AM - 12:00 PM"
  },
  {
    id: "evt-2",
    date: "02 Nov",
    title: "Parent-Teacher Meeting for Class 11",
    time: "10:00 AM - 04:00 PM"
  },
  {
    id: "evt-3",
    date: "10 Nov",
    title: "Mathematics Olympiad Orientation",
    time: "04:30 PM - 06:00 PM"
  },
  {
    id: "evt-4",
    date: "15 Nov",
    title: "Term 1 Syllabus Completion",
    time: "All Batches"
  }
];

export default function AnnouncementsPage() {
  return (
    <main className="min-h-screen bg-light-gray pt-24 pb-20">
      <Section className="pb-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora tracking-tight text-primary-navy mb-4">
                Latest Updates
              </h1>
              <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl font-inter">
                Stay informed with the latest news, exam schedules, and important announcements from Athul's Maths Classroom.
              </p>
            </div>
            
            <div className="hidden md:flex gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search news..." 
                  className="pl-4 pr-10 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent min-w-[280px]"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-primary-red">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto pb-4 mb-12 gap-3 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {CATEGORIES.map((category, index) => (
              <button 
                key={category}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                  index === 0 
                    ? "bg-primary-navy text-white border-primary-navy" 
                    : "bg-white text-charcoal border-gray-200 hover:border-primary-navy hover:text-primary-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Announcement */}
          <Link href={FEATURED_POST.slug} className="group block mb-20 relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 relative h-[300px] lg:h-[500px] overflow-hidden">
                <Image 
                  src={FEATURED_POST.image} 
                  alt={FEATURED_POST.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary-red/10 text-primary-red text-sm font-semibold rounded-full uppercase tracking-wider">
                    {FEATURED_POST.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1.5" />
                    {FEATURED_POST.date}
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-sora text-primary-navy mb-4 group-hover:text-primary-red transition-colors">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-charcoal/80 text-lg mb-8 line-clamp-3">
                  {FEATURED_POST.summary}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1.5" />
                    {FEATURED_POST.readTime}
                  </div>
                  <div className="flex items-center text-primary-navy font-semibold group-hover:text-primary-red transition-colors">
                    Read Story
                    <div className="ml-2 w-8 h-8 rounded-full bg-gray-50 group-hover:bg-primary-red/10 flex items-center justify-center transition-colors">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold font-sora text-primary-navy mb-8 flex items-center">
                Recent Announcements
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {ANNOUNCEMENTS.map((post) => (
                  <Link key={post.id} href={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative h-56 overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-navy text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-gray-400 text-xs mb-3 font-medium uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h4 className="text-xl font-bold font-sora text-primary-navy mb-3 group-hover:text-primary-red transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-charcoal/70 text-sm mb-6 line-clamp-3">
                        {post.summary}
                      </p>
                      <div className="mt-auto flex items-center text-sm font-semibold text-primary-navy group-hover:text-primary-red transition-colors">
                        Read more <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 rounded-full border border-gray-200 text-charcoal font-medium hover:border-primary-navy hover:text-primary-navy transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold font-sora text-primary-navy mb-8 border-b border-gray-100 pb-4">
                  Upcoming Events
                </h3>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {UPCOMING_EVENTS.map((event, index) => (
                    <div key={event.id} className="relative flex items-start gap-6 group">
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm shrink-0 z-10 group-hover:border-primary-red group-hover:bg-primary-red/5 transition-colors">
                        <span className="text-lg font-bold text-primary-navy leading-none mb-1 group-hover:text-primary-red transition-colors">{event.date.split(' ')[0]}</span>
                        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex flex-col pt-1">
                        <h4 className="font-bold text-primary-navy mb-1 leading-tight group-hover:text-primary-red transition-colors">{event.title}</h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={12} className="mr-1.5" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="bg-primary-navy rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <h4 className="font-bold text-lg mb-2 relative z-10">Subscribe to Newsletter</h4>
                    <p className="text-white/70 text-sm mb-4 relative z-10">Get the latest updates delivered directly to your inbox.</p>
                    <div className="flex flex-col gap-2 relative z-10">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                      />
                      <button className="w-full px-4 py-2.5 rounded-lg bg-white text-primary-navy font-semibold text-sm hover:bg-gray-100 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

import { TestimonialType, VideoTestimonialType, MetricType, FilterType } from "./types";

export const FEATURED_TESTIMONIAL: TestimonialType = {
  id: "featured-1",
  name: "Gautham's Parents",
  role: "Parent",
  course: "SSLC",
  review: "We are incredibly grateful to Athul's Maths Classroom. Mathematics was always a challenging subject for Gautham, but the personalized attention and concept-focused teaching transformed his approach completely. He not only scored an A+ but also developed a genuine interest in the subject.",
  highlight: "Mathematics became his strongest subject after joining AMC.",
  rating: 5,
  image: "https://picsum.photos/seed/parent1/400/400",
  isFeatured: true,
};

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "test-1",
    name: "Karthik R",
    role: "Student",
    course: "Plus Two",
    review: "The way complex calculus topics were broken down into simple, logical steps made all the difference. I went from dreading math exams to actually looking forward to them.",
    rating: 5,
    image: "https://picsum.photos/seed/student1/400/400",
  },
  {
    id: "test-2",
    name: "Priya Menon",
    role: "Parent",
    course: "Plus One",
    review: "The regular assessments and detailed feedback sessions helped us track Priya's progress effectively. The faculty's dedication to each student's success is truly commendable.",
    rating: 5,
    image: "https://picsum.photos/seed/parent2/400/400",
  },
  {
    id: "test-3",
    name: "Adithya P",
    role: "Student",
    course: "SSLC",
    review: "The revision strategy at AMC is brilliant. We covered every possible question type, which gave me immense confidence before the final board exams.",
    rating: 5,
    image: "https://picsum.photos/seed/student2/400/400",
  },
  {
    id: "test-4",
    name: "Nandana V",
    role: "Student",
    course: "Plus Two",
    review: "I joined AMC primarily for competitive exam preparation. The deep conceptual clarity I gained here helped me crack my entrance exams alongside board exams.",
    rating: 5,
    image: "https://picsum.photos/seed/student3/400/400",
  },
  {
    id: "test-5",
    name: "Suresh Kumar",
    role: "Parent",
    course: "Plus One",
    review: "What impressed me most was the approachable nature of the teachers. They were always available to clear doubts, even outside regular class hours.",
    rating: 5,
    image: "https://picsum.photos/seed/parent3/400/400",
  },
  {
    id: "test-6",
    name: "Meenakshi S",
    role: "Student",
    course: "SSLC",
    review: "The study materials provided by AMC are perfectly curated. They focus exactly on what's needed for the exams without overwhelming us with unnecessary information.",
    rating: 5,
    image: "https://picsum.photos/seed/student4/400/400",
  },
];

export const VIDEO_TESTIMONIAL: VideoTestimonialType = {
  id: "video-1",
  studentName: "Rahul M",
  course: "SSLC Topper",
  duration: "2:45",
  thumbnail: "https://picsum.photos/seed/videothumb/800/450",
};

export const TRUST_METRICS: MetricType[] = [
  { value: "98%", label: "Parent Satisfaction" },
  { value: "500+", label: "Happy Students" },
  { value: "100+", label: "Success Stories" },
  { value: "10+", label: "Years of Excellence" },
];

export const REVIEW_FILTERS: FilterType[] = [
  { id: "all", label: "All Reviews" },
  { id: "student", label: "Students" },
  { id: "parent", label: "Parents" },
  { id: "sslc", label: "SSLC" },
  { id: "plus-one", label: "Plus One" },
  { id: "plus-two", label: "Plus Two" },
];

export const COMMUNITY_QUOTE = "Our greatest achievement isn't just excellent results—it's the confidence our students build along the way.";

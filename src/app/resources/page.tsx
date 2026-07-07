import { Metadata } from "next";
import { Container } from "@/src/components/layout/container";
import { Section } from "@/src/components/layout/section";
import { Search, Filter, Download, Eye, FileText, FileSpreadsheet, Lock } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Learning Resources | Athul's Maths Classroom",
  description: "Download study materials, practice papers, revision notes, and academic resources.",
};

const CATEGORIES = [
  "Study Notes", "Revision Notes", "Question Papers", "Formula Sheets", "Worksheets", "Assignments", "Model Exams", "Reference Material"
];

const FILTERS = ["All", "SSLC", "Plus One", "Plus Two", "Revision", "Newest", "Popular"];

const RESOURCES = [
  {
    id: "res-1",
    title: "Complete SSLC Mathematics Formula Sheet",
    description: "A comprehensive formula sheet covering all chapters of the Class 10 state syllabus. Perfect for quick revision before exams.",
    subject: "Mathematics",
    class: "SSLC",
    type: "Formula Sheets",
    fileType: "PDF",
    size: "2.4 MB",
    downloads: 1240,
    isPremium: false,
  },
  {
    id: "res-2",
    title: "Plus Two Calculus Revision Notes",
    description: "Detailed step-by-step revision notes for differentiation and integration, including previous year questions.",
    subject: "Mathematics",
    class: "Plus Two",
    type: "Revision Notes",
    fileType: "PDF",
    size: "5.1 MB",
    downloads: 850,
    isPremium: false,
  },
  {
    id: "res-3",
    title: "Class 11 Trigonometry Question Bank",
    description: "Over 200 practice questions on trigonometry, categorized by difficulty level.",
    subject: "Mathematics",
    class: "Plus One",
    type: "Question Papers",
    fileType: "PDF",
    size: "3.8 MB",
    downloads: 620,
    isPremium: false,
  },
  {
    id: "res-4",
    title: "Board Exam 2025 Model Question Paper - Set A",
    description: "A full-length model exam paper designed according to the latest CBSE pattern.",
    subject: "Mathematics",
    class: "Plus Two",
    type: "Model Exams",
    fileType: "PDF",
    size: "1.2 MB",
    downloads: 410,
    isPremium: false,
  },
  {
    id: "res-5",
    title: "SSLC Geometry Theorem Proofs",
    description: "All important geometry theorems and their step-by-step proofs for the board exams.",
    subject: "Mathematics",
    class: "SSLC",
    type: "Study Notes",
    fileType: "PDF",
    size: "4.5 MB",
    downloads: 980,
    isPremium: true,
  },
  {
    id: "res-6",
    title: "Plus One Sequences & Series Worksheet",
    description: "Weekly assignment worksheet covering AP, GP, and advanced sequence problems.",
    subject: "Mathematics",
    class: "Plus One",
    type: "Worksheets",
    fileType: "PDF",
    size: "1.8 MB",
    downloads: 320,
    isPremium: false,
  }
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-light-gray pt-24 pb-20">
      <Section className="pb-8">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:items-center text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora tracking-tight text-primary-navy mb-4">
              Learning Resources
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 max-w-2xl font-inter mx-auto">
              Access our library of high-quality study materials, practice papers, and revision notes to accelerate your learning.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 mb-10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search resources by topic, class, or keyword..." 
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-all text-charcoal placeholder:text-gray-400"
                />
              </div>
              
              {/* Filter Tabs */}
              <div className="flex items-center overflow-x-auto pb-2 lg:pb-0 scrollbar-hide gap-2">
                {FILTERS.map((filter, index) => (
                  <button 
                    key={filter}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      index === 0 
                        ? "bg-primary-navy text-white" 
                        : "bg-gray-50 text-charcoal hover:bg-gray-100"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm font-semibold text-gray-500 mb-3">
                <Filter className="w-4 h-4 mr-2" />
                CATEGORIES
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(category => (
                  <button 
                    key={category}
                    className="px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 text-gray-600 hover:border-primary-navy hover:text-primary-navy transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map(resource => (
              <div key={resource.id} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-red/10 text-primary-red flex items-center justify-center shrink-0">
                    {resource.fileType === "PDF" ? <FileText className="w-6 h-6" /> : <FileSpreadsheet className="w-6 h-6" />}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-charcoal text-xs font-semibold rounded-full uppercase tracking-wider">
                      {resource.class}
                    </span>
                    {resource.isPremium && (
                      <span className="flex items-center px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-md">
                        <Lock className="w-3 h-3 mr-1" />
                        PREMIUM
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-sora text-primary-navy mb-2 group-hover:text-primary-red transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-charcoal/70 text-sm mb-6 line-clamp-3 flex-1">
                  {resource.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6">
                  <span>{resource.type}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{resource.size}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{resource.downloads} DLs</span>
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-primary-navy font-semibold text-sm hover:bg-gray-100 transition-colors">
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary-navy text-white font-semibold text-sm hover:bg-primary-navy/90 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 rounded-full border border-gray-200 text-charcoal font-medium hover:border-primary-navy hover:text-primary-navy transition-colors">
              Load More Resources
            </button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

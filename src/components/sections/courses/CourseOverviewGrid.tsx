"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MapPin, Users } from "lucide-react"
import { getAllCourses } from "@/src/data/courses"
import { Container } from "@/src/components/layout/container"
import { Heading } from "@/src/components/typography/heading"
import { Text } from "@/src/components/typography/text"

export function CourseOverviewGrid() {
  const courses = getAllCourses()

  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="max-w-3xl mb-16">
          <Heading as="h2" size="l" className="text-[#0D1B2A] mb-4">
            Our Academic Programs
          </Heading>
          <Text variant="large" className="text-gray-600">
            Comprehensive curriculum designed to foster deep understanding and consistent academic excellence.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#E31E24]/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.imageSrc}
                  alt={course.imageAlt}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 uppercase tracking-wider">
                      {course.targetClass}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <p className="text-gray-600 mb-6 flex-1 text-lg">
                  {course.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 mb-8 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <Clock className="w-4 h-4 text-[#E31E24]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#E31E24]" />
                    {course.mode}
                  </div>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-flex items-center justify-between w-full px-6 py-4 bg-gray-50 hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-white rounded-xl font-bold transition-colors group/btn"
                >
                  View Course Details
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

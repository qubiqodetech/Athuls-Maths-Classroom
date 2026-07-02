import { Container } from "@/src/components/layout/container"
import { HeroContent } from "./HeroContent"
import { CourseNavigator } from "./CourseNavigator"
import { FloatingStats } from "./FloatingStats"
import { ScrollIndicator } from "./ScrollIndicator"

export function CoursesHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-navy-900/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-red/[0.03] via-transparent to-transparent" />
        
        {/* Subtle graph grid */}
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.02]" />
        
        {/* Abstract decorative shapes */}
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-primary-red/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 lg:gap-8 items-center">
          <HeroContent />
          
          <div className="relative w-full flex justify-center lg:justify-end">
            <CourseNavigator />
            <FloatingStats />
          </div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  )
}

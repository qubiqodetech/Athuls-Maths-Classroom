interface FacultyHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FacultyHero({ title, subtitle, description, primaryCta, secondaryCta }: FacultyHeroProps) {
  return (
    <section className="bg-[#0D1B2A] text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-gradient-to-br from-[#E31E24]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E31E24] text-sm font-bold tracking-wide mb-6 uppercase">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta && (
            <Link 
              href={primaryCta.href}
              className="w-full sm:w-auto px-8 py-4 bg-[#E31E24] text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center"
            >
              {primaryCta.label}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          )}
          {secondaryCta && (
            <Link 
              href={secondaryCta.href}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

import * as React from "react"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Heading, Text } from "@/src/components/typography"
import { cn } from "@/src/lib/utils"

interface TeacherCardProps {
  name: string
  role: string
  imageSrc: string
  qualifications?: string
  social?: {
    twitter?: string
    linkedin?: string
    facebook?: string
    email?: string
  }
  className?: string
}

export function TeacherCard({
  name,
  role,
  imageSrc,
  qualifications,
  social,
  className,
}: TeacherCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden group border-border/50 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 filter group-hover:brightness-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Social Links Overlay on Hover */}
        {social && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3">
            {social.twitter && <SocialIcon href={social.twitter} icon={<Twitter size={18} />} />}
            {social.linkedin && <SocialIcon href={social.linkedin} icon={<Linkedin size={18} />} />}
            {social.facebook && <SocialIcon href={social.facebook} icon={<Facebook size={18} />} />}
            {social.email && (
              <SocialIcon href={`mailto:${social.email}`} icon={<Mail size={18} />} />
            )}
          </div>
        )}
      </div>

      <CardContent className="p-5 text-center">
        <Heading size="xs" className="mb-1">
          {name}
        </Heading>
        <Text className="text-secondary font-medium text-sm mb-2">{role}</Text>
        {qualifications && <Text className="text-muted-foreground text-xs">{qualifications}</Text>}
      </CardContent>
    </Card>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-secondary transition-colors"
    >
      {icon}
    </a>
  )
}

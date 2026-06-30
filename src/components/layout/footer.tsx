import Link from "next/link"
import { siteConfig } from "@/src/config/site"
import { footerLinks } from "@/src/config/navigation"
import { Container } from "./container"
import { Button } from "@/src/components/ui/button"
import { Text } from "@/src/components/typography"
import { Facebook, Instagram, Twitter, Github, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold text-2xl tracking-tight text-primary-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <Text className="text-primary-foreground/70 max-w-sm">
              {siteConfig.description}
            </Text>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href={siteConfig.links.twitter} icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href={siteConfig.links.instagram} icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href={siteConfig.links.facebook} icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href={siteConfig.links.github} icon={<Github size={20} />} label="GitHub" />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-white transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5 text-secondary" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone size={18} className="shrink-0 text-secondary" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail size={18} className="shrink-0 text-secondary" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Text className="text-sm text-primary-foreground/60 text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </Text>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-primary-foreground/60 hover:text-white transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/80 hover:bg-secondary hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  )
}

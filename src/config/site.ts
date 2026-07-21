export const siteConfig = {
  name: "Athul's Maths Classroom",
  shortName: "AMC",
  description: "Next Generation Educational Platform.",
  url: process.env.APP_URL || "http://localhost:3000",
  ogImage: "/assets/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/athulsmaths",
    github: "https://github.com/athulsmaths",
    instagram: "https://instagram.com/athulsmaths",
    facebook: "https://facebook.com/athulsmaths",
  },
  contact: {
    email: "info@athulsmaths.com",
    phone: "+91 98765 43210",
    address: "Kerala, India",
  },
  theme: {
    primary: "#0D1B2A",
    secondary: "#E31E24",
  }
}

export type SiteConfig = typeof siteConfig

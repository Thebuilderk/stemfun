import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ContactForm } from "@/components/contact-form"
import { Mail, Facebook, Instagram } from "lucide-react"
import type { Metadata } from "next"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export const metadata: Metadata = {
  title: "Contact Us - STEM Fun",
  description: "Get in touch with the STEM Fun team. We'd love to hear from you about our educational products, partnerships, or any questions.",
}

export default function ContactPage() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              {/* Header */}
              <div className="mb-12 text-center">
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Contact Us
                </h1>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  Have a question about our products or just want to say hello? We would love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Email</h3>
                  <a href="mailto:lovestemfun@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    lovestemfun@gmail.com
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Instagram className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Instagram</h3>
                  <a 
                    href="https://www.instagram.com/stemfunfuture?igsh=emRodnlmb3R2dDd0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    @stemfunfuture
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Facebook className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>Social</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61587381697438" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@stemfun6?_r=1&_t=ZN-93fYmc8DnG7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
          <CheckCircle className="h-8 w-8 text-secondary" />
        </div>
        <h3 
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Message Sent!
        </h3>
        <p className="max-w-md text-muted-foreground">
          Thank you for getting in touch. We will get back to you as soon as possible.
        </p>
        <Button 
          variant="outline" 
          className="mt-4 rounded-full bg-transparent"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form 
      action="https://formsubmit.co/lovestemfun@gmail.com" 
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm"
    >
      {/* FormSubmit configuration */}
      <input type="hidden" name="_subject" value="New STEM Fun Contact Form Message" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      {/* Honeypot for spam prevention */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            required 
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your@email.com" 
            required 
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input 
          id="subject" 
          name="subject" 
          placeholder="What is this about?" 
          required 
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Tell us what you'd like to know..."
          rows={6}
          required 
          className="resize-none rounded-lg"
        />
      </div>

      <Button type="submit" className="w-full rounded-full md:w-auto md:self-end" size="lg">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}

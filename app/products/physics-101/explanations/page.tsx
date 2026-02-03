import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ExplanationSection } from "@/components/explanations/explanation-section"
import { TableOfContents } from "@/components/explanations/table-of-contents"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Physics 101 Explanations - STEM Fun",
  description: "Learn about physics concepts covered in our Physics 101 collection. Kid-friendly explanations of electromagnetic waves, gravity, quantum mechanics, and more.",
}

export default function ExplanationsPage() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main className="min-h-screen">
        {/* Header */}
        <section className="border-b border-border/40 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Button asChild variant="ghost" size="sm" className="-ml-2 mb-4">
                  <Link href="/products/physics-101">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Physics 101
                  </Link>
                </Button>
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Physics 101 Explanations
                </h1>
                <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
                  Kid-friendly explanations of all the physics concepts covered in our Physics 101 collection.
                  Use the navigation below to jump to any topic.
                </p>
              </div>
              <Button asChild className="rounded-full">
                <Link href="/products/physics-101#products">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Physics 101
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            {/* Table of Contents - Sticky on Desktop */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <TableOfContents />
            </aside>

            {/* Explanations */}
            <div className="space-y-16">
              <ExplanationSection 
                id="classical"
                title="Classical Physics"
                description="The foundation of physics - concepts that describe everyday phenomena"
                topics={classicalPhysicsTopics}
              />
              
              <ExplanationSection 
                id="modern"
                title="Modern Physics"
                description="Mind-bending discoveries from the 20th century and beyond"
                topics={modernPhysicsTopics}
              />
              
              <ExplanationSection 
                id="interdisciplinary"
                title="Interdisciplinary Physics"
                description="Where physics meets other sciences and explores the cosmos"
                topics={interdisciplinaryTopics}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const classicalPhysicsTopics = [
  {
    id: "electromagnetic-wave",
    title: "Electromagnetic Wave",
    content: "An electromagnetic wave is a kind of energy that travels as waves, like ripples on water, but instead of water, it's made of invisible electric and magnetic fields. Think of the sun's rays or the signals from your radio – those are electromagnetic waves. They travel incredibly fast, at the speed of light, and there are many different kinds, from long-wavelength radio waves to short, powerful gamma rays.",
  },
  {
    id: "longitudinal-waves",
    title: "Longitudinal Waves",
    content: "A longitudinal wave is like a push-and-pull wave where the jiggle (or vibration) happens in the same direction as the wave is traveling. Think of it like squishing and stretching a Slinky toy: the coils bunch up (called compressions) and then spread apart (called rarefactions), and this jiggling travels along the Slinky. A perfect real-world example is a sound wave, where air particles vibrate back and forth in the same direction the sound travels to reach your ears.",
  },
  {
    id: "gravity",
    title: "Gravity",
    content: "Gravity is an invisible force that pulls all things with mass toward each other. It's what makes things fall down, keeps you on the ground, and holds the Moon and Earth in orbit. Bigger, heavier objects like planets have a stronger pull than smaller, lighter objects, which is why you are pulled down by the Earth and not the other way around.",
  },
  {
    id: "calculus",
    title: "Calculus",
    content: "Calculus is the \"math of change,\" helping us understand how things grow, shrink, and move over time, unlike static math like arithmetic.",
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    content: "Thermodynamics is the study of heat, temperature, energy, and how they all relate and change from one form to another. It's about how energy moves around, like how a hot stove transfers heat to your hands or how your body uses energy from food.",
  },
  {
    id: "electromagnetic-spectrum",
    title: "Electromagnetic Spectrum",
    content: "The electromagnetic (EM) spectrum is like a giant rainbow of energy waves that travel through space, but most of them are invisible to us. It's a big family of waves, including radio waves, microwaves, infrared, visible light (the colors we see), ultraviolet, X-rays, and gamma rays. These waves have different lengths and energy, with longer, lower-energy waves at one end and shorter, higher-energy waves at the other.",
  },
]

const modernPhysicsTopics = [
  {
    id: "special-relativity",
    title: "Special Relativity",
    content: "Special Relativity teaches us that motion is always relative, meaning we can only say if something is moving by comparing it to something else. It also says the speed of light is constant for everyone, no matter how fast they are moving. This leads to weird effects: the faster you move, the slower your time passes compared to someone standing still. It also shows that space and time are connected, forming \"spacetime\".",
  },
  {
    id: "general-relativity",
    title: "General Relativity",
    content: "General Relativity says gravity isn't a pull, but a curve in space and time caused by heavy things. Imagine a trampoline: a heavy ball creates a dip, and other objects rolling nearby will follow that curve. Similarly, the Earth makes a dip in the fabric of space-time, and that's why things fall to the ground.",
  },
  {
    id: "emc2",
    title: "E=MC²",
    content: "E=mc² tells us that matter (or mass) and energy are two forms of the same thing that can be changed into each other. The equation means that if you could turn even a tiny bit of matter into pure energy, it would create a huge amount of energy. The \"m\" is the mass, the \"E\" is the energy, and the \"c\" is the speed of light, which is a very, very fast speed, 300 million metres per second. This is the fastest speed anything can go in the whole universe.",
  },
  {
    id: "condensed-matter",
    title: "Condensed Matter Physics",
    content: "Condensed matter physics is like studying how a big group of tiny things, like atoms or molecules, work together to make stuff we see around us, like water, rocks, or even your toys! Imagine a big box of building blocks. Each block is like an atom, and when you stick them together, they can make different shapes, like a tower or a house. Condensed matter physics looks at how these \"blocks\" (atoms) stick together, move, or wiggle to make things solid, liquid, or even shiny like metal.",
  },
  {
    id: "schrodingers-cat",
    title: "Schrödinger's Cat",
    content: "Schrödinger's Cat is a \"thought experiment\" where a cat is placed in a sealed box with a device that has a 50% chance of killing it. The idea is that, according to the strange rules of the tiny world of quantum physics, until we open the box to check, the cat is simultaneously both alive AND dead at the same time. It's only by observing the cat that its fate is decided, forcing it to be either alive or dead. It demonstrates the absurdity of applying the principles of quantum superposition to everyday objects.",
  },
  {
    id: "nebula",
    title: "Nebula",
    content: "A stellar nebula is a giant, colorful cloud of gas and dust in space where new stars are born, like a \"stellar nursery\". Over a long time, gravity pulls clumps of this material together, causing them to heat up, shrink, and eventually form a new star at the center of the cloud.",
  },
  {
    id: "quantum-mechanics",
    title: "Quantum Mechanics",
    content: "Quantum mechanics is the \"rules\" for how the tiniest things in the universe work, like atoms and the parts inside them. In this super-small world, things are weird – particles can be in many places at once, and they don't follow the normal rules we see in our everyday lives.",
  },
  {
    id: "quantum-entanglement",
    title: "Quantum Entanglement",
    content: "Quantum entanglement is when two tiny particles become connected, even when far apart, so that what happens to one instantly affects the other. Imagine two magical, spinning coins that are linked: if one lands on \"heads,\" the other instantly lands on \"tails,\" no matter how far apart they are...even across the universe. It's like they share a secret connection that lets them know what the other is doing.",
  },
  {
    id: "nuclear-fusion",
    title: "Nuclear Fusion",
    content: "Nuclear fusion is when two small, light atoms like hydrogen are squished together so hard and fast that they become one larger, heavier atom, like helium, and release a lot of energy. It's like two tiny Lego bricks clicking together to form a bigger brick, but instead of just joining, they also give off a burst of energy. This process naturally happens inside stars, such as our Sun, providing the heat and light we receive.",
  },
]

const interdisciplinaryTopics = [
  {
    id: "geophysics",
    title: "Geophysics",
    content: "Geophysics is like being an Earth detective who uses the rules of physics to figure out what's happening under the ground and around our planet. Geophysicists study things like earthquakes, volcanoes, the Earth's magnetic field, and the way gravity works to learn about Earth's inside, its history, and how to stay safe from natural disasters.",
  },
  {
    id: "biophysics",
    title: "Biophysics",
    content: "Biophysics is like being a detective for the body, using tools and ideas from physics to solve mysteries about biology. Biophysicists study how tiny things like molecules and cells work, and how they all fit together to make complex things like the brain or the immune system function. They ask questions like, \"How do our muscles move?\" or \"How do our cells send signals to each other?\" by looking at the physical rules that govern living things.",
  },
  {
    id: "astrophysics",
    title: "Astrophysics",
    content: "Astrophysics is the study of how the universe works, using the rules of physics to understand stars, planets, galaxies, and other space objects. It's like being a space detective who uses tools like telescopes to figure out what things in space are made of, how they move, and why they do what they do. Astrophysicists also investigate how the universe began and how it's changing today.",
  },
  {
    id: "string-theory",
    title: "String Theory",
    content: "String theory is the idea that everything, including you and the whole universe, is made of incredibly tiny, vibrating strings, not tiny dots. These \"strings\" are like guitar strings, and the way they vibrate determines what kind of particle they are, similar to how different vibrations produce different musical notes. String theory is an attempt to explain all the fundamental forces and particles in the universe with a single framework, but it's still a theoretical idea that hasn't been proven by experiments yet.",
  },
  {
    id: "big-bang",
    title: "Big Bang",
    content: "The Big Bang is the idea that our universe started as a tiny, hot point about 14 billion years ago and then expanded very rapidly, like a giant stretch, to become everything we see today. As it expanded, it cooled, and tiny bits of matter formed, which later clumped together to make atoms, then stars, and finally galaxies. The universe is still expanding today.",
  },
  {
    id: "black-holes",
    title: "Black Holes",
    content: "A black hole is a place in space with super-strong gravity, so strong that nothing, not even light, can escape it. It forms when a massive star collapses and all its \"stuff\" gets squeezed into a tiny space, creating a powerful pull. We can't see black holes because they eat up all the light, but we know they're there by watching how stars and dust act around them.",
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    content: "Dark matter is an invisible substance in space that gives things extra gravity, which helps hold galaxies together. We can't see it because it doesn't interact with light or other normal matter. Scientists know it exists because of the way it pulls on visible things, like stars and gas, making them move faster than they should. It's called \"dark\" because we can't see it, and it makes up a large part of the universe.",
  },
  {
    id: "dark-energy",
    title: "Dark Energy",
    content: "Dark energy is the mysterious \"something\" making our universe expand faster and faster, like an anti-gravity force. It's invisible and not like the matter we can see. Imagine you blew up a balloon with dots on it; as the balloon gets bigger, the dots move farther apart. Dark energy is what's making the balloon get bigger, not just steady, but at an ever-increasing speed.",
  },
]

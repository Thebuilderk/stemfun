import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ExplanationSection } from "@/components/explanations/explanation-section"
import { ChemistryTableOfContents } from "@/components/explanations/chemistry-table-of-contents"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chemistry 101 Explanations - STEM Fun",
  description: "Learn about chemistry concepts covered in our Chemistry 101 collection. Kid-friendly explanations of atoms, molecules, the periodic table, and more.",
}

export default function ChemistryExplanationsPage() {
  return (
    <>
      <PhysicsBackground />
      <Navigation />
      <main className="min-h-screen">
        <section className="border-b border-border/40 py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <Button asChild variant="ghost" size="sm" className="-ml-2 mb-4">
                  <Link href="/products/chemistry-101">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Chemistry 101
                  </Link>
                </Button>
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Chemistry 101 Explanations
                </h1>
                <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
                  Kid-friendly explanations of all the chemistry concepts covered in our Chemistry 101 collection.
                  Use the navigation below to jump to any topic.
                </p>
              </div>
              <Button asChild className="rounded-full">
                <Link href="/products/chemistry-101#products">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Chemistry 101
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <ChemistryTableOfContents />
            </aside>

            <div className="space-y-16">
              <ExplanationSection 
                id="matter-structure"
                title="Matter & Structure"
                description="The building blocks of everything around us"
                topics={matterStructureTopics}
              />
              
              <ExplanationSection 
                id="chemistry-action"
                title="Chemistry in Action"
                description="How chemistry works in the real world"
                topics={chemistryActionTopics}
              />
              
              <ExplanationSection 
                id="applications"
                title="Applications"
                description="Chemistry powering technology and discovery"
                topics={applicationTopics}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const matterStructureTopics = [
  {
    id: "atoms",
    title: "An Atom (using Oxygen as Example)",
    content: "An atom is the tiniest building block of everything. Oxygen has a big center (nucleus) with 8 protons and 8 neutrons, and 8 tiny electrons zooming around it like bees around a hive. That makes oxygen the gas we breathe!",
  },
  {
    id: "molecules",
    title: "A Molecule (using Water H\u2082O)",
    content: "A molecule is two or more atoms stuck together. Water is two hydrogen atoms holding hands very tightly with one oxygen atom (H\u2082O). That's why water is wet and can make puddles!",
  },
  {
    id: "ionic-covalent-bonds",
    title: "Ionic and Covalent Bonds",
    content: "Covalent bond = friends sharing toys (electrons) so both are happy, like in water or sugar. Ionic bond = one atom gives its toy (electron) to another, so one becomes + and one becomes \u2013 and they stick together like magnets, like in salt.",
  },
  {
    id: "states-of-matter",
    title: "States of Matter: Solid, Liquid, Gas and Plasma",
    content: "Solid \u2014 particles stuck tight, can't move much (ice). Liquid \u2014 particles slide past each other (water). Gas \u2014 particles zoom everywhere (steam). Plasma \u2014 super-hot gas where electrons fly off atoms (like in lightning or the Sun). Heat ice \u2192 it melts to water \u2192 more heat makes it boil to steam \u2192 even more heat turns it into plasma. Cool plasma \u2192 gas \u2192 liquid \u2192 solid again.",
  },
  {
    id: "periodic-table",
    title: "Periodic Table",
    content: "It's a giant chart of all the different kinds of atoms (elements). Each box has a name (like oxygen or gold), a number, and shows how atoms behave. It's like the phone book for every building block in the universe!",
  },
  {
    id: "polymerisation",
    title: "Polymerisation",
    content: "It's like making a super long friendship chain. Small plastic pieces (called monomers) join together one after another to make very long chains called polymers. That's how we get plastic bags, bottles and Lego bricks!",
  },
]

const chemistryActionTopics = [
  {
    id: "oil-and-gas",
    title: "Oil and Gas",
    content: "Oil is a thick, black liquid that comes from very old plants and animals buried deep underground. We turn it into petrol for cars and gas for cooking and heating. Both are made of carbon chains that burn really well to give us energy.",
  },
  {
    id: "ph-scale",
    title: "pH Scale",
    content: "The pH scale measures how acidic or alkaline a liquid is, ranging from 0 to 14. A value of 7 is neutral (e.g., water), below 7 is acidic (0\u20136), and above 7 is alkaline/basic (8\u201314). Lower numbers are more acidic, while higher numbers are more alkaline, based on hydrogen concentration.",
  },
  {
    id: "enzymes",
    title: "Enzymes",
    content: "Enzymes are tiny helper proteins in your body that make chemical jobs go super fast. They're like magic scissors that cut food into small pieces so your body can use it for energy.",
  },
  {
    id: "photosynthesis",
    title: "Photosynthesis",
    content: "Plants use sunlight, water and carbon dioxide (from the air) to make their own food (sugar) and give out oxygen for us to breathe. It's like plants cooking dinner using sunshine as the oven!",
  },
  {
    id: "pharmaceutical-drugs",
    title: "Pharmaceutical Drugs",
    content: "These are special chemicals made in labs to help sick people feel better. Some stop pain (like paracetamol), some kill germs (antibiotics), or help your body work properly (like insulin for diabetes).",
  },
  {
    id: "boyles-law",
    title: "Boyle's Law",
    content: "If you squeeze a balloon smaller (smaller volume), the air inside gets pushed and pushes back harder (higher pressure). If you make the space bigger, pressure goes down. Squeeze = high pressure, stretch = low pressure.",
  },
]

const applicationTopics = [
  {
    id: "nuclear-bombs",
    title: "Nuclear Bombs",
    content: "They use special atoms (like uranium) that split apart very fast and release huge energy all at once. That makes a giant explosion, heat and light \u2014 that's why they are very dangerous.",
  },
  {
    id: "rocket-propulsion",
    title: "Rocket Propulsion",
    content: "Rockets burn special fuels very fast to make hot gas shoot out the back super hard \u2014 that pushes the rocket up. Liquid hydrogen + liquid oxygen (or methane + oxygen) burn super clean and strong, giving lots of push to reach space!",
  },
  {
    id: "chemistry-apparatuses",
    title: "Chemistry Apparatuses",
    content: "Microscope \u2014 lets you see tiny things like cells or salt crystals super close. Beaker \u2014 tall glass cup to mix and hold liquids. Flask \u2014 special bottle with a round bottom to heat liquids safely. Test tube \u2014 small glass tube for doing little experiments. Bunsen burner \u2014 gives a very hot flame to heat things in the lab.",
  },
]

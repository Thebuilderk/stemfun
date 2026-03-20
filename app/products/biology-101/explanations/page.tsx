import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PhysicsBackground } from "@/components/physics-background"
import { ExplanationSection } from "@/components/explanations/explanation-section"
import { BiologyTableOfContents } from "@/components/explanations/biology-table-of-contents"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Biology 101 Explanations - STEM Fun",
  description: "Learn about biology concepts covered in our Biology 101 collection. Kid-friendly explanations of the human body, plants, animals, microorganisms, and more.",
}

export default function BiologyExplanationsPage() {
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
                  <Link href="/products/biology-101">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Biology 101
                  </Link>
                </Button>
                <h1 
                  className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Biology 101 Explanations
                </h1>
                <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
                  Kid-friendly explanations of all the biology concepts covered in our Biology 101 collection.
                  Use the navigation below to jump to any topic.
                </p>
              </div>
              <Button asChild className="rounded-full">
                <Link href="/products/biology-101#products">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Biology 101
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <BiologyTableOfContents />
            </aside>

            <div className="space-y-16">
              <ExplanationSection 
                id="human-body"
                title="The Human Body"
                description="Understanding the amazing machine that is your body"
                topics={humanBodyTopics}
              />
              
              <ExplanationSection 
                id="botany"
                title="Botany (Plants)"
                description="How plants grow, make food, and reproduce"
                topics={botanyTopics}
              />
              
              <ExplanationSection 
                id="animals"
                title="Animals"
                description="The incredible diversity of the animal kingdom"
                topics={animalTopics}
              />

              <ExplanationSection 
                id="microorganisms"
                title="Microorganisms"
                description="Tiny living things that are all around us"
                topics={microorganismTopics}
              />

              <ExplanationSection 
                id="exobiology"
                title="Exobiology"
                description="The search for life beyond Earth"
                topics={exobiologyTopics}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const humanBodyTopics = [
  {
    id: "brain",
    title: "Brain",
    content: "Your brain is like the boss of your whole body. It thinks, remembers, feels happy or scared, and tells your arms and legs what to do.",
  },
  {
    id: "heart",
    title: "Heart",
    content: "The heart is a strong pump that never stops beating. It pushes blood all around your body to carry oxygen and food to every part.",
  },
  {
    id: "lungs",
    title: "Lungs",
    content: "Lungs are like two big balloons in your chest. When you breathe in, they fill with air and give oxygen to your blood.",
  },
  {
    id: "rib-cage",
    title: "Rib Cage",
    content: "The rib cage is a bony shield made of curved ribs that protects your heart and lungs like a strong cage around treasure.",
  },
  {
    id: "liver",
    title: "Liver",
    content: "The liver is a big soft organ that cleans your blood, helps digest food, and stores energy so you can run and play.",
  },
  {
    id: "kidneys",
    title: "Kidneys",
    content: "Kidneys are two bean-shaped filters. They clean extra water and waste from your blood and turn it into pee.",
  },
  {
    id: "stomach",
    title: "Stomach",
    content: "Your stomach is a stretchy bag that mixes food with juices to break it down into tiny pieces your body can use.",
  },
  {
    id: "intestines",
    title: "Intestines (Small & Large)",
    content: "The intestines are very long tubes. The small one takes good nutrients from food; the large one soaks up water so poop isn't too runny.",
  },
  {
    id: "bones",
    title: "Bones",
    content: "Bones are hard and strong like a living frame. They hold you up, protect organs, and make blood cells inside them.",
  },
  {
    id: "chromosomes",
    title: "XY & XX Chromosomes",
    content: "Chromosomes decide if you're a boy or girl. XX = girl (two X's), XY = boy (one X and one Y). Everyone gets one set from mum and one from dad.",
  },
  {
    id: "dna",
    title: "DNA (Double Helix)",
    content: "DNA is like a twisted ladder inside every cell. It has instructions that tell your body how to grow, what colour eyes you have, and everything that makes you YOU!",
  },
  {
    id: "cell-structure",
    title: "Cell Structure",
    content: "A cell is the tiniest living unit. It has a jelly inside, a control centre (nucleus with DNA), a wall around it, and tiny power stations that make energy.",
  },
]

const botanyTopics = [
  {
    id: "tree-structure",
    title: "Structure of a Tree",
    content: "Roots suck up water and food from soil. The trunk is the strong stem. Branches hold leaves that catch sunlight, flowers make seeds, and fruits protect baby seeds.",
  },
  {
    id: "pollination",
    title: "Pollination",
    content: "Pollination is how plants make seeds. Bees, butterflies or wind carry yellow pollen from one flower to another so fruits and new plants can grow.",
  },
  {
    id: "photosynthesis",
    title: "Photosynthesis",
    content: "Plants use sunlight, water from roots, and carbon dioxide from air to make their own food (sugar). They give out oxygen for us to breathe \u2013 like a kitchen powered by the sun!",
  },
  {
    id: "germination",
    title: "Germination",
    content: "Germination is when a seed wakes up. It drinks water, cracks open, grows a tiny root down and a shoot up to become a baby plant.",
  },
  {
    id: "wood",
    title: "Wood",
    content: "Wood is the hard, strong stuff inside tree trunks. It's made of long tubes that carry water up and give the tree strength to stand tall for many years.",
  },
]

const animalTopics = [
  {
    id: "vertebrates-invertebrates",
    title: "Vertebrates vs Invertebrates",
    content: "Vertebrates have a backbone (spine) \u2013 like humans, dogs, birds, fish. Invertebrates have no backbone \u2013 like insects, worms, jellyfish, snails.",
  },
  {
    id: "animal-groups",
    title: "Main Animal Groups",
    content: "Mammals \u2013 warm blood, fur/hair, drink milk from mum (humans, cats, whales). Birds \u2013 feathers, beaks, lay eggs, most can fly. Reptiles \u2013 scaly skin, cold-blooded, lay eggs (snakes, lizards, turtles). Amphibians \u2013 smooth skin, live in water then land (frogs, toads). Fish \u2013 gills, fins, live in water. Insects \u2013 six legs, three body parts (butterflies, ants, bees). Arachnids \u2013 eight legs, no wings (spiders, scorpions). Molluscs \u2013 soft body, often a shell (snails, octopuses, clams). Cnidaria \u2013 stingy tentacles (jellyfish, corals). Porifera \u2013 simple sponges. Annelida \u2013 segmented worms (earthworms). Crustaceans \u2013 hard shell, lots of legs (crabs, lobsters, shrimp). Echinodermata \u2013 spiny skin, star shape (starfish, sea urchins). Platyhelminthes \u2013 flat worms.",
  },
]

const microorganismTopics = [
  {
    id: "virus",
    title: "Virus",
    content: "A virus is a tiny germ that can't live alone. It sneaks inside your cells and makes copies of itself, which can make you sick (like a cold or flu).",
  },
  {
    id: "bacteria",
    title: "Bacteria",
    content: "Bacteria are super small living things. Some are bad and make you ill, but most are good \u2013 they help digest food and make yoghurt!",
  },
  {
    id: "fungi",
    title: "Fungi",
    content: "Fungi are like mushrooms and mould. Some grow on old bread, some help plants, and some (like yeast) make bread rise.",
  },
  {
    id: "algae",
    title: "Algae",
    content: "Algae are tiny plant-like things that live in water. They use sunlight to make food and give lots of oxygen \u2013 they're like grass of the sea!",
  },
  {
    id: "amoeba",
    title: "Amoeba",
    content: "An amoeba is a single-cell blob that moves and eats by stretching out arms. It lives in ponds and catches food like a living jelly.",
  },
]

const exobiologyTopics = [
  {
    id: "exobiology",
    title: "Exobiology",
    content: "Exobiology is the study of life that might exist somewhere else in space \u2013 on Mars, moons, or faraway planets. Scientists look for water, chemicals and tiny signs that aliens (even microbes) could live there!",
  },
]

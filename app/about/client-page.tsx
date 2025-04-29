"use client"

import Image from "next/image"
import { Coffee, Dumbbell, BookOpen, PenTool, Globe } from "lucide-react"
import ConnectSection from "@/components/ConnectSection"

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">About Me</h1>
              <p className="text-gray-400 text-lg">Software engineer, explorer, and lifelong learner.</p>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2292-019aWEtaQKO4sx5JgMnU206SpQrOH0.webp"
                alt="Juan Carlos Jirón Juárez"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="sticky top-24">
                <span className="text-sm text-gray-400 uppercase tracking-wider">01</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">Who I Am</h2>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I'm Juan Carlos Jirón Juárez, someone who enjoys exploring, learning, and constantly challenging
                himself. I like finding the balance between structure and creativity, between logic and intuition. While
                I spend a lot of my time building things with technology, what truly defines me are the experiences,
                people, and moments that give meaning to what I do.
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden mt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_jc.JPG-t7NH3An3HfZoN8EjQkaOKgrPbs11zk.jpeg"
                  alt="Juan Carlos"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Life Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="sticky top-24">
                <span className="text-sm text-gray-400 uppercase tracking-wider">02</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">My Life Philosophy</h2>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I believe in constant progress and the importance of staying in motion, both physically and mentally. I
                practice Muay Thai because it teaches me discipline and resilience, and I'd love to travel to Thailand
                to experience training and fighting there. I also find peace in activities like yoga, meditation, and
                walking in nature, which help balance the fast-paced rhythm I tend to live by.
              </p>
              <p className="text-lg text-gray-300">
                I'm always looking for new challenges, whether it's trying to master a muscle-up at the gym,
                experimenting with new recipes in the kitchen, or diving into something completely different from what I
                already know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Things I'm Passionate About Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="sticky top-24">
                <span className="text-sm text-gray-400 uppercase tracking-wider">03</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">Things I'm Passionate About</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Cooking</h3>
                <p className="text-gray-400">
                  I love experimenting in the kitchen, from making a great cup of coffee to preparing pasta or trying
                  new recipes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Training</h3>
                <p className="text-gray-400">
                  I enjoy structuring my workout routines and seeing progress, along with the satisfaction of a great
                  workout.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Learning</h3>
                <p className="text-gray-400">
                  I like immersing myself in new topics, from philosophy to artificial intelligence, always eager to
                  understand more.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Writing</h3>
                <p className="text-gray-400">
                  I've started sharing thoughts and insights on Medium and LinkedIn because I believe the best way to
                  learn is by explaining what you know.
                </p>
              </div>
              <div className="space-y-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Exploring</h3>
                <p className="text-gray-400">
                  Traveling and discovering new places inspires me and reminds me of how big the world is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Won't See on My Resume Section */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <div className="sticky top-24">
                <span className="text-sm text-gray-400 uppercase tracking-wider">04</span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-2">What You Won't See on My Resume</h2>
              </div>
            </div>
            <div className="space-y-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-amber-500 text-xl">🔸</span>
                  <p className="text-gray-300">
                    One of my goals is to create something that truly impacts people—something that goes beyond just
                    writing code.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500 text-xl">🔸</span>
                  <p className="text-gray-300">
                    I sometimes get obsessed with details, which leads me to perfect things more than necessary (but
                    also to constantly improve).
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500 text-xl">🔸</span>
                  <p className="text-gray-300">
                    I love reflecting on deep topics like purpose, motivation, and what truly makes us happy.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-amber-500 text-xl">🔸</span>
                  <p className="text-gray-300">
                    I enjoy random weekly gossip just as much as a serious conversation about entrepreneurship.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <ConnectSection />
    </div>
  )
}

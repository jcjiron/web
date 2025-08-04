"use client"
import { Database, Workflow, TrendingDown } from "lucide-react"

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Software that no longer scales",
      description: "Your system worked perfectly with 50 employees, but now with 300, it constantly crashes.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Reliance on Excel and patches",
      description:
        "Critical processes that depend on shared spreadsheets and temporary solutions that became permanent.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Systems that don't communicate",
      description: "Each area has its own tool, and no one knows what's happening in real-time.",
    },
  ]

  return (
    <section id="pain-points" className="py-20 px-4 sm:px-6 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">BUSINESS REALITIES</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Do any of these situations sound familiar?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I have worked with companies that have experienced exactly these problems. The good news is that all of them
            have a solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[hsl(var(--surface-elevation-1))] border border-zinc-800"
            >
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 text-amber-500">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Empathetic transition */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            If you've nodded your head reading this, you're not alone.
            <span className="text-white font-semibold"> And more importantly: there is a solution.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

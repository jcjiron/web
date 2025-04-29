import Image from "next/image"

type StatType = {
  number: string
  plus?: boolean
  label: string
  sublabel: string
  avatars?: string[]
}

const stats: StatType[] = [
  {
    number: "100",
    label: "Bug Resolution",
    sublabel: "Success Rate",
  },
  {
    number: "30",
    plus: true,
    label: "UI Improvements",
    sublabel: "Implemented",
  },
  {
    number: "100",
    label: "On-Time Delivery",
    sublabel: "Percentage Rate",
  },
]

export default function StatisticsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[hsl(var(--surface-elevation-2))] rounded-3xl transform translate-y-4 blur-sm opacity-50" />
          <div className="relative bg-[hsl(var(--surface-elevation-1))] rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">IMPACT</div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    Delivering Results Through Technical Excellence
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-3xl sm:text-4xl font-bold">
                        {stat.number}
                        {stat.plus && <span className="text-amber-500">+</span>}
                      </div>
                      <div className="space-y-1">
                        <div className="font-medium">{stat.label}</div>
                        <div className="text-sm text-gray-400">{stat.sublabel}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Project success metrics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

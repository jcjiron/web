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
    number: "2",
    label: "Major Projects",
    sublabel: "Successfully Delivered",
    avatars: [
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
      "/placeholder.svg?height=32&width=32",
    ],
  },
  {
    number: "100",
    plus: true,
    label: "Features",
    sublabel: "Implemented",
  },
  {
    number: "99.9",
    label: "System Uptime",
    sublabel: "Percentage",
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
                    Delivering Enterprise Solutions at Scale
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
                      {stat.avatars && (
                        <div className="flex -space-x-2">
                          {stat.avatars.map((avatar, i) => (
                            <div
                              key={i}
                              className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[hsl(var(--surface-elevation-1))]"
                            >
                              <Image
                                src={avatar || "/placeholder.svg"}
                                alt="Team member"
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Enterprise solutions visualization"
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

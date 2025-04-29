import Image from "next/image"

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
                    Transforming Businesses Through Brand Innovation
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    {
                      number: "25",
                      plus: true,
                      label: "Brand Identities",
                      sublabel: "Created & Launched",
                    },
                    {
                      number: "40",
                      plus: true,
                      label: "Brand Recognition",
                      sublabel: "Percentage Increase",
                    },
                    {
                      number: "95",
                      label: "Client Satisfaction",
                      sublabel: "Percentage Rate",
                    },
                  ].map((stat, index) => (
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20lavabos%20ovalines%20de%20marmol%20en%20un%20ban%CC%83o%20lujoso.jpg-pKDfDPbaTp1qQGSnQ1P4EkL24AYGMw.jpeg"
                  alt="Luxury marble sinks showcasing premium design and attention to detail"
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

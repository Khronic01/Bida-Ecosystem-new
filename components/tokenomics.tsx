"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function Tokenomics() {
  const data = [
    { name: "Token Sale, Ecosystem & Airdrop", value: 70, color: "#ff0099" },
    { name: "Development Team", value: 15, color: "#cc00ff" },
    { name: "Marketing", value: 10, color: "#9933ff" },
    { name: "Partnerships", value: 5, color: "#6600cc" },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed text-pretty">
            Strategic token distribution designed for sustainable ecosystem growth and community empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-8 hover-glow order-2 lg:order-1">
            <ResponsiveContainer width="100%" height={300} className="sm:h-[400px]">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={80}
                  className="sm:outerRadius-[120]"
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {data.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 sm:p-6 hover-glow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold">{item.name}</h3>
                  <span className="text-xl sm:text-2xl font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

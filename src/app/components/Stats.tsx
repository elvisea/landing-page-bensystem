import { Card, CardContent } from "@/components/ui/card"
import { content } from "../content/page-content"

export function Stats() {
  const { title, subtitle, items } = content.stats

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((stat, index) => (
            <Card
              key={index}
              className="bg-blue-800 border-blue-700"
            >
              <CardContent className="p-6 text-center">
                <div className="text-blue-300 mb-3">
                  <stat.Icon className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-blue-200 text-sm">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
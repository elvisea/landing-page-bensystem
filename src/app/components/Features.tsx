import { Card, CardContent } from "@/components/ui/card"
import { content } from "../content/page-content"

export function Features() {
  const { title, subtitle, items } = content.features

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((feature, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300 border-blue-100"
            >
              <CardContent className="p-6 text-center">
                <div className="text-blue-600 mb-4">
                  <feature.Icon className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
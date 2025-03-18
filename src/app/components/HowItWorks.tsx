import { CheckCircle2 } from "lucide-react"
import { content } from "../content/page-content"

export function HowItWorks() {
  const { title, subtitle, steps } = content.howItWorks

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-[21px] top-0 h-full w-1 bg-blue-200 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="mb-12 relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 z-10 bg-white p-1 rounded-full">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {step.description}
                    </p>
                    {step.features && (
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
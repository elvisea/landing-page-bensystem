'use client'

import { Star } from 'lucide-react'

import { Card, CardContent } from "@/components/ui/card"
import { content } from '../content/page-content'

export function Reviews() {
  const { title, subtitle, items } = content.reviews

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((review, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>

                  <blockquote className="text-gray-700 mb-4">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  <footer className="text-sm font-medium text-gray-900">
                    {review.name}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
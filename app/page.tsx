'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import quotes from "../quote.json"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState<string[]>([])

  const handleGenerate = () => {
    const filtered = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .map((q) => q.text)
      .slice(0, 3)
    setResult(filtered)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-2xl transition-all">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          ✨ Quote Generator
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Enter a topic and get 3 quotes related to it.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Try 'motivation', 'inspiration'..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-grow bg-white/60"
          />
          <Button
            onClick={handleGenerate}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold"
          >
            Generate
          </Button>
        </div>

        <div className="space-y-4 text-gray-700 text-lg">
          {result.length === 0 ? (
            <p className="text-center text-gray-500 italic">No quotes yet</p>
          ) : (
            result.map((quote, index) => (
              <div
                key={index}
                className="bg-white/60 rounded-xl p-4 shadow-md border border-white/30"
              >
                <p>“{quote}”</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

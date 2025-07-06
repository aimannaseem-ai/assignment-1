'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import quotes from "../quote.json"

const topicEmojis: Record<string, string> = {
  motivation: "🚀",
  inspiration: "💡",
  success: "🏆",
  friendship: "👯‍♂️",
  happiness: "😊",
}

export default function Home() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState<string[]>([])
  const [random, setRandom] = useState<string | null>(null)

  const handleGenerate = () => {
    const filtered = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .map((q) => q.text)
      .slice(0, 3)
    setResult(filtered)
    setRandom(null) // clear random quote
  }

  const handleRandom = () => {
    const allQuotes = quotes.map((q) => q.text)
    const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)]
    setRandom(randomQuote)
    setResult([]) // clear topic quotes
  }

  const emoji = topicEmojis[topic.toLowerCase()] || "💬"

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/80 border border-white/30 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-2xl transition-all">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2 tracking-tight">
  {emoji} Quote Generator
</h1>

<p className="text-center text-gray-600 mb-6 text-sm">
  Available topics: 
  <span className="inline-block px-2 py-1 mx-1 rounded-full bg-purple-100 text-purple-700 font-medium">
    motivation
  </span>
  <span className="inline-block px-2 py-1 mx-1 rounded-full bg-blue-100 text-blue-700 font-medium">
    inspiration
  </span>
  <span className="inline-block px-2 py-1 mx-1 rounded-full bg-green-100 text-green-700 font-medium">
    success
  </span>
  <span className="inline-block px-2 py-1 mx-1 rounded-full bg-pink-100 text-pink-700 font-medium">
    friendship
  </span>
  <span className="inline-block px-2 py-1 mx-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
    happiness
  </span>
</p>


        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input
            placeholder="Enter topic (e.g. success)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="flex-grow bg-white/60"
          />
          <Button onClick={handleGenerate} className="bg-blue-600 hover:bg-blue-700 text-white">
            Generate
          </Button>
          <Button onClick={handleRandom} variant="outline">
            🎲 Random
          </Button>
        </div>

        {result.length > 0 && (
          <div className="space-y-4 mt-6 text-gray-700 text-lg">
            {result.map((quote, index) => (
              <div
                key={index}
                className="bg-white/60 rounded-xl p-4 shadow-sm border border-white/30"
              >
                <p className="italic text-center">“{quote}”</p>
              </div>
            ))}
          </div>
        )}

        {random && (
          <div className="mt-6 bg-white/70 border border-white/30 rounded-xl p-6 shadow-lg text-xl text-center text-purple-800 font-semibold">
            “{random}”
          </div>
        )}
      </div>
    </main>
  )
}

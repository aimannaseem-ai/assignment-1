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
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">Quote Generator</h1>
        <Input
          placeholder="Enter topic (e.g. motivation)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleGenerate}>Generate Quotes</Button>

        <ul className="list-disc pl-5 space-y-2 mt-4">
          {result.map((quote, index) => (
            <li key={index} className="text-gray-700">{quote}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

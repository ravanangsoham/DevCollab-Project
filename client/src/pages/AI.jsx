import { useState } from "react"
import { Link } from "react-router-dom"

function AI() {

  const [prompt, setPrompt] =
    useState("")

  const [response, setResponse] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const askAI = () => {

    if (!prompt) {
      alert("Enter a prompt")
      return
    }

    setLoading(true)

    setTimeout(() => {

      setResponse(
        `AI Suggestions for:
${prompt}

• Improve UI Design
• Optimize backend
• Add cloud deployment
• Add real-time collaboration`
      )

      setLoading(false)

    }, 1000)
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        AI Assistant 🤖
      </h1>

      {/* NAVBAR */}
      <div className="flex gap-4 mb-10 flex-wrap">

        <Link
          to="/"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/tasks"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Tasks
        </Link>

        <Link
          to="/analytics"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Analytics
        </Link>

      </div>

      {/* INPUT BOX */}
      <div className="bg-gray-800 p-10 rounded-2xl">

        <textarea
          rows="5"
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          placeholder="Ask AI anything..."
          className="w-full p-5 rounded bg-gray-700 outline-none mb-5"
        />

        <button
          onClick={askAI}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Ask AI
        </button>

      </div>

      {/* RESPONSE */}
      <div className="bg-gray-800 p-10 rounded-2xl mt-10">

        <h2 className="text-3xl font-bold mb-5">
          AI Response
        </h2>

        {loading ? (

          <p>Thinking...</p>

        ) : (

          <pre className="whitespace-pre-wrap">
            {response}
          </pre>

        )}

      </div>

    </div>
  )
}

export default AI
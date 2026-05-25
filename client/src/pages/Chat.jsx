import { useEffect, useState } from "react"

import io from "socket.io-client"

import { Link } from "react-router-dom"

const socket = io(
  "http://localhost:5000"
)

function Chat() {

  const [message, setMessage] =
    useState("")

  const [messages, setMessages] =
    useState([])

  // RECEIVE MESSAGE
  useEffect(() => {

    socket.on(
      "receiveMessage",
      (data) => {

        setMessages((prev) => [
          ...prev,
          data,
        ])
      }
    )

    return () => {

      socket.off(
        "receiveMessage"
      )
    }

  }, [])

  // SEND MESSAGE
  const sendMessage = () => {

    if (!message) return

    socket.emit(
      "sendMessage",
      message
    )

    setMessage("")
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Team Chat 💬
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
          to="/meeting"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Meetings
        </Link>

      </div>

      {/* CHAT BOX */}
      <div className="bg-gray-800 p-6 rounded-2xl h-[500px] overflow-y-auto mb-6">

        {messages.map(
          (msg, index) => (

            <div
              key={index}
              className="bg-blue-600 p-4 rounded-xl mb-4"
            >

              {msg}

            </div>
          )
        )}

      </div>

      {/* INPUT */}
      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          className="flex-1 p-4 rounded bg-gray-700 outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 px-6 py-3 rounded"
        >
          Send
        </button>

      </div>

    </div>
  )
}

export default Chat
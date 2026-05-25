import { useState } from "react"
import { Link } from "react-router-dom"

function Meeting() {

  const [roomId, setRoomId] =
    useState("")

  const [joined, setJoined] =
    useState(false)

  const joinMeeting = () => {

    if (!roomId) {

      alert("Enter Room ID")

      return
    }

    setJoined(true)
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Team Meetings 🎥
      </h1>

      {/* NAVIGATION */}
      <div className="flex gap-4 mb-10">

        <Link
          to="/"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/chat"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Chat
        </Link>

        <Link
          to="/tasks"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Tasks
        </Link>

      </div>

      {!joined ? (

        <div className="bg-gray-800 p-10 rounded-2xl max-w-xl">

          <input
            type="text"
            placeholder="Enter Meeting Room ID"
            value={roomId}
            onChange={(e) =>
              setRoomId(e.target.value)
            }
            className="w-full p-4 rounded bg-gray-700 outline-none mb-5"
          />

          <button
            onClick={joinMeeting}
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            Join Meeting
          </button>

        </div>

      ) : (

        <div className="bg-gray-800 p-10 rounded-2xl">

          <h2 className="text-3xl font-bold mb-5">
            Meeting Room:
            {" "}
            {roomId}
          </h2>

          {/* FAKE VIDEO AREA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-black h-72 rounded-xl flex items-center justify-center text-2xl">
              🎥 Your Camera
            </div>

            <div className="bg-black h-72 rounded-xl flex items-center justify-center text-2xl">
              👥 Team Member
            </div>

          </div>

          {/* CONTROLS */}
          <div className="flex gap-5 mt-8">

            <button
              className="bg-red-600 px-6 py-3 rounded"
              onClick={() =>
                setJoined(false)
              }
            >
              Leave Meeting
            </button>

            <button
              className="bg-green-600 px-6 py-3 rounded"
            >
              Mute
            </button>

            <button
              className="bg-yellow-600 px-6 py-3 rounded"
            >
              Share Screen
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default Meeting
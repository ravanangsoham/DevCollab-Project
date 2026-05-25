import { useEffect, useRef, useState } from "react"

import { Link } from "react-router-dom"

function VideoCall() {

  const videoRef = useRef(null)

  const [stream, setStream] =
    useState(null)

  // ACCESS CAMERA
  useEffect(() => {

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })

      .then((currentStream) => {

        setStream(currentStream)

        if (videoRef.current) {

          videoRef.current.srcObject =
            currentStream
        }
      })

      .catch((err) => {

        console.log(err)
      })

  }, [])

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Video Call 🎥
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
          to="/chat"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Chat
        </Link>

        <Link
          to="/meeting"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Meetings
        </Link>

      </div>

      {/* VIDEO */}
      <div className="bg-gray-800 p-10 rounded-2xl">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded-2xl"
        />

      </div>

      {/* CONTROLS */}
      <div className="flex gap-5 mt-8">

        <button
          className="bg-red-600 px-6 py-3 rounded"
        >
          End Call
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
  )
}

export default VideoCall
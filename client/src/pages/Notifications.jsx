import { useState } from "react"

import { Link } from "react-router-dom"

function Notifications() {

  const [notifications] =
    useState([

      {
        id: 1,
        title:
          "New Task Assigned",
        message:
          "You were assigned a UI task",
      },

      {
        id: 2,
        title:
          "Meeting Scheduled",
        message:
          "Team meeting at 5 PM",
      },

      {
        id: 3,
        title:
          "Project Updated",
        message:
          "Backend API completed",
      },

    ])

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Notifications 🔔
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

      {/* NOTIFICATIONS */}
      <div className="space-y-5">

        {notifications.map(
          (note) => (

            <div
              key={note.id}
              className="bg-gray-800 p-6 rounded-2xl"
            >

              <h2 className="text-2xl font-bold mb-2">
                {note.title}
              </h2>

              <p className="text-gray-300">
                {note.message}
              </p>

            </div>
          )
        )}

      </div>

    </div>
  )
}

export default Notifications
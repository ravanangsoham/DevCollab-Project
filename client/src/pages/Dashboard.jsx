import { Link } from "react-router-dom"

function Dashboard() {

  return (

    <div className="min-h-screen bg-gray-900 text-white flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-gray-800 p-5">

        <h1 className="text-3xl font-bold text-blue-400 mb-10">
          DevCollab
        </h1>

        <div className="flex flex-col gap-5">

          <Link
            to="/"
            className="bg-blue-600 p-3 rounded"
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/teams"
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Teams
          </Link>

          <Link
            to="/chat"
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Chat
          </Link>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold mb-3">
            Dashboard 🚀
          </h1>

          <p className="text-gray-400 text-lg">
            Welcome to DevCollab collaboration platform
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h2 className="text-xl text-gray-400 mb-3">
              Total Projects
            </h2>

            <p className="text-5xl font-bold text-blue-400">
              12
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h2 className="text-xl text-gray-400 mb-3">
              Teams
            </h2>

            <p className="text-5xl font-bold text-green-400">
              5
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h2 className="text-xl text-gray-400 mb-3">
              Messages
            </h2>

            <p className="text-5xl font-bold text-pink-400">
              28
            </p>

          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

            <h2 className="text-xl text-gray-400 mb-3">
              Active Users
            </h2>

            <p className="text-5xl font-bold text-yellow-400">
              9
            </p>

          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-5">

            <div className="bg-gray-700 p-4 rounded-xl">
              🚀 New Project Created
            </div>

            <div className="bg-gray-700 p-4 rounded-xl">
              👥 Team Alpha Added
            </div>

            <div className="bg-gray-700 p-4 rounded-xl">
              💬 New Chat Message Received
            </div>

            <div className="bg-gray-700 p-4 rounded-xl">
              🔥 Collaboration Session Started
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard
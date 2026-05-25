import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">

      <h1 className="text-6xl font-bold mb-6 text-blue-400">
        DevCollab
      </h1>

      <p className="text-xl text-gray-300 mb-10">
        Collaborate • Build • Innovate
      </p>

      <div className="flex gap-6">

        <Link
          to="/login"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Register
        </Link>

      </div>

    </div>
  )
}

export default Home
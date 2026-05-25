import { Link } from "react-router-dom"

function Profile() {

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        My Profile 👤
      </h1>

      <div className="flex gap-4 mb-10">

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
          Meeting
        </Link>

      </div>

      <div className="bg-gray-800 p-10 rounded-2xl max-w-xl">

        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="w-32 h-32 rounded-full mb-6"
        />

        <h2 className="text-3xl font-bold mb-4">
          Soham
        </h2>

        <p className="text-gray-300">
          soham@gmail.com
        </p>

      </div>

    </div>
  )
}

export default Profile
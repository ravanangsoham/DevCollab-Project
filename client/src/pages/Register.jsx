import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {

    e.preventDefault()

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      )

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      )

      alert("Registration Successful")

      navigate("/dashboard")

    } catch (error) {

      console.log(error)

      alert("Registration Failed")
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-950 to-blue-950">

      <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Register
        </h1>

        <form onSubmit={submitHandler}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 mb-5 rounded-lg bg-gray-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mb-6 rounded-lg bg-gray-700 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-semibold"
          >
            Register
          </button>

        </form>

        <p className="text-gray-300 mt-6 text-center">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register
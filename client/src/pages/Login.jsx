import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const submitHandler = async (e) => {

    e.preventDefault()

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        config
      )

      // SAVE USER INFO
      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      )

      // SAVE USERNAME
      localStorage.setItem(
        "username",
        data.name
      )

      alert("Login Successful ✅")

      navigate("/")

    } catch (error) {

      console.log(error)

      alert("Invalid Email or Password")
    }
  }

  return (

    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

      <form
        onSubmit={submitHandler}
        className="bg-gray-800 p-10 rounded-2xl w-[400px]"
      >

        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-5 rounded bg-gray-700 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-5 rounded bg-gray-700 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 p-4 rounded text-white font-bold hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-gray-400 mt-5 text-center">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-blue-400"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  )
}

export default Login
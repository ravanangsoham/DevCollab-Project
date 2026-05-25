import axios from "axios"

const API_URL = "http://localhost:5000/api/auth"

// REGISTER
export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  )

  if (response.data) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify(response.data)
    )
  }

  return response.data
}

// LOGIN
export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  )

  if (response.data) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify(response.data)
    )
  }

  return response.data
}
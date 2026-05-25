import axios from "axios"

const API_URL = "http://localhost:5000/api/projects"

// CREATE PROJECT
export const createProject = async (projectData) => {
  const user = JSON.parse(localStorage.getItem("userInfo"))

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  const response = await axios.post(
    API_URL,
    projectData,
    config
  )

  return response.data
}

// GET PROJECTS
export const getProjects = async () => {
  const user = JSON.parse(localStorage.getItem("userInfo"))

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  const response = await axios.get(
    API_URL,
    config
  )

  return response.data
}

// DELETE PROJECT
export const deleteProject = async (id) => {
  const user = JSON.parse(localStorage.getItem("userInfo"))

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  const response = await axios.delete(
    `${API_URL}/${id}`,
    config
  )

  return response.data
}

// UPDATE PROJECT
export const updateProject = async (
  id,
  projectData
) => {
  const user = JSON.parse(localStorage.getItem("userInfo"))

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  }

  const response = await axios.put(
    `${API_URL}/${id}`,
    projectData,
    config
  )

  return response.data
}
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Projects() {

  const [projects, setProjects] = useState([])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  )

  // FETCH PROJECTS
  const fetchProjects = async () => {

    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(
        "http://localhost:5000/api/projects",
        config
      )

      setProjects(data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchProjects()

  }, [])

  // ADD PROJECT
  const addProject = async () => {

    if (!title || !description) {

      alert("Please fill all fields")
      return
    }

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await axios.post(
        "http://localhost:5000/api/projects",
        {
          title,
          description,
        },
        config
      )

      setTitle("")
      setDescription("")

      fetchProjects()

    } catch (error) {

      console.log(error)

      alert("Project creation failed")
    }
  }

  // DELETE PROJECT
  const deleteProject = async (id) => {

    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`,
        config
      )

      fetchProjects()

    } catch (error) {

      console.log(error)

      alert("Delete failed")
    }
  }

  // EDIT PROJECT
  const editProject = async (project) => {

    const newTitle = prompt(
      "Enter new title",
      project.title
    )

    const newDescription = prompt(
      "Enter new description",
      project.description
    )

    if (!newTitle || !newDescription) return

    try {

      const config = {
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      await axios.put(
        `http://localhost:5000/api/projects/${project._id}`,
        {
          title: newTitle,
          description: newDescription,
        },
        config
      )

      fetchProjects()

    } catch (error) {

      console.log(error)

      alert("Update failed")
    }
  }

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
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="bg-blue-600 p-3 rounded"
          >
            Projects
          </Link>

          <Link
            to="/teams"
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Teams
          </Link>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Projects 🚀
        </h1>

        {/* FORM */}
        <div className="bg-gray-800 p-6 rounded-xl mb-10">

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded bg-gray-700 mb-5 outline-none"
          />

          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded bg-gray-700 mb-5 outline-none"
          />

          <button
            onClick={addProject}
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            Add Project
          </button>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project._id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-300">
                {project.description}
              </p>

              {/* EDIT BUTTON */}
              <button
                onClick={() => editProject(project)}
                className="mt-5 mr-3 bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteProject(project._id)}
                className="mt-5 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Projects
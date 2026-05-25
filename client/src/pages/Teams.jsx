import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Teams() {

  const [teams, setTeams] = useState([])

  const [teamName, setTeamName] = useState("")
  const [members, setMembers] = useState("")

  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  )

  // FETCH TEAMS
  const fetchTeams = async () => {

    try {

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const { data } = await axios.get(
        "http://localhost:5000/api/teams",
        config
      )

      setTeams(data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchTeams()

  }, [])

  // CREATE TEAM
  const createTeam = async () => {

    if (!teamName || !members) {

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
        "http://localhost:5000/api/teams",
        {
          name: teamName,
          members: members.split(","),
        },
        config
      )

      setTeamName("")
      setMembers("")

      fetchTeams()

    } catch (error) {

      console.log(error)

      alert("Team creation failed")
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
            className="bg-gray-700 p-3 rounded hover:bg-blue-600"
          >
            Projects
          </Link>

          <Link
            to="/teams"
            className="bg-blue-600 p-3 rounded"
          >
            Teams
          </Link>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Teams 👥
        </h1>

        {/* CREATE TEAM FORM */}
        <div className="bg-gray-800 p-6 rounded-xl mb-10">

          <input
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full p-4 rounded bg-gray-700 mb-5 outline-none"
          />

          <input
            type="text"
            placeholder="Members (comma separated)"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            className="w-full p-4 rounded bg-gray-700 mb-5 outline-none"
          />

          <button
            onClick={createTeam}
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            Create Team
          </button>

        </div>

        {/* TEAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {teams.map((team) => (

            <div
              key={team._id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-4">
                {team.name}
              </h2>

              <h3 className="text-lg mb-3 text-blue-400">
                Members:
              </h3>

              <ul className="space-y-2">

                {team.members.map((member, index) => (

                  <li
                    key={index}
                    className="bg-gray-700 p-2 rounded"
                  >
                    {member}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Teams
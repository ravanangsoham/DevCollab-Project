import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { Link } from "react-router-dom"

function Analytics() {

  const data = [

    {
      name: "Projects",
      value: 12,
    },

    {
      name: "Teams",
      value: 5,
    },

    {
      name: "Tasks",
      value: 28,
    },

    {
      name: "Meetings",
      value: 9,
    },
  ]

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Analytics Dashboard 📊
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
          to="/projects"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Projects
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

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-blue-600 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            12
          </h2>

          <p>Total Projects</p>
        </div>

        <div className="bg-green-600 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            5
          </h2>

          <p>Teams</p>
        </div>

        <div className="bg-yellow-600 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            28
          </h2>

          <p>Tasks</p>
        </div>

        <div className="bg-red-600 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold">
            9
          </h2>

          <p>Meetings</p>
        </div>

      </div>

      {/* CHART */}
      <div className="bg-gray-800 p-10 rounded-2xl">

        <h2 className="text-3xl font-bold mb-10">
          Productivity Overview
        </h2>

        <div style={{ width: "100%", height: 400 }}>

          <ResponsiveContainer>

            <BarChart data={data}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  )
}

export default Analytics
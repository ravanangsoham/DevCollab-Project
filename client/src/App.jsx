import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Teams from "./pages/Teams"
import Chat from "./pages/Chat"
import Files from "./pages/Files"
import Tasks from "./pages/Tasks"
import Notifications from "./pages/Notifications"
import Profile from "./pages/Profile"
import Meeting from "./pages/Meeting"
import Analytics from "./pages/Analytics"
import AI from "./pages/AI"
import VideoCall from "./pages/VideoCall"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* DASHBOARD */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* PROJECTS */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* TEAMS */}
        <Route
          path="/teams"
          element={<Teams />}
        />

        {/* CHAT */}
        <Route
          path="/chat"
          element={<Chat />}
        />

        {/* FILES */}
        <Route
          path="/files"
          element={<Files />}
        />

        {/* TASKS */}
        <Route
          path="/tasks"
          element={<Tasks />}
        />

        {/* NOTIFICATIONS */}
        <Route
          path="/notifications"
          element={<Notifications />}
        />

        {/* PROFILE */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* MEETING */}
        <Route
          path="/meeting"
          element={<Meeting />}
        />

        {/* ANALYTICS */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* AI */}
        <Route
          path="/ai"
          element={<AI />}
        />

        {/* VIDEO CALL */}
        <Route
          path="/video"
          element={<VideoCall />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App

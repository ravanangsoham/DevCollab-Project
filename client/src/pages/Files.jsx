import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Files() {

  const [file, setFile] = useState(null)

  const [uploadedFile, setUploadedFile] =
    useState("")

  // UPLOAD FILE
  const uploadFileHandler = async () => {

    if (!file) {

      alert("Select file first")
      return
    }

    const formData = new FormData()

    formData.append("file", file)

    try {

      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      }

      const { data } = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        config
      )

      setUploadedFile(
        `http://localhost:5000${data.filePath}`
      )

      alert("File Uploaded ✅")

    } catch (error) {

      console.log(error)

      alert("Upload failed")
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
            className="bg-gray-700 p-3 rounded"
          >
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="bg-gray-700 p-3 rounded"
          >
            Projects
          </Link>

          <Link
            to="/teams"
            className="bg-gray-700 p-3 rounded"
          >
            Teams
          </Link>

          <Link
            to="/chat"
            className="bg-gray-700 p-3 rounded"
          >
            Chat
          </Link>

          <Link
            to="/files"
            className="bg-blue-600 p-3 rounded"
          >
            Files
          </Link>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          File Sharing 📁
        </h1>

        <div className="bg-gray-800 p-10 rounded-xl">

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            className="mb-5"
          />

          <br />

          <button
            onClick={uploadFileHandler}
            className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
          >
            Upload File
          </button>

          {/* FILE LINK */}
          {uploadedFile && (

            <div className="mt-10">

              <a
                href={uploadedFile}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline"
              >
                View Uploaded File
              </a>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Files
import { useState } from "react"

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "react-beautiful-dnd"

import { Link } from "react-router-dom"

function Tasks() {

  const [columns, setColumns] =
    useState({

      todo: {
        name: "To Do",
        items: [
          {
            id: "1",
            content:
              "Design Homepage",
          },

          {
            id: "2",
            content:
              "Setup Backend",
          },
        ],
      },

      progress: {
        name: "In Progress",
        items: [
          {
            id: "3",
            content:
              "Build Chat System",
          },
        ],
      },

      done: {
        name: "Done",
        items: [
          {
            id: "4",
            content:
              "Login Authentication",
          },
        ],
      },
    })

  // DRAG FUNCTION
  const onDragEnd = (result) => {

    if (!result.destination)
      return

    const {
      source,
      destination,
    } = result

    // SAME COLUMN
    if (
      source.droppableId ===
      destination.droppableId
    ) {

      const column =
        columns[source.droppableId]

      const copiedItems =
        [...column.items]

      const [removed] =
        copiedItems.splice(
          source.index,
          1
        )

      copiedItems.splice(
        destination.index,
        0,
        removed
      )

      setColumns({
        ...columns,

        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })

    } else {

      // DIFFERENT COLUMN
      const sourceColumn =
        columns[source.droppableId]

      const destColumn =
        columns[destination.droppableId]

      const sourceItems =
        [...sourceColumn.items]

      const destItems =
        [...destColumn.items]

      const [removed] =
        sourceItems.splice(
          source.index,
          1
        )

      destItems.splice(
        destination.index,
        0,
        removed
      )

      setColumns({
        ...columns,

        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },

        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })
    }
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Kanban Tasks Board 🧩
      </h1>

      {/* NAV */}
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
          to="/analytics"
          className="bg-gray-700 px-5 py-3 rounded"
        >
          Analytics
        </Link>

      </div>

      <DragDropContext
        onDragEnd={onDragEnd}
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {Object.entries(columns).map(
            ([columnId, column]) => {

              return (

                <div
                  key={columnId}
                  className="bg-gray-800 p-5 rounded-2xl"
                >

                  <h2 className="text-2xl font-bold mb-5">
                    {column.name}
                  </h2>

                  <Droppable
                    droppableId={columnId}
                  >

                    {(provided) => (

                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="min-h-[400px]"
                      >

                        {column.items.map(
                          (item, index) => (

                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >

                              {(provided) => (

                                <div
                                  ref={
                                    provided.innerRef
                                  }

                                  {...provided.draggableProps}

                                  {...provided.dragHandleProps}

                                  className="bg-blue-600 p-4 rounded-xl mb-4"
                                >

                                  {item.content}

                                </div>
                              )}

                            </Draggable>
                          )
                        )}

                        {provided.placeholder}

                      </div>
                    )}

                  </Droppable>

                </div>
              )
            }
          )}

        </div>

      </DragDropContext>

    </div>
  )
}

export default Tasks
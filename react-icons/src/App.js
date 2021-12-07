import React from "react"
import "./App.css"
import { IconContext } from "react-icons"
import { FaReact } from "react-icons/fa"
import { MdAlarm } from "react-icons/md"
import { FiCloudLightning } from "react-icons/fi"

function App() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "10rem" }}>
      <div className='App'>
        <FaReact />
        <MdAlarm color='purple' size='10rem' />
        <FiCloudLightning />
      </div>
    </IconContext.Provider>
  )
}

export default App

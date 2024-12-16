import React from 'react'
const Introduction = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4"><span className="badge bg-secondary">Basic Introduction</span></h1>
      <ul className="list-group">
        <li className="list-group-item">Just a JavaScript library, not a framework</li>
        <li className="list-group-item">SPA (Single Page Application)</li>
        <li className="list-group-item">Used to make the front end</li>
        <li className="list-group-item">Vite is used to set up React JS (not only React; it can set up other libraries too, like VueJS)</li>
        <li className="list-group-item">
          Vite is a bundler [Frontend tool] that grabs React and React-DOM from npm and sets up your custom build process.
        </li>
        <li className="list-group-item">Vite can develop your build very fast (development and production)</li>
        <li className="list-group-item">To set up React, you can use Parcel also.</li>
        <li className="list-group-item">Run <code>npm create vite</code></li>
        <li className="list-group-item">
          Follow the instructions, then go to your project, install npm in it, and run <code>npm dev</code>.
        </li>
      </ul>
      <hr />
      <div className="container my-5">
        <h1 className="mb-4"><span className="badge bg-secondary">Flow of React App</span></h1>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>index.html</strong>: Contains:
            <ul className="list-group mt-2">
              <li className="list-group-item">A <code>div</code> with id <code>“root”</code></li>
              <li className="list-group-item">Script to load <code>main.jsx</code></li>
            </ul>
          </li>
          <li className="list-group-item">
            <strong>main.jsx</strong>:
            <ul className="list-group mt-2">
              <li className="list-group-item">It creates a root <code>div</code> by <code>getElementById(“root”)</code>.</li>
              <li className="list-group-item">
                <code>&lt;App /&gt;</code> gets the code from <code>app.jsx</code> and loads it into <code>div(“root”)</code>.
              </li>
            </ul>
          </li>
          <li className="list-group-item">
            <strong>App.jsx</strong>: It contains all the components which execute the SPA.
          </li>
        </ul>
      </div>

    </div>


  )
}

export default Introduction

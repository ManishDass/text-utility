import React, { useState } from "react"
import Navbar from "./Navbar"
import "../css/dark.css"

export default function About() {
  let [color, setColor] = useState(0)
  let [textColor, setTextColor] = useState("navbar-dark bg-dark")

  let darkMode = () => {
    let newColor = "dark"
    let newTextColor = "navbar-light bg-light"
    setColor(newColor)
    setTextColor(newTextColor)
  }

  let lightMode = () => {
    let newColor = "light"
    let newTextColor = "navbar-dark bg-dark"
    setColor(newColor)
    setTextColor(newTextColor)
  }

  return (
    <div className={color}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 my-4 '>
            <h2>Team</h2>
            <p>
              Bootstrap is maintained by a small team of developers on GitHub.
              We're actively looking to grow this team and would love to hear
              from you if you're excited about CSS at scale, writing and
              maintaining vanilla JavaScript plugins, and improving build
              tooling processes for frontend code.
            </p>
            <h2>About</h2>
            <p>
              Originally created by a designer and a developer at Twitter,
              Bootstrap has become one of the most popular front-end frameworks
              and open source projects in the world. Bootstrap was created at
              Twitter in mid-2010 by @mdo and @fat. Prior to being an
              open-sourced framework, Bootstrap was known as Twitter Blueprint.
              A few months into development, Twitter held its first Hack Week
              and the project exploded as developers of all skill levels jumped
              in without any external guidance. It served as the style guide for
              internal tools development at the company for over a year before
              its public release, and continues to do so today. Originally
              released on Friday, August 19, 2011, we’ve since had over twenty
              releases, including two major rewrites with v2 and v3. With
              Bootstrap 2, we added responsive functionality to the entire
              framework as an optional stylesheet. Building on that with
              Bootstrap 3, we rewrote the library once more to make it
              responsive by default with a mobile first approach. With Bootstrap
              4, we once again rewrote the project to account for two key
              architectural changes: a migration to Sass and the move to CSS’s
              flexbox. Our intention is to help in a small way to move the web
              development community forward by pushing for newer CSS properties,
              fewer dependencies, and new technologies across more modern
              browsers. Our latest release, Bootstrap 5, focuses on improving
              v4’s codebase with as few major breaking changes as possible. We
              improved existing features and components, removed support for
              older browsers, dropped jQuery for regular JavaScript, and
              embraced more future-friendly technologies like CSS custom
              properties as part of our tooling.
            </p>
            <button type='button' className='btn btn-dark' onClick={darkMode}>
              Dark Mode
            </button>
            <button
              type='button'
              className='btn btn-light mx-3 btn-outline-danger'
              onClick={lightMode}
            >
              Light Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

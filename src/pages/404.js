import * as React from "react"
import Full from "../layouts/basic"
import "../styles/global.scss"

export default function NotFoundPage () {
  return (
    <Full>
      <div className="content">
        <h1 className="title has-text-white"><span className="glowPink">Error 404</span></h1>
          <div className="box">
            <p>The page you have attempted to go to is broken, inactive or not yet finished.</p>
          </div>
      </div>
    </Full>
  )
}

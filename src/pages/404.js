import * as React from "react"
import Full from "../layouts/basic"
import "../styles/global.scss"

export default function NotFoundPage () {
  return (
    <Full>
      <div className="box has-background-info">
        You've found the 404 page. You trying to get somewhere you're not allowed, choom?
      </div>
    </Full>
  )
}

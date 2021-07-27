import { useState } from "react"

export default function ClickToggle() {
  const [active, setActive] = useState(false)

  const handleClick = event => {
      setActive(!active)
  }

  return [ active, handleClick]

}
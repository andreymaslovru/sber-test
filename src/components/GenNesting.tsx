import React from "react"

import "../App.css"
import { ElementType } from "../containers/List"

interface GenNestingProps {
  element: ElementType
  children?: ElementType[]
}

export const GenNesting: React.FC<GenNestingProps> = ({ element, children }) => {
  let childElement = null

  if (children) {
    childElement = children.map((childElement) => (
        <GenNesting
          key={childElement.id}
          elem={childElement}
          children={childElement.children}
        />
      )
  }

  return (
    <li key={element.id}>
      <h4>{element.value}</h4>
      {childElement ? <ul>{childElement}</ul> : null}
    </li>
  )
}

import React from "react";
import "../App.css";
import { ElementType } from "../containers/List";

interface GenNestingProps {
  elem: ElementType;
  children?: ElementType[];
}

export const GenNesting: React.FC<GenNestingProps> = ({ elem, children }) => {
  let childElement = null;

  if (children) {
    childElement = children.map((childElement) => {
      return (
        <GenNesting
          key={childElement.id}
          elem={childElement}
          children={childElement.children}
        />
      );
    });
  }

  return (
    <li key={elem.id}>
      <h4>{elem.value}</h4>
      {childElement ? <ul>{childElement}</ul> : null}
    </li>
  );
};

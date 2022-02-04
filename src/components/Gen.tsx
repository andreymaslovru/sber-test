import React from "react";
import { ElementType } from "../containers/List";
import { GenNesting } from "./GenNesting";

interface GenProps {
  reduceData: ElementType[];
}

export const Gen: React.FC<GenProps> = ({ reduceData }) => {
  let elements = reduceData.map((val) => {
    return <GenNesting key={val.id} elem={val} children={val.children} />;
  });

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

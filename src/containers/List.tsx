import _ from "lodash";
import React from "react";
import { Gen } from "../components/Gen";

export type ElementType = {
  id: string;
  parent: string | null;
  value: string;
  children?: ElementType[];
};

interface ListProps {}

export const List: React.FC<ListProps> = () => {
  const data: ElementType[] = [
    {
      id: "0",
      parent: null,
      value: "0",
    },
    {
      id: "1",
      parent: null,
      value: "1",
    },
    {
      id: "2",
      parent: null,
      value: "2",
    },
    {
      id: "3",
      parent: "1",
      value: "1.3",
    },
    {
      id: "4",
      parent: "1",
      value: "1.4",
    },
    {
      id: "5",
      parent: "4",
      value: "1.4.5",
    },
    {
      id: "6",
      parent: "4",
      value: "1.4.6",
    },
    {
      id: "7",
      parent: "5",
      value: "1.4.5.7",
    },
    {
      id: "8",
      parent: "3",
      value: "1.3.8",
    },
    {
      id: "9",
      parent: "2",
      value: "2.1",
    },
  ];

  var reduceData: ElementType[] = [];
  _.each(data, (item: ElementType) => {
    if (!Number(item.parent)) {
      reduceData.push(item);
    } else {
      if (!data[Number(item.parent)].children) {
        data[Number(item.parent)].children = [];
      }
      data[Number(item.parent)].children?.push(item);
    }
  });

  return <Gen reduceData={reduceData} />;
};

import * as React from "react";
import { Users } from "./types";

const ListItem = (props: Users) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}：{name}({age})
    </p>
  );
};

export default ListItem;

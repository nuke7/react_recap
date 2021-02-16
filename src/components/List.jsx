import { Div } from "./Div";
import { data } from "./data";
import { v4 } from "uuid";

export const List = () => {
  return (
    <>
      {data.map((item) => {
        return <Div id={item.id} content={item.content} key={v4()}></Div>;
      })}
    </>
  );
};

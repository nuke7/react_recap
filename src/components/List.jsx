import { Div } from "./Div";
import { data } from "./data";

export const List = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <Div id={item.id} content={item.content} key={item.id + item.content}></Div>
        );
      })}
    </>
  );
};

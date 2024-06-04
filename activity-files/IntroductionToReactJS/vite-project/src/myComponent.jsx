import React from "react";
import AnotherComponent from "./AnotherComponent";
import MyClassComponent from "./MyClassComponent";
import ComponentWithProps from "./ComponentWithProps";

const MyComponent = () => {
  return (
    <>
      {" "}
      <h1>Hello World</h1>
      <AnotherComponent />
      <ComponentWithProps />
      <ComponentWithProps content={"Content passed from props"} number={10} />
      <MyClassComponent />
    </>
  );
};

export default MyComponent;

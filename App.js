import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

//JSX - is not HTML in JS
const heading = <h1 className="head" tabIndex="1">HungryApp using Jsx</h1>;

const Title = () => (
    <h1 className="head" tabIndex="5">
      Hungry App using JSX 🚀
    </h1>
  );

  const HeadingComponent = () => (
    <>
      <div id="container">
        <Title />
        <h1 className="heaidng">Hungry App Fucntional Component</h1>
      </div>
      <div id="container-2"></div>
    </>
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
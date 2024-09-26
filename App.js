import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am a h1 tag :emoji"),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a h1 tag child2"),
//     React.createElement("h2", {}, "I am a h2 tag child2"),
//   ]),
// ]);

// // const heading = React.createElement("h1", {id:"heading",xyz:'abc'}, "Hello World From React");

// console.log(parent); //Object {{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Element
// const jsxHeading = <h1 id="heading">Hello using JSX</h1>

// React Component:-
// class based componet :- Old Way
// functional based componet :- New Way

// Both Are Same
const fn = () => true; 
const fn2 = () => {
  true;
}

const Title = () => (
   <h1 className="head">Hello I Am A Title Component</h1>
);

const title = (
  <h1 className="head">Hello I Am A Title Component</h1>
);

let number = 1000;
//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    {number}

  {/* These below three are the same things */}
    <Title/>
    {Title()}
    <Title></Title>

    <h1>Hello I Am A Function Component</h1>
  </div>
);

// const HeadingComponent2 = () => <h1>Hello I Am A Function Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
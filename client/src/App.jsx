import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-secondary h-screen">
        <h1 className="text-3xl font-bold underline text-success">
          Hello world!
        </h1>
        <p className="text-lg text-textmain">
          This is a simple React app with Tailwind CSS.
        </p>
        <p className="text-textmuted">
          all the custom colors are specified in the index.css file
        </p>
        <button className="bg-primary hover:bg-buttonhover text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Click Me
        </button>
        <br />
        <br />
        <Button variant="primary">Primary button</Button>
        <Card
          title="Welcome to DaarutTahseen"
          description="Here’s a quick overview of your activity"
          footer={<Button variant="primary">Continue</Button>}
        >
          <p>
            This is the body of the card. You can pass in anything here — text,
            lists, charts, etc.
          </p>
        </Card>
      </div>
    </>
  );
}

export default App;

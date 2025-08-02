import { useState } from "react";
import steps from "./steps.json";

console.log(steps);
export default function App() {
  const [stepNumber, setStepNumber] = useState(0);
  const currentStep = steps[stepNumber];
  const actionItems = currentStep.action_items;

  return (
    <main className="wrapper">
      <div className="container">
        <Header />
        <Steps
          number={currentStep.id}
          title={currentStep.title}
          description={currentStep.description}
        />
        <Action action={actionItems} />
        <Buttons setStepNumber={setStepNumber} />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>ThriveTrack</h1>
    </header>
  );
}
function Steps({ number, title, description }) {
  return (
    <section className="steps">
      <h2 className="step-text">
        Step {number}: {title}
      </h2>
      <p className="body-text">{description}</p>
    </section>
  );
}
function Action({ action }) {
  const [checkedItem, setCheckedItem] = useState(false);
  return (
    <section className="action-items">
      <h3 className="action-items-text">Action Items</h3>
      <form>
        <ul>
          {action.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`action--${index}`}
                name={`action--${index}`}
                checked={checkedItem}
                onClick={(e) => setCheckedItem(e.target.checked)}
              />
              <label htmlFor={`action--${index}`}>{task}</label>
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
}

function Buttons({ setStepNumber }) {
  function prev() {
    console.log("Previous step clicked");
    setStepNumber((prevStep) => (prevStep === 0 ? 0 : prevStep - 1));
    // Logic to go to the previous step can be added here
  }

  function next() {
    console.log("Next step clicked");
    setStepNumber((prevStep) => (prevStep === 4 ? 4 : prevStep + 1));
    // Logic to go to the next step can be added here
  }

  return (
    <section className="buttons">
      <button type="button" onClick={prev} className="btns btn--prev">
        Previous
      </button>
      <button type="button" onClick={next} className="btns btn--next">
        Next
      </button>
    </section>
  );
}

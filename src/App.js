import { useState } from "react";
import steps from "./steps.json";

console.log(steps);
export default function App() {
  const [stepNumber, setStepNumber] = useState(0);
  const currentStep = steps[stepNumber];
  const actionItems = currentStep.action_items;
  const [checkedItem, setCheckedItem] = useState(
    steps.map((step) => Array(step.action_items.length).fill(false))
  );

  return (
    <main className="wrapper">
      <div className="container">
        <Header />
        <Steps
          number={currentStep.id}
          title={currentStep.title}
          description={currentStep.description}
        />
        <Action
          action={actionItems}
          checked={checkedItem[stepNumber]}
          onCheck={(idx) => {
            setCheckedItem((items) =>
              items.map((arr, i) =>
                i === stepNumber
                  ? arr.map((item, j) => (j === idx ? !item : item))
                  : arr
              )
            );
          }}
        />
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
function Action({ action, checked, onCheck }) {
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
                checked={checked[index]}
                onChange={() => onCheck(index)}
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
    setStepNumber((prevStep) => (prevStep === 0 ? 0 : prevStep - 1));
  }

  function next() {
    setStepNumber((prevStep) => (prevStep === 4 ? 4 : prevStep + 1));
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

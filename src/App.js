import steps from "./steps.json";

console.log(steps);
export default function App() {
    const currentStep = steps[0];
    const actionItems = currentStep.action_items;
    console.log(currentStep);
    console.log(actionItems);

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
                <Buttons />
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
                        />
                        <label htmlFor={`action--${index}`}>
                            {task}
                        </label>
                    </li>
                  ))}
                    
                </ul>
            </form>
        </section>
    );
}

function Buttons() {
    return (
        <section className="buttons">
            <button type="submit" className="btns btn--prev">
                Previous
            </button>
            <button type="submit" className="btns btn--next">
                Next
            </button>
        </section>
    );
}

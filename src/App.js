import steps from './steps.json'

console.log(steps)
export default function App() {
    return (
        <main className="wrapper">
            <div className="container">
                <Header />
                <Steps />
                <Action />
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
function Steps() {
    return (
        <section className="steps">
            <h2 className="step-text">Step 1: Self-Awareness</h2>
            <p className="body-text">
                Understand who you are—your strengths, weaknesses, values, and
                passions. This forms the foundation for all personal growth.
            </p>
        </section>
    );
}
function Action() {
    return (
        <section className="action-items">
            <h3 className="action-items-text">Action Items</h3>
            <form>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            id="action--1"
                            name="action--1"
                        />
                        <label for="action--1">
                            Keep a daily journal for 1 week
                        </label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="action--2"
                            name="action--2"
                        />
                        <label for="action--2">
                            Take a personality test (e.g., MBTI or Enneagram)
                        </label>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            id="action--3"
                            name="action--3"
                        />
                        <label for="action--3">
                            Ask 3 close friends about your strengths
                        </label>
                    </li>
                </ul>
            </form>
        </section>
    );
}

function Buttons() {
  return(
    <section className="buttons">
      
      <button type="submit" className="btns btn--prev">
        Previous
      </button>
      <button type="submit" className="btns btn--next">
        Next
      </button>
      
    </section>
    )
}
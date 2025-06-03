export default function App() {
    return (
        <main className="wrapper">
          <div className="container">
             <Header />
            <Steps />
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
            <h2>Step 1: Self-Awareness</h2>
            <p className="body-text">
              Understand who you are—your strengths, weaknesses, values, and passions. This forms the foundation for all personal growth.
            </p>
        </section>
    );
}

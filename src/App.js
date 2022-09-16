import "./App.css";

function App() {
  return (
    <div className="center container">
      <h1>Countdown Timer</h1>
      <div className="row">
        <div className="column left">
          <button>Start</button>
        </div>
        <div className="column middle">
          <h2>01:01:00</h2>
        </div>
        <div classNaeme="column right">
          <button>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default App;

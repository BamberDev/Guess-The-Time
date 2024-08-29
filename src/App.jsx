import TimerChallenge from "./components/TimerChallenge/TimerChallenge.jsx";

function App() {
  return (
    <main>
      <div id="content">
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Medium" targetTime={5} />
          <TimerChallenge title="Hard" targetTime={10} />
          <TimerChallenge title="Very Hard" targetTime={15} />
        </div>
      </div>
    </main>
  );
}

export default App;

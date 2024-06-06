import Player from "./components/Player/Player.jsx";
import TimerChallenge from "./components/TimerChallenge/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Very Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;

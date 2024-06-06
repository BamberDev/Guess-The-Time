import { useRef, useState } from "react";

const Player = () => {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    const name = playerName.current.value.trim();
    if (name === "") {
      setError("Name cannot be empty");
      return;
    }
    setEnteredPlayerName(name);
    playerName.current.value = "";
    setError(null);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
};

export default Player;

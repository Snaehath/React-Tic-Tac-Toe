import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(false);

  function handleChange(evt) {
    setPlayerName(evt.target.value);
  }

  function handleEditClick() {
    setIsEdit((Editing) => !Editing);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}

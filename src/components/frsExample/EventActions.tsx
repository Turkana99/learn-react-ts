import { useState } from "react";
function EventActions() {
  const [value, setValue] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("Button clicked with id:", id);
  };;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <button onClick={(event) => handleClick(event, 4)}>Delete</button>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
}

export default EventActions;

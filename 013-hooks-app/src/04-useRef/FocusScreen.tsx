import {useRef} from "react";

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input type="text" ref={inputRef} className="bg-white text-black rounded-md px-4 py-2" autoFocus={true}/>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleClick}>Set Focus</button>
    </div>
  )
}
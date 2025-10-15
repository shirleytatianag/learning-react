import {useCounter} from "@/hook/useCounter.tsx";
import {useMemo} from "react";

const heavyStuff = (iterationNumber :number) => {
  console.time("heavyStuff started");
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos... ')
  }
  console.timeEnd("heavyStuff finished");
  return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter= () => {
  const {counter, increment} = useCounter(40000);
  const {counter: counter2, increment: increment2} = useCounter(10);
  const myHeavyValue = useMemo(()=>heavyStuff(counter), [counter]) ;
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo - {myHeavyValue}</h1>
      <hr/>
      <h4>
        Counter : {counter}
      </h4>
      <h4>
        Counter 2 : {counter2}
      </h4>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer ml-2" onClick={increment}>+1</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer ml-2" onClick={increment2}>Counter 2 +1</button>
    </div>
  )
}
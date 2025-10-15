import {MyTitle} from "@/06-memos/ui/MyTitle.tsx";
import {useCallback, useState} from "react";
import {MySubtitle} from "@/06-memos/ui/MySubtitle.tsx";

export const MemoHook = ()=>{
  const [title, setTitle] = useState<string>('Hola')
  const [subtitle, setSubtitle] = useState<string>('Hola');

  const handleMyAPICall = useCallback(() => {
    console.log('Llamando a mi API', subtitle);
  }, [subtitle])
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white"> </h1>
      <MyTitle title={title}/>
      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=> setTitle('Hello')}> Cambiar título</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=> setSubtitle('Hello suBTITLE')}>Cambiar subtitulo</button>
    </div>
  )
}
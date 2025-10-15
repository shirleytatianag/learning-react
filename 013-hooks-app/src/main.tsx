import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'

// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLighWithEffectt.tsx";
// import {TrafficLightWithHook} from "./02-useEffect/TrafficLighWithHook.tsx";
// import {HooksApp} from "./HooksApp.tsx";
// import {TrafficLight} from "./01-useState/TrafficLight.tsx";

// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
// import {ScrambleWords} from "@/05-useReducer/ScrambleWords.tsx";
// import {MemoHook} from "@/06-memos/MemoHook.tsx";
// import {MemoCounter} from "@/06-memos/MemoCounter.tsx";
import {Toaster} from 'sonner'
// import {InstagramApp} from "@/07-useOptimisc/InstagramApp.tsx";
import './index.css'
import {ClientInformation} from "@/08-use-suspense/ClientInformation.tsx";
import {getUserAction} from "@/08-use-suspense/api/get-user.action.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/*<HooksApp/>*/}
    {/*<TrafficLight/>*/}
    {/*<TrafficLightWithEffect/>*/}
    {/*<TrafficLightWithHook/>*/}
    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}
    {/*<TasksApp/>*/}
    {/*<ScrambleWords/>*/}
    {/*<MemoHook/>*/}
    {/*<MemoCounter/>*/}
    {/*<InstagramApp/>*/}

    <Suspense fallback={(
      <div className="bg-gradient flex flex-col">
        <h1 className="text-2xl">Cargando...</h1>
      </div>
    )}>
      <ClientInformation getUser={getUserAction(100)}/>
    </Suspense>
  </StrictMode>,
)

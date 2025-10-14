import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// import {TrafficLightWithEffect} from "./02-useEffect/TrafficLighWithEffectt.tsx";
// import {TrafficLightWithHook} from "./02-useEffect/TrafficLighWithHook.tsx";
// import {HooksApp} from "./HooksApp.tsx";
// import {TrafficLight} from "./01-useState/TrafficLight.tsx";

// import {FocusScreen} from "./04-useRef/FocusScreen.tsx";
// import {PokemonPage} from "./03-examples/PokemonPage.tsx";
// import {TasksApp} from "@/05-useReducer/TaskApp.tsx";
import './index.css'
import {ScrambleWords} from "@/05-useReducer/ScrambleWords.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<HooksApp/>*/}
    {/*<TrafficLight/>*/}
    {/*<TrafficLightWithEffect/>*/}
    {/*<TrafficLightWithHook/>*/}
    {/*<PokemonPage/>*/}
    {/*<FocusScreen/>*/}
    {/*<TasksApp/>*/}
    <ScrambleWords/>
  </StrictMode>,
)

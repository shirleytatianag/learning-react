import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});

  useEffect(()=>{
 
    console.log('cuando se actualice el estado');
    const handleMove = (event)=>{
      const {clientX, clientY} = event;
      setPosition({x: clientX, y: clientY})
      console.log('handleMove', {clientX, clientY});
    }

    if(enabled){
      console.log('entra al if');
      window.addEventListener('pointermove', handleMove)
    } 

    return () => {
      console.log('cleanup');
      window.removeEventListener('pointermove', handleMove)
      setPosition({x: 0, y: 0})
    }

   
  }, [enabled])
  
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40, 
        transform: `translate(${position.x}px,${position.y}px)`
      }}>
    

      </div>
      <button onClick={()=>{setEnabled(!enabled)}}>{enabled ? 'Desactivar': 'Activar'} seguir puntero</button>
    </main>
  
  )
}

export default App

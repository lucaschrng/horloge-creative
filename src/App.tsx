import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";
import "./App.css"
import Wall from "./components/Wall.tsx";
import Clock from "./components/Clock.tsx";
import Hands from "./components/Hands.tsx";

function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows>
        <ambientLight intensity={1}/>
        <Wall/>
        <Clock/>
        <Hands/>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default App

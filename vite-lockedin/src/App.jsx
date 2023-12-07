import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {useProgress,Html,ScrollControls, Scroll} from "@react-three/drei";
import { Suspense } from "react";

function App() {

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center className="progress">{Math.round(progress)} % loaded</Html>
  }
  return (
    
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30}}>
      <Suspense fallback={<Loader/>}>
     
      <ScrollControls pages={6} damping={0.1}>
      <Experience />
      <Scroll html>

      </Scroll>
      </ScrollControls>
      </Suspense>
    </Canvas>
    
  );
}

export default App;

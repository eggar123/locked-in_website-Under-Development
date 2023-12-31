import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {useProgress,Html,ScrollControls, Scroll} from "@react-three/drei";
import { Suspense } from "react";
import { BigTest } from "./components/test";

function App() {

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center color="blue" className="progress">{Math.round(progress)} % loaded</Html>
  }
  return (
    
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42}}>
      <color attach="background" args={["#000000"]}/>
      <Suspense fallback={<Loader/>}>
     
      
      <Experience />
      
      </Suspense>
    </Canvas>
    
  );
}

export default App;

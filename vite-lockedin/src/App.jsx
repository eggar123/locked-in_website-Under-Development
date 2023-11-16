import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [40, 20, 50]}}>
      <color attach="background" args={["#000000"]} />
      <Experience />
    </Canvas>
  );
}

export default App;

import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Studio } from "./Studio";

export const Experience = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [100, -60.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };



  const [islandScale, islandPosition] = adjustIslandForScreenSize();



  return (
    <>
      <OrbitControls />
      <directionalLight position={[1,1,1]} intensity={5}/>
      <hemisphereLight skyColor="#b1e1ff"/>
      <Studio
      position={islandPosition}
      scale={islandScale}
      />
     <group position-y={-1}>
     <Avatar/>
     
     </group>
     <ambientLight intensity={1}/>
     
     
    </>
  );
};

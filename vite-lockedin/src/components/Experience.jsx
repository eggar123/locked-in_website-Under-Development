import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Studio } from "./Studio";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Studio/>
     <group position-y={-1}>
     <Avatar/>
     
     </group>
     <ambientLight intensity={1}/>
     
     
    </>
  );
};

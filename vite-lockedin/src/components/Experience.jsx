import { Center, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Studio } from "./Studio";
import * as THREE from "three";
import { useState } from "react";
import { Float, Text3D, Shadow } from "@react-three/drei";

export const Experience = () => {

  const [active, setActive] = useState(null)




  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />

    

        <ProducerStage
          texture={"textures/Cyberpunk_equirectangular-jpg_Recording_studio_with_ambient_1965269463_9586472.jpg"}
          name="abedz"
          active={active}
          setActive={setActive}
          >

        </ProducerStage>

        <ProducerStage
          texture={"textures/Cyberpunk_equirectangular-jpg_Recording_studio_with_ambient_1965269463_9586472.jpg"}
          name="cronique"
          position-x={-2.5}
          rotation-y={Math.PI / 8}
          active={active}
          setActive={setActive}
          >

        </ProducerStage>

        <ProducerStage
          texture={"textures/Cyberpunk_equirectangular-jpg_Recording_studio_with_ambient_1965269463_9586472.jpg"}
          name="saint"
          position-x={2.5}
          rotation-y={-Math.PI / 8}
          active={active}
          setActive={setActive}
          >

        </ProducerStage>

 

    </>
  );
};




const ProducerStage = ({ children, texture, name, active, setActive, ...props }) => {
  const map = useTexture(texture);
  return (<group {...props}>
      <Float
        speed={4} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh />
    <Center front >
      <Text3D
        font={"../../public/fonts/Rubik Bubbles_Regular.json"}
        bevelEnabled
        bevelSize={0.03}
        size={0.1}
        height={0}
        position={[0, 2, 0.05]}
        letterSpacing={0.1}
      >
        {name}
        <meshNormalMaterial />
      </Text3D>
    </Center >
    </Float>

    <RoundedBox args={[2, 3, 0.1]} onDoubleClick={() => setActive(active === name ? null : name)}>
      
      <MeshPortalMaterial side={THREE.DoubleSide} blend={active === name ? 1 : 0}>
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
        {children}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial map={map} side={THREE.BackSide} />
        </mesh>
      </MeshPortalMaterial>
    </RoundedBox>
  </group>)
}

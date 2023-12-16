import { 
  Environment, 
  MeshReflectorMaterial, 
  Text, 
  CameraControls, 
  RenderTexture, 
  useFont, 
  Float 
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Studio } from "./Studio";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Stars, Image } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { easing, geometry } from "maath";
import { degToRad } from "three/src/math/MathUtils";

export const Experience = () => {

  const [active, setActive] = useState(null)

  const controls = useRef();

  extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry })

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.0;
    controls.current.dolly(18, true);


  }

  useEffect(() => {
    intro();
  }, [])



  return (
    <>
    <Float
      rotationIntensity={0.1}
    >
      <mesh>

        <Stars radius={10} depth={50} count={5000} factor={1} saturation={0} fade speed={0.2} />
        <meshStandardMaterial />
      </mesh>
      </Float>

      <ambientLight intensity={0.5} color={"#fff"} />
      <Environment preset="night" />
      <CameraControls ref={controls} />
      

      <Text
        font={"fonts/Magazine-Cutouts-Font.ttf"}
        position-x={0}
        position-y={0.5}
        position-z={0.2}
        lineHeight={0.8}
        textAlign="center"
        //  rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >

        LOCK-IN
        <meshBasicMaterial color="white">
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#000000"]} />
            <Environment preset="night" />

          </RenderTexture>
        </meshBasicMaterial>
      </Text>

      <Image url="images/bigbrr.png" 

      position-y={-0.7}
      position-z={0.01} 
      position-x={-0.8} 
      scale={0.5}>
        <roundedPlaneGeometry/>
      </Image>

      <ProducerStage >

      </ProducerStage>
      <mesh position-y={0.8} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1.2}
          opacity={0.4}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />

      </mesh>




    </>
  );
};








const ProducerStage = ({ ...props }) => {



  return (<group
    position-x={-2.2}
    position-y={-2}

    {...props}>

    <Studio scale={0.6}>

    </Studio>

  </group>)
}

useFont.preload("fonts/Magazine-Cutouts-Font.ttf");

import {
  Environment,
  CameraControls,
  useFont,
  Svg,
  Float,
  RenderTexture,
  Text,
  MapControls
} from "@react-three/drei";
import * as THREE from 'three'
import { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { geometry } from "maath";
import { TitleText } from "./titleText";
import { MemberTextOption } from "./MemberTextOption";
import { Stjerner } from "./Stars";
import { AboutTextOption } from "./aboutTextOption";
import { Members } from "./members";
import { Moon } from "./Moon";
import { BigTest } from "./test";
import { Avatar } from "./Avatar";



const { DEG2RAD } = THREE.MathUtils

export const Experience = () => {

  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraProducers = useRef();

  extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry })


  const intro = async () => {

    controls.current.dolly(-22);
    controls.current.smoothTime = 1.0;
    //controls.current.dolly(18, true);
    fitCamera();

  }



  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCameraHome.current, true)

  }



  useEffect(() => {
    intro();

  }, [])

  useEffect(() => {
    window.addEventListener("resize", fitCamera)
    return () => window.removeEventListener("resize", fitCamera)
  }, [])

 

  return (
    <>

      <ambientLight intensity={0.5} color={"#fff"} />
      <Environment preset="night" />
      <MapControls />
      <CameraControls
      
      maxPolarAngle={DEG2RAD * 80}
      minPolarAngle={DEG2RAD * 70}
      maxAzimuthAngle={DEG2RAD * 10}
      minAzimuthAngle={DEG2RAD}
      minDistance={6}
      maxDistance={24}
      
        // maxDistance={22}
        ref={controls}
      />
      

      <mesh
        ref={meshFitCameraHome}
        position-z={1.5}
      >
        <boxGeometry args={[7, 4, 6]} />
        <meshBasicMaterial
          color="orange"
          transparent opacity={0.5}
          visible={false}
        />
      </mesh>

      <Float
      rotationIntensity={0.05}
      >
        <Moon />
      </Float>
      <Stjerner />
      <TitleText />
      <mesh onClick={() =>
        controls.current.truck(0, 20, true)


      }>
        <MemberTextOption />
      </mesh>
      <AboutTextOption />
      <Text
        font={"fonts/Magazine-Cutouts-Font.ttf"}
        position-x={0}
        position-y={-16.5}
        position-z={0.1}
        lineHeight={2.2}
        textAlign="center"
        //anchorY={"bottom"}
      >
        MEMBERS
        <meshBasicMaterial color="white">
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="night" />

          </RenderTexture>
        </meshBasicMaterial>
      </Text>

      <Members />




    </>
  );
};

useFont.preload("fonts/Magazine-Cutouts-Font.ttf");

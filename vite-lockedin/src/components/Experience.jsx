import {
  Environment,
  CameraControls,
  useFont,
  Svg,
  Float,
} from "@react-three/drei";
import * as THREE from 'three'

import { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";
import { TitleText } from "./titleText";
import { MemberTextOption } from "./MemberTextOption";
import { Stjerner } from "./Stars";
import { AboutTextOption } from "./aboutTextOption";
import { Members } from "./members";


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
      <CameraControls
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


      

      <Stjerner />
      <TitleText />
      <mesh onClick={() => 
        controls.current.truck(0, 20, true)
        }>
        <MemberTextOption />
      </mesh>
      <AboutTextOption />

      <mesh position-y={-20}>
        <Members/>
      </mesh>




    </>
  );
};

useFont.preload("fonts/Magazine-Cutouts-Font.ttf");

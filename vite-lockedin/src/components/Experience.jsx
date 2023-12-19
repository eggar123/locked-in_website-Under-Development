import {
  Environment,
  CameraControls,
  useFont,
} from "@react-three/drei";
import { Studio } from "./Studio";
import { useEffect, useRef} from "react";
import { Image } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";
import { TitleText } from "./titleText";
import { ProducerText } from "./producerText";
import { Stjerner } from "./Stars";


export const Experience = () => {

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
      
      <ambientLight intensity={0.5} color={"#fff"} />
      <Environment preset="night" />
      <CameraControls ref={controls} />

      <Stjerner/>
      <TitleText />
      <ProducerText />
      <ProducerStage/>

      <Image url="images/bigbrr.png"
        position-y={-0.7}
        position-z={0.01}
        position-x={-0.8}
        scale={0.5}>
        <roundedPlaneGeometry />
      </Image>
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

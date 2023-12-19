import {
    Environment,
    Text,
    RenderTexture,
    useFont,
    Float
} from "@react-three/drei";
import { useEffect, useState } from "react";

export function ProducerText (props) {


    const [hovered, setHovered] = useState("")

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
    }, [hovered])

    return (
        <>
             <Float
        rotationIntensity={0.2}
      >

        <Text
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          font={"fonts/Magazine-Cutouts-Font.ttf"}
          scale={0.2}
          position-x={1.2}
          position-y={-0.2}
          position-z={0.2}
          lineHeight={0.8}
          textAlign="center"
          anchorY={"bottom"}
        >
          PRODUCERS
          <meshBasicMaterial color={hovered ? 0xffff00 : 0xffffff}>
            <RenderTexture attach={"map"}>
              <color attach="background" args={["#fff"]} />
              <Environment preset="night" />
            </RenderTexture>
          </meshBasicMaterial>
        </Text>
      </Float>
        </>
    );
};

useFont.preload("fonts/Magazine-Cutouts-Font.ttf");

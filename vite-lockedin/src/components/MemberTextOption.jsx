import {
    Environment,
    Text,
    RenderTexture,
    useFont,
    Float,
    CameraControls
} from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';

export function MemberTextOption(props) {


    const [hovered, setHovered] = useState("")

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
    }, [hovered])

    return (
        <>

            <Float
                rotationIntensity={0.2}
                floatIntensity={0.7}
                floatingRange={[-0.1, 0.1]}

            >

                <Text

                    onPointerEnter={() => setHovered(true)}
                    onPointerLeave={() => setHovered(false)}

                    font={"fonts/Magazine-Cutouts-Font.ttf"}
                    scale={hovered ? 0.5 : 0.45}
                    position-x={0}
                    position-y={-0.2}
                    position-z={0.2}
                    lineHeight={2}
                    textAlign="center"
                    anchorY={"bottom"}
                >
                    MEMBERS

                    <meshBasicMaterial  color={hovered ? 0xffff00 : 0xffffff}>
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

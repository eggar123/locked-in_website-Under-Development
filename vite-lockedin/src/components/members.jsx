import {
    Environment,
    Text,
    RenderTexture,
    useFont,
    Float,
    CameraControls,
    Image,
    Gltf
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import { BigTest } from "./test";
import { Avatar } from "./Avatar";


export const membersArray = [
    {
        title: "Hanprodusenten",
        url: "https://www.instagram.com/hanprodusenten/",
        image: "/models/ImageToStl.com_jens-removebg-preview.glb",
        description: "Produced songs for Daniel Obede, Primz, Henny etc.",
    },
    {
        title: "Kea",
        url: "https://www.instagram.com/kristian_ea/",
        image: "/models/lowpoly_berlin_street_at_night.glb",
        description: "Produced songs for Space2k, Steven Fendi, Sli0h etc",
    },
    {
        title: "Abedz",
        url: "https://www.instagram.com/saianabedi/",
        image: "/models/ImageToStl.com_jens-removebg-preview.glb",
        description: "Produced songs for Michael Jackson, Pop Smoke, Prince etc.",
    },






]

const Member = (props) => {
    const { member } = props;
    const [hovered, setHovered] = useState("")

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
    }, [hovered])

    useFrame(() => {

    })

    return (
        <group {...props}>


            <Gltf
                src={member.image}
                onPointerEnter={() => setHovered(true)}
                onPointerLeave={() => setHovered(false)}
                onClick={() => window.open(member.url, "_blank")}
                scale={hovered ? 0.06 : 0.05}
                color={hovered ? "yellow" : "red"}
                // uuid={member.image}
                position-y={0}
                rotation-x={1.6} />
        </group>
    )
}

export const Members = () => {



    return (





        <group
            position-y={-20}
        >

            {membersArray.map((member, index) => (
                <group
                    key={"project_" + index} position={[
                        index * 5, 0, -3
                    ]}
                >

                    <Member member={member} />
                </group>
            ))}
        </group>
    );
};
/*

export function Members(props) {


    const [hovered, setHovered] = useState("")

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
        return () => document.body.style.cursor = 'auto';
    }, [hovered])

    return (
        <>

        </>
        
    );
    
};

*/
useFont.preload("fonts/EvanstonTavern-1858Bold.ttf");


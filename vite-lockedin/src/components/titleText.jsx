import {
    Environment,
    Text,
    RenderTexture,
    useFont,
} from "@react-three/drei";

export function TitleText (props) {
    return (
        <>
            <Text
                font={"fonts/Magazine-Cutouts-Font.ttf"}
                position-x={0}
                position-y={0.5}
                position-z={0.2}
                lineHeight={2.2}
                textAlign="center"
                anchorY={"bottom"}
            >
                LOCK-IN
                <meshBasicMaterial color="white">
                    <RenderTexture attach={"map"}>
                        <color attach="background" args={["#fff"]} />
                        <Environment preset="night" />

                    </RenderTexture>
                </meshBasicMaterial>
            </Text>
        </>
    );
};

useFont.preload("fonts/Magazine-Cutouts-Font.ttf");

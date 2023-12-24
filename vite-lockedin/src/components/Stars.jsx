import { Stars, Float } from "@react-three/drei";


export function Stjerner(props) {
    return (
        <>
            <Float
                rotationIntensity={0.1}
            >
                <mesh>

                    <Stars radius={10} depth={25} count={5000} factor={1} saturation={1} fade speed={0.1} />
                    <meshStandardMaterial />
                </mesh>
            </Float>

        </>
    );
};



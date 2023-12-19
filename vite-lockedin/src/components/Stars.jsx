import { Stars, Float } from "@react-three/drei";


export function Stjerner(props) {
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

        </>
    );
};



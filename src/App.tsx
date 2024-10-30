import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Text3D, useGLTF } from "@react-three/drei";
import Lights from "./Lights";

function WorldModel() {
  const { materials, scene } = useGLTF("/steak.glb");
  const { materials: lighterM, scene: lighterS } = useGLTF("/lighter.glb");
  const { materials: candleM, scene: canldeS } = useGLTF(
    "/birthday_candle.glb"
  );
  return (
    <group>
      <primitive
        object={lighterS}
        material={lighterM}
        scale={0.2}
        position={[4, 0.45, 0]}
        rotation={[0, Math.PI, -0.6]}
      />
      <primitive
        object={canldeS}
        material={candleM}
        scale={0.3}
        position={[-0.6, 0.45, 0]}
      />
      <primitive object={scene} material={materials}>
        <Text3D
          smooth={1}
          lineHeight={0.1}
          letterSpacing={-0.025}
          scale={0.2}
          position={[0.7, 0.15, -0.86]}
          rotation={[1.6, 3.15, -0.01]}
          font="/Urbanist_Regular.json"
        >
          Happy Birthday Joe
          <meshBasicMaterial color="#008bbf" />
        </Text3D>
      </primitive>
    </group>
  );
}

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <Canvas gl={{ alpha: false }}>
        <Lights />
        <WorldModel />
        <OrbitControls />
        <Environment
          files="/gym.jpg"
          background
          backgroundRotation={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

export default App;

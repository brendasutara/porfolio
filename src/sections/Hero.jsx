import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { CloudRing } from "../components/CloudRing";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const aboutText = `Diseño y desarrollo productos digitales modernos, 
  combinando UX/UI, desarrollo frontend y experiencias interactivas 
  para transformar ideas en aplicaciones reales`;

  return (
    <section id="inicio" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"404 No Bugs Found"}
        title={"Bren Sutara"}
        text={aboutText}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          dpr={isMobile ? 1 : [1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          performance={{ min: 0.5 }}
          camera={{ position: [0, 0, 10], fov: 17.5, near: 0.1, far: 100 }}
        >
          <ambientLight intensity={0.2} />

          <directionalLight
            position={[4, 6, 5]}
            intensity={2}
            color="#ffffff"
          />

          <directionalLight
            position={[-5, 2, 3]}
            intensity={0.7}
            color="#dfe6ee"
          />

          <directionalLight
            position={[0, 1, -6]}
            intensity={1.1}
            color="#fff6ed"
          />

          <Float speed={0.5}>
            <CloudRing scale={isMobile ? 0.12 : 0.4} />
            //todo Dar credito recordar{" "}
            {/* <p class="text-xs opacity-60">
              {" "}
              3D model "Cloud Ring" by Node_λrt via Sketchfab — CC BY 4.0{" "}
            </p> */}
          </Float>

          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form="circle"
                intensity={4}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form="circle"
                intensity={2.5}
                position={[0, 3, 2]}
                scale={8}
              />
              <Lightformer
                form="circle"
                intensity={2}
                position={[-5, -1, -1]}
                scale={8}
              />
              <Lightformer
                form="circle"
                intensity={2.5}
                position={[8, 1, 2]}
                scale={12}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;

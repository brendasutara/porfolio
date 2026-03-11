import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { CloudRing } from "../components/CloudRing";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const aboutText = `Diseño y desarrollo productos digitales modernos, 
  combinando UX/UI, desarrollo frontend y experiencias interactivas 
  para transformar ideas en aplicaciones reales`;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2",
    );
  }, []);

  return (
    <section id="inicio" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <div className="px-10">
              <p className="text-sm font-light tracking-[0.5rem] uppercase px-2 py-4 text-black">
                404 No Bugs Found/
              </p>
              <h1 className="flex flex-col md:flex-row md:gap-x-6 text-black uppercase banner-text-responsive">
                <span className="block">Bren </span>
                <span className="block">Sutara</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="relative -mt-2 px-10 text-black sm:-mt-4">
          <div className="absolute inset-x-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines
              text={aboutText}
              className="font-light uppercase value-text-responsive"
            />
          </div>
        </div>
      </div>
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, 10], fov: 17.5, near: 0.1, far: 100 }}
        >
          <color attach="background" args={["#c8c5b8"]} />

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

          <Environment resolution={512}>
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

import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const About = () => {
  const imgRef = useRef(null);
  const text = `Combino diseño UX/UI y desarrollo para crear 
productos digitales claros, funcionales y con propósito.`;

  const aboutText = `Soy desarrolladora con una base sólida en diseño UX/UI. Con el tiempo integré el desarrollo como una forma de crear productos digitales completos, combinando diseño, tecnología y experiencia de usuario.

Trabajo principalmente con React, React Native y Flutter, desarrollando interfaces claras, accesibles y funcionales. Me interesa especialmente el desarrollo de aplicaciones y productos donde el diseño y el código se integran desde el inicio.

Disfruto los proyectos donde puedo aportar una mirada integral del proceso: desde la experiencia de usuario hasta la implementación técnica, siempre buscando soluciones claras, útiles y con propósito.`;

  useGSAP(() => {
    gsap.to("#sobre-mi", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  });

  return (
    <section id="sobre-mi" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Un perfil híbrido entre diseño y desarrollo"}
        title={"Sobre mi"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/women.jpg"
          alt="brenda"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

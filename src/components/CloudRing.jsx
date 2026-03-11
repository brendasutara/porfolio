import React, { useEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function CloudRing(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/cloud_ring.glb");
  const { actions } = useAnimations(animations, group);

  const cloudMaterial = useMemo(() => {
    const material = materials.Cloud.clone();
    material.color.set("#f6f3ee");
    material.emissive.set("#000000");
    material.emissiveIntensity = 0;
    material.roughness = 0.95;
    material.metalness = 0;
    return material;
  }, [materials.Cloud]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(group.current.position, {
      y: 5,
      duration: 2.8,
      ease: "circ.out",
    });
    tl.from(
      group.current.rotation,
      {
        x: -0.35,
        y: -0.2,
        z: 0.12,
        duration: 3.2,
        ease: "power1.inOut",
      },
      "-=75%",
    );
  }, []);

  useEffect(() => {
    const preferredAction = actions?.Animation;
    const fallbackAction = Object.values(actions || {})[0];
    const action = preferredAction || fallbackAction;

    if (!action) return;

    action.reset();
    action.timeScale = 0.05;
    action.play();

    return () => {
      action.stop();
    };
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0.2, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cloud_GN001_2">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={cloudMaterial}
                />
              </group>
              <group name="Cloud_GN002_3" rotation={[0, -0.016, 0]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={cloudMaterial}
                />
              </group>
              <group name="Cloud_GN003_4" rotation={[0, -0.031, 0]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={cloudMaterial}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cloud_ring.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/scene.gltf --transform 
Files: ./public/scene.gltf [146.8KB] > C:\Users\2pdgr\Desktop\port-3d-project\scene-transformed.glb [891.5KB] (-507%)
Author: DigitalLife3D (https://sketchfab.com/DigitalLife3D)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/model-52a-kemps-ridley-sea-turtle-no-id-7aba937dfbce480fb3aca47be3a9740b
Title: Model 52A - Kemps Ridley Sea Turtle (no ID)
*/

import React, { useEffect } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/scene-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  
  useEffect(() => {
    mixer.timeScale = 0.5
    actions['Swim Cycle'].play()
  }, [])
  useFrame((state) => (scene.rotation.z = Math.sin(state.clock.elapsedTime / 4) / 2))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Retop_Material} skeleton={nodes.Object_7.skeleton} position={[0.001, 0.023, -0.064]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')

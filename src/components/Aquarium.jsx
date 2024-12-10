import React, { useRef, useLayoutEffect } from 'react'
import { useMask, useGLTF } from '@react-three/drei'
import { MeshTransmissionMaterial } from '@react-three/drei'

const Aquarium = ({ children, ...props }) => {
    
    const ref = useRef()
    const { nodes } = useGLTF('/shapes-transformed.glb')
    const stencil = useMask(1, false)
    useLayoutEffect(() => {
      // Apply stencil to all contents
      ref.current.traverse((child) => child.material && Object.assign(child.material, { ...stencil }))
    }, [])
    return (
      <group {...props} dispose={null}>
        <mesh castShadow scale={[0.61 * 6, 0.8 * 6, 1 * 6]} geometry={nodes.Cube.geometry}>
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={3}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.2}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        </mesh>
        <group ref={ref}>{children}</group>
      </group>
    )
}

export default Aquarium

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, SpotLight, Lightformer } from '@react-three/drei'
import { Float, CameraControls } from '@react-three/drei'


import Aquarium from './components/Aquarium'
import { Model } from './components/Model'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black'>
      <Canvas shadows camera={{ position: [30, 0, -3], fov: 35, near: 1, far: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
        <Aquarium>
        <Float rotationIntensity={2} floatIntensity={10} speed={2}>
          <Model position={[0, -0.5, -1]} rotation={[0, Math.PI, 0]} scale={23} />
        </Float>
        </Aquarium>
        
        <Environment resolution={1024}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
        </Environment>
        <CameraControls truckSpeed={0} dollySpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>      
    </div>
  )
}

export default App

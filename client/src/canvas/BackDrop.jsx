import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import React, { useRef } from 'react'

const BackDrop = () => {
  const shadows = useRef()
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={1.2}
        ambient={0.95}
        position={[10, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={2}
        ambient={0.25}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

export default BackDrop

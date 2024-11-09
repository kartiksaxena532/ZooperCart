

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/cartoon_shopping_cart.glb')
  const instances = useMemo(
    () => ({
      TutacakMaterial: nodes.Tutacak_Material001_0,
      TekerleklerMaterial: nodes.Tekerlekler_Material003_0,
      TekerleklerMaterial1: nodes.Tekerlekler_Material_0,
      TekerleklerMaterial2: nodes.Tekerlekler_Material002_0,
      CubeMaterial: nodes.Cube_Material_0,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-4.137, 11.631, -0.012]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <instances.TekerleklerMaterial />
          <instances.TekerleklerMaterial1 />
          <instances.TekerleklerMaterial2 />
        </group>
        <instances.TutacakMaterial
          position={[78.576, 88.267, -0.002]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <instances.CubeMaterial
          position={[-13.248, 54.68, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={64.955}
        />
      </group>
    </group>
  )
}


useGLTF.preload('./cart.glb')



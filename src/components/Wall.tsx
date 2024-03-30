import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const Wall = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    '/textures/painted_plaster_wall_diff_1k.jpg',
    '/textures/painted_plaster_wall_disp_1k.jpg',
    '/textures/painted_plaster_wall_nor_gl_1k.jpg',
    '/textures/painted_plaster_wall_arm_1k.jpg',
    '/textures/painted_plaster_wall_arm_1k.jpg',
  ])

  return (
    <mesh position={[0, 0, -1]} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 10]}/>
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}

export default Wall
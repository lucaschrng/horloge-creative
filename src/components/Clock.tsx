const Clock = () => {
  const cylinderHeight = 0.1;
  const cylinderRadius = 3;

  return (
    <>
      <mesh position={[0, 0, -0.4]} rotation-x={Math.PI * (1 / 2)}>
        <cylinderGeometry args={[cylinderRadius, cylinderRadius, cylinderHeight, 64]}/>
        <meshStandardMaterial color="white" roughness={0.6} metalness={0.1}/>
      </mesh>
      <mesh position={[0, 3 - 0.6 / 2 - 0.3, -0.35]}>
        <boxGeometry args={[0.1, 0.6, 0.05]}/>
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1}/>
      </mesh>
      <mesh position={[0, -3 + 0.6 / 2 + 0.3, -0.35]}>
        <boxGeometry args={[0.1, 0.6, 0.05]}/>
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1}/>
      </mesh>
      <mesh position={[-3 + 0.6 / 2 + 0.3, 0, -0.35]} rotation-z={Math.PI * (1 / 2)}>
        <boxGeometry args={[0.1, 0.6, 0.05]}/>
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1}/>
      </mesh>
      <mesh position={[3 - 0.6 / 2 - 0.3, 0, -0.35]} rotation-z={Math.PI * (1 / 2)}>
        <boxGeometry args={[0.1, 0.6, 0.05]}/>
        <meshStandardMaterial color="black" roughness={0.6} metalness={0.1}/>
      </mesh>
    </>
  )
}

export default Clock
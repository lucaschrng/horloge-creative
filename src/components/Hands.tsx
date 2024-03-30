import {useRef} from 'react';
import {useFrame} from "@react-three/fiber";
import {Group} from "three";

type HandProps = {
  length: number;
  width: number;
  height: number;
  color: string;
  initialRotation: number;
  getTargetRotation: () => number;
};

const calculateTargetRotations = () => {
  const now = new Date();
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondsRotation = - Math.PI * 2 * (seconds / 60);
  const minutesRotation = - Math.PI * 2 * (minutes / 60);
  const hoursRotation = - Math.PI * 2 * (hours / 12);

  return { secondsRotation, minutesRotation, hoursRotation };
};

const Hand: React.FC<HandProps> = ({length, width, height, color, initialRotation, getTargetRotation}) => {
  const ref = useRef<Group>(null);

  useFrame(() => {
    const targetRotation = getTargetRotation();

    if (!ref.current) return;
    ref.current.rotation.z += (targetRotation - ref.current.rotation.z) * 0.1;
  });

  return (
    <group ref={ref} rotation-z={initialRotation}>
      <mesh position={[0, length / 2 - width / 2, -0.35]}>
        <boxGeometry args={[width, length, height]}/>
        <meshStandardMaterial color={color}/>
      </mesh>
    </group>
  );
};

const Hands = () => {
  const { secondsRotation, minutesRotation, hoursRotation } = calculateTargetRotations();

  return (
    <>
      <Hand length={1.5} width={0.2} height={0.03} color="black" initialRotation={hoursRotation} getTargetRotation={() => calculateTargetRotations().hoursRotation} />
      <Hand length={2} width={0.15} height={0.02} color="black" initialRotation={minutesRotation} getTargetRotation={() => calculateTargetRotations().minutesRotation} />
      <Hand length={2.5} width={0.1} height={0.01} color="red" initialRotation={secondsRotation} getTargetRotation={() => calculateTargetRotations().secondsRotation} />
    </>
  );
};

export default Hands;

import 'swiper/css';
import { useSpring, animated } from 'react-spring'
import MainLayout from '../components/layouts/mainlayout';
import { useState } from 'react';

export default function Home() {

  const [isInvisible, setVisible] = useState(false)
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <MainLayout>
        <div>
          <button onClick={()=> {setVisible(!isInvisible)}}>chamhe</button>
        </div>
        {
          isInvisible &&          
          <animated.div className=" text-white w-56 h-60" style={props}>
            hello
          </animated.div>
        }
    </MainLayout>
  )
}

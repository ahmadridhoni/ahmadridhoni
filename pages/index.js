import Head from 'next/head'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Link from 'next/link'
export default function Home() {

  useEffect(()=> {
    gsap.to(".box", {
      scrollTrigger: {
        pin: true,
        start: "top top",
        scrub: 1,
        trigger: ".box"
      }, // start the animation when ".box" enters the viewport (once)
    });
  },[])

  return (
    <div>
      <Link href="/about"><a className="text-5xl">hello</a></Link>
    </div>
  )
}

import React, { useRef } from 'react'
import { BsArrowRight } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const App = () => {
  const imageOneRef = useRef();
  const imageTwoRef = useRef();
  const imageThreeRef = useRef();
  useGSAP(()=>{
    gsap.from(imageOneRef.current,{
      y:200,
      opacity:0,
      duration:1
    })
    gsap.from(imageTwoRef.current,{
      x:200,
      duration:1,
    })
    gsap.from(imageThreeRef.current,{
      y:-100,
      duration:1,
    })
  })
  return (
    <>
      <section className='py-10 px-20 overflow-y-hidden overflow-x-hidden '>
        <nav className='flex items-center justify-between'>
          <div className="right-part flex items-baseline justify-center">
            <h1 className='text-3xl digi'>this is digital</h1>
            <div id="green-dot" className='w-2 h-2 rounded-full  bg-green-400'></div>
          </div>
          <div className="left-part flex items-center gap-x-10">
            <h1>Services</h1>
            <h1>Work</h1>
            <h1>About</h1>
            <h1>Culture</h1>
            <h1>Careers</h1>
            <button className='px-10 py-2 relative overflow-hidden border-black border rounded-3xl'><h1 className='relative z-10 flex items-center justify-start gap-3'>Contact Us
              <BsArrowRight className='text-2xl'/>
            </h1>
              <div id="green" className='absolute w-full transition-all duration-300 h-full bg-green-500 top-0 left-[-100%] '></div></button>
          </div>
        </nav>
      </section>
      <section className='relative '>
        <div className='flex items-center mb-44  flex-col justify-center w-full h-[49vh]  '>
          <h1 className='text-7xl w-[700px] relative z-10 text-center hello'>Digital Performance Solutions
            <div className=' absolute top-[133px] left-52  w-72 h-5 '>
              <img className='relative w-full h-full' src="https://thisisdigital.co.uk/dist/images/underline-green.svg" alt="" />
            </div>
          </h1>
          <h1 className='flex items-center justify-center mt-5 gap-x-5 mb-[-100px]'>Find out More <button className='px-5 py-2 button2 border-2 overflow-hidden relative border-black rounded-full'><h1 className='relative z-10 flex items-center justify-start gap-3'>More<BsArrowRight className='text-2xl'/></h1>
            <div id="green" className='w-full h-full absolute top-0 left-[-100%] bg-green-400 transition-all duration-300'></div></button></h1>
        </div>
        <div ref={imageOneRef} id="first-img" className='absolute top-0 left-12 '>
          <img className='w-64 h-96 object-cover' src="https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/This-is-digital-LOW-RES-75.jpg?w=1200&h=1731&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1631017685&s=333b9abfa858cf7b8685e28a597dfa08" alt="" />
        </div>
        <div ref={imageTwoRef} id="second-img" className='absolute top-0   right-[300px]'>
          <img className='w-72 h-48 object-cover' src="https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/This-is-digital-LOW-RES-23.jpg?w=1200&h=1008&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1631003343&s=88354e145206a527c989b49f760a89d3" alt="" />
        </div>
        <div ref={imageThreeRef} id="third-img" className='absolute right-16 top-36'>
          <img className='w-56 h-48 object-cover' src="https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/This-is-digital-LOW-RES-81.jpg?w=1200&h=1200&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1631005177&s=21e4c0bb5ce83f57e69f404637d61265" alt="" />
        </div>
      </section>
      <section className='w-full h-screen bg-black'></section>
    </>
  )
}

export default App
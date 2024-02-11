"use client"
import VanillaTilt from 'vanilla-tilt';
import React, { useRef, useEffect } from 'react';

export default function FeatureCard() {

  const tiltRef = useRef();

  useEffect(() => {
    const tilt = VanillaTilt.init(tiltRef.current, {
      max: 20,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
      transition: true, 
      speed: 3000,
    });

    return () => {
      if (tilt) {
        tilt.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="bg-black hover:bg-black flex flex-col items-center justify-center gap-[30px] p-[30px] sm:w-[380px] rounded-[10px] sm:rounded-[20px] shadow-[0px_4px_16px_rgba(255,255,255,0.1),_0px_8px_24px_rgba(255,255,255,0.1),_0px_16px_56px_rgba(255,255,255,0.1)]" ref={tiltRef}>
        <div className="w-[100px] h-[100px] bg-white rounded-full border-[#303030] border-[7px] bg-black"></div>
        <div className="text-[25px] sm:text-[30px] text-center">High Perfomance</div>
        <div className="text-justify text-[13px] sm:text-[15px] font-[200]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </div>
      </div>
    </>
  );
}

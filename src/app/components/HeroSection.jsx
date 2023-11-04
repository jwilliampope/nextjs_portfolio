import React from "react"
import Image from "next/image"
import Link from "next/link"
// import CV from "../Jack_Pope_cv.pdf"

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Jack Pope</h1>
          <p className="text-[#adb7be] text-lg mb-6 lg:text-xl">Front-End Web Developer</p>
          <p className="text-[#adb7be] text-sm mb-6">Thanks for visiting! I have been studying web development since July of 2018. During this time I have gained solid skills in HTML, CSS, and JS, and earned the Web Development Certificate from County College of Morris in Randolph, NJ, in 2022. This program has provided me experience with ReactJS, NextJS, WordPress, Java, and MySQL.</p>
          <div>
            <Link href="#contact" className="mr-2 px-1 inline-block py-1 w-full sm:w-fit rounded-full  hover:bg-slate-600 text-white mt-3 border-solid border-2 border-indigo-600">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Contact Me</span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/jack.jpg" alt="Jack" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

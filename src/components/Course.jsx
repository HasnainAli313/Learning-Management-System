import { FaAws, FaJava, FaPython } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoFigma } from "react-icons/io5"
import { SiMysql } from "react-icons/si"

function Course() {
  return (
    <>
    <section>
        <h1 className="text-4xl font-bold mb-4 text-center">Course Benefits</h1>
        <p className="text-lg leading-relaxed text-justify p-2">
        Enrolling in courses can provide a wealth of benefits, including valuable knowledge, practical skills, expanded expertise, experienced instruction, collaborative learning, and the foundation needed to achieve personal and professional goals.
        </p>
        
        <div className="flex gap-5 justify-center">
          <h3 className="text-xl font-semibold" >Learn anything</h3>
          <h3 className="text-xl font-semibold" >Save money</h3>
          <h3 className="text-xl font-semibold" >Flexible learning</h3>
          <h3 className="text-xl font-semibold" >Unlimited certificates</h3>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-center mt-10">Popular Topics to Explore</h1>
        <div className="flex gap-5 justify-center">
        <IoLogoJavascript size={50}/>
        <FaPython size={50}/>
        <FaJava  size={50}/>
        <FaAws  size={50}/>
        <IoLogoFigma size={50}/>
        <SiMysql size={50} />
        </div>

    </section>
    </>
  )
}

export default Course
import { CgProfile } from "react-icons/cg"
import html from "../assets/html.jpeg"
import java from "../assets/java.jpeg"
import cpp from "../assets/cpp.png"
import data from "../assets/data sc.jpeg"
import ai from "../assets/ai.jpeg"
import python from "../assets/python.jpeg"
import cyber from "../assets/cyber.jpeg"
import rust from "../assets/rust.jpeg"

function Courses() {
  return (
    <>
        <section className="mt-10 ">
            <h1 className="text-4xl font-bold mb-4 text-center">Courses</h1>
            <div className="p-5 flex justify-between  flex-wrap">
                {/* Course */}
                <div className="border border-1 w-[25%] p-5   hover:scale-[1.02] ">
                    <img className="w-[200px]" src={html} alt="" />
                    <h3 className="font-semibold">HTML Course for Beginners</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={cpp} alt="" />
                    <h3 className="font-semibold">C++ for Beginners</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={java} alt="" />
                    <h3 className="font-semibold">Java</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={data} alt="" />
                    <h3 className="font-semibold">Data Science</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={ai} alt="" />
                    <h3 className="font-semibold">AI for Beginners</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={cyber} alt="" />
                    <h3 className="font-semibold">Cyber Security for beginners</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>

                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={rust} alt="" />
                    <h3 className="font-semibold">Rust</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>
                <div className="border border-1 w-[25%] p-5  hover:scale-[1.02] ">
                    <img className="w-[200px]" src={python} alt="" />
                    <h3 className="font-semibold">Python</h3>
                    <div >
                    <CgProfile />
                    <p>Beginner</p>
                    <button className="text-blue-500 font-semibold">Enroll Now > </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Courses
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Course from "../components/Course";
import Courses from "../components/Courses";
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
     <header className="bg-blue-500 p-3 text-white " data-aos="fade-down">
        <h1 className="text-2xl font-bold">eLearning</h1>
      </header>
      <section className="px-8 py-8 text-center max-w-5xl mx-auto">
     
        <h1 className="text-4xl md:text-5xl font-semibold mb-4" data-aos="zoom-in">
          You bring the expertise, we'll make it unforgettable.
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Using highly personalised activities, videos and animations you can
          energise your students and motivate them to achieve their learning
          goals as they progress through a journey.
        </p>

        <div className="flex justify-center gap-4 flex-wrap" data-aos="fade-up" data-aos-delay="400">
          <Link to="/signup">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 hover:bg-blue-700">
            Register &rarr;
          </button>
          </Link>

          <Link to="/login">
          <button className="border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white">
            Login &rarr;
          </button>
          </Link>
        </div>
      </section>
      <AboutUs data-aos="flip-left" />
     <Course data-aos="fade-right"></Course>
     <Courses data-aos="fade-left"></Courses>
      <Footer data-aos="fade-up"/>
    </>
  );
}

export default Home;

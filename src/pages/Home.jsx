import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
     <header className="bg-blue-500 p-3 text-white ">
        <h1 className="text-2xl font-bold">eLearning</h1>
      </header>
      <section className="px-8 py-8 text-center max-w-5xl mx-auto">
     
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          You bring the expertise, we'll make it unforgettable.
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Using highly personalised activities, videos and animations you can
          energise your students and motivate them to achieve their learning
          goals as they progress through a journey.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
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
      <AboutUs />
      <Footer/>
    </>
  );
}

export default Home;

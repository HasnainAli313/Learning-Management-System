// import { useState } from 'react';
// import { FaBook, FaTasks, FaChartLine } from 'react-icons/fa';

// function Dashboard() {
//     const [selectedSection, setSelectedSection] = useState(null);

//     const handleSectionClick = (section) => {
//         setSelectedSection(selectedSection === section ? null : section);
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div 
//                         className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                         onClick={() => handleSectionClick('courses')}
//                     >
//                         <div className="flex items-center">
//                             <FaBook className="text-gray-800 mr-3" />
//                             <h2 className="text-xl font-semibold text-gray-800">Courses</h2>
//                         </div>
//                         <p className="mt-2 text-gray-600">Manage your courses and view enrolled students.</p>
//                         {selectedSection === 'courses' && <p className="mt-2 text-gray-500">Additional course details...</p>}
//                     </div>
//                     <div 
//                         className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                         onClick={() => handleSectionClick('assignments')}
//                     >
//                         <div className="flex items-center">
//                             <FaTasks className="text-gray-800 mr-3" />
//                             <h2 className="text-xl font-semibold text-gray-800">Assignments</h2>
//                         </div>
//                         <p className="mt-2 text-gray-600">Create and grade assignments for your courses.</p>
//                         {selectedSection === 'assignments' && <p className="mt-2 text-gray-500">Additional assignment details...</p>}
//                     </div>
//                     <div 
//                         className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                         onClick={() => handleSectionClick('analytics')}
//                     >
//                         <div className="flex items-center">
//                             <FaChartLine className="text-gray-800 mr-3" />
//                             <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
//                         </div>
//                         <p className="mt-2 text-gray-600">View analytics and reports on student performance.</p>
//                         {selectedSection === 'analytics' && <p className="mt-2 text-gray-500">Additional analytics details...</p>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;
import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import reactNative from "../assets/reactNative.png";
import introPro from "../assets/introtoprogramming.jpg";
import web from "../assets/webDevelopment.png";
import dsa from "../assets/DSA.png";
import { Link } from 'react-router-dom';

const LMSDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn the fundamentals of programming and build your first application.',
      thumbnail: introPro
    },
    {
      id: 2,
      title: 'Web Development Fundamentals',
      description: 'Gain a solid understanding of HTML, CSS, and JavaScript to build responsive websites.',
      thumbnail: web
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms',
      description: 'Dive into the world of data structures and algorithms, and learn how to solve complex problems.',
      thumbnail: dsa
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      description: 'Learn how to build cross-platform mobile apps using React Native, a popular JavaScript framework.',
      thumbnail: reactNative
    }
  ]);

  useEffect(() => {
    // Retrieve enrolled courses from Local Storage on initial load
    const storedCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolledCourses(storedCourses);
  }, []);

  const handleEnroll = (course) => {
    // Add course to enrolled courses and save to Local Storage
    const updatedCourses = [...enrolledCourses, course];
    setEnrolledCourses(updatedCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
  };

  const handleUnenroll = (course) => {
    // Remove course from enrolled courses and save to Local Storage
    const updatedCourses = enrolledCourses.filter((c) => c.id !== course.id);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-500 flex justify-between text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <h1 className="text-2xl font-bold"><Link to="/profile" ><CgProfile size="30px"/></Link></h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Courses</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {allCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {enrolledCourses.some((c) => c.id === course.id) ? (
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => handleUnenroll(course)}>
                    Unenroll
                  </button>
                ) : (
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => handleEnroll(course)}>
                    Enroll
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LMSDashboard;

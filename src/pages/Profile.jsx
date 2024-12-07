import profile from "../assets/profile.png"
import  { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

function Profile() {
    const user = {
        bio: 'Software developer with a passion for creating innovative solutions.',
        
    };

    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, set the email
          setUserEmail(user.email);
        } else {
          // User is signed out
          setUserEmail('');
        }
      });
  
      // Cleanup subscription on unmount
      return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 ">
            <header className="bg-blue-500 flex justify-between text-white p-4">
        <h1 className="text-2xl font-bold">Profile</h1>
        <h1 className="text-2xl font-bold"><Link to="/dashboard" ><MdDashboard/></Link></h1>
      </header>
            <div className="max-w-3xl mx-auto mt-2  bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                    <img 
                        src={profile}
                        alt="User Avatar" 
                        className="w-24 h-24 rounded-full mr-4"
                        />
                        {userEmail ? (
                <p>Welcome, {userEmail}!</p>
              ) : (
                <p>Please log in to see your dashboard.</p>
              )}
        
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Bio</h2>
                    <p className="text-gray-600">{user.bio}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;



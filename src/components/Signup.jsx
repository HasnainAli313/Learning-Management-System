
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/dashboard');

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="-600 flex justify-center place-items-center h-[100vh]">
        <form onSubmit={handleSignup} className="border border-black rounded-xl flex flex-col gap-3 p-5">
          <h1 className="text-center text-3xl font-semibold">Signup</h1>
          <label htmlFor="email">Email:</label>
          <input className="border border-black p-1" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input className="border border-black p-1" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="border p-1 bg-[#0865fe] hover:bg-[#0866fedb] text-white" type="submit">Signup</button>
          <p>Already have an account? <Link className='text-blue-800' to="/login">Login</Link></p>
        </form>
      </section>
    </>
  );
}

export default Signup;

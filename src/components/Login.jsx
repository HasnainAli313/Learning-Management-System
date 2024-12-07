
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate("/dashboard")
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className="flex justify-center place-items-center h-[100vh]">
        <form onSubmit={handleLogin} className="border border-black rounded-xl flex flex-col gap-3 p-5">
          <h1 className="text-center text-3xl font-semibold">Login</h1>
          <label htmlFor="email">Email:</label>
          <input className="border border-black p-1" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input className="border border-black p-1" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="border p-1 bg-[#0865fe] hover:bg-[#0866fedb] text-white" type="submit">Login</button>
          <p>New account? <Link to="/signup" className='text-blue-800'>Signup</Link></p>
        </form>
      </section>
    </>
  );
}

export default Login;

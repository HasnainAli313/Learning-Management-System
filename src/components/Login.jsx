import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <section className="border-[5px] border-red-600 flex justify-center place-items-center h-[100vh]">
        <form action="" className="border border-black rounded-xl  flex flex-col gap-3 p-5">
            <h1 className="text-center text-3xl font-semibold ">Login</h1>
            <label htmlFor="email">Email:</label>
            <input className="border border-black p-1" type="email" id="email"  />
            <label htmlFor="password" >Password:</label>
            <input className="border border-black p-1"  type="password"  id="password"/>
            <button className="border p-1 bg-[#0865fe] hover:bg-[#0866fedb] text-white" type="submit">Login</button>
            <p>New account? <Link to="/signup" className='text-blue-800' >Signup</Link> </p>
        </form>
    </section>

    </>
  )
}

export default Login
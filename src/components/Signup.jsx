import { Link } from 'react-router-dom';

function Signup() {
    return (
      <>
      <section className="border-[5px] border-red-600 flex justify-center place-items-center h-[100vh]">
          <form action="" className="border border-black rounded-xl  flex flex-col gap-3 p-5">
              <h1 className="text-center text-3xl font-semibold ">Signup</h1>
              <label htmlFor="username">Username:</label>
              <input className="border border-black p-1" type="text" id="username"  />
              <label htmlFor="email">Email:</label>
              <input className="border border-black p-1" type="email" id="email"  />
              <label htmlFor="password" >Password:</label>
              <input className="border border-black p-1" type="password"  id="password"/>
              <button className="border p-1 bg-[#0865fe] hover:bg-[#0866fedb] text-white" type="submit">Signup</button>
            <p>Already have  account? <Link className='text-blue-800' to="/login" >Login</Link> </p>
          </form>
      </section>
  
      </>
    )
  }
  
  export default Signup
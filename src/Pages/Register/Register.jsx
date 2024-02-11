import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvider";
import { Result } from "postcss";


const Register = () => {
const { createUser}=useContext(AuthContext);




const handleRegister=e=>{
e.preventDefault();
console.log(e.currentTarget)
const form =new FormData(e.currentTarget);
const name=form.get('name');
const email=form.get('email');
const password=form.get('password');
const photo=form.get('photo');
console.log(name,email,password,photo)

createUser(email,password)
.then(result=>{
    console.log(result.user)
})

.catch(error=>{
    console.error(error)
});


}

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-full bg-base-200">
  <div className="hero-content flex-col">
  <h1 className="text-3xl font-semibold">Please Register</h1> 
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" placeholder="Photo url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mb-3"> all ready have  account <Link className="text-blue-600" to='/login'>LOgin</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;
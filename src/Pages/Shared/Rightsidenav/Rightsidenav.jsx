


import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const Rightsidenav = () => {
    return (
        <div className='p-4 bg-slate-100'>
      <div className=''>
        <h1 className="text-3xl">Login With</h1>
        <button className="btn btn-outline w-full mb-3"> 
       <FaGoogle></FaGoogle>
       Google
</button>
        <button className="btn btn-outline w-full"> 
       <FaGithub></FaGithub>
       Github
</button>
      
      </div>
      <div className='p-4'>
        <h1 className="text-3xl">Find Us On</h1>
        <a className='p-2 flex items-center mb-2 gap-2 border rounded-t-lg' href="">
            <FaFacebook></FaFacebook> <span className='font-extrabold'>facebook
            </span>
        </a>
        <a className='p-2 flex items-center mb-2 gap-2 border rounded-t-lg' href="">
              <FaTwitter></FaTwitter>  <span className='font-extrabold'>Twitter
            </span>
        </a>
        <a className='p-2 flex items-center mb-2 gap-2 border rounded-t-lg' href="">
            <FaInstagram></FaInstagram> <span className='font-extrabold'>Intragram
            </span>
        </a>

        {/* Q zone */}
        <div className='p-4'>
      <div className=''>
        <h1 className="text-3xl">Q- Zone</h1>
        <img className='w-full' src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
   
      
      </div>   
      </div>
      
      </div>
        </div>


    );
};

export default Rightsidenav;
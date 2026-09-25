import logo from '../assests/logo.png'
import Facebook from '../assests/Facebook.png'
import Linkdin from '../assests/Linkdin.png'
import Twiter from '../assests/Twiter.png'
import instagram from '../assests/instagram.png'
const Footertop = () => {
  return (
    <>
    <div className='flex flex-row  justify-between pt-8 '>
      <div className='ml-18 '>
       <div className="flex items-center   ">
             <img  className="h-8  w-8  object-cover  " src={logo}></img>
             <h3 className="pl-4 font-semibold text-2xl text-white">Job<span className="text-indigo-600">Finder</span></h3>
       </div> 
        <p className='text-slate-400 pt-2'>Your career, our priority.</p>
      </div>  
     <div className=" flex justify-center gap-9 pt-5 ">
      <a className="text-slate-400  ">Home</a>
      <a className="text-slate-400 ">Jobs</a>
      <a className="text-slate-400 ">About</a>
      <a className="text-slate-400  ">Companies</a>
    </div>
      <div className='flex flex-row gap-1 mr-18'>
        <img  className='h-8 w-8 rounded-full' src={Facebook}></img>
        <img  className='h-8 w-8 rounded-full' src={Linkdin}></img>
        <img  className='h-8 w-8 rounded-full' src={Twiter}></img>
        <img  className='h-8 w-8 rounded-full' src={instagram}></img>
      </div>
    </div>
    </>
  )
}

export default Footertop

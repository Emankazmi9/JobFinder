import { Heart } from 'lucide-react';
const Footerbottom = () => {
  return (
  <>
 <div className='flex flex-col md:flex-row justify-between gap-3 mt-7 px-4 md:px-10 lg:px-18 items-center'>
    <p className='text-slate-400'>@2026 JobFinder. All rights reserved</p>
    <div className='flex flex-row items-center gap-1'>
    <p className='text-slate-400 '>Made with</p>
     <Heart fill="red" color="red" size={16} />
     <p className='text-slate-400'> using React & Tailwind CSS</p>
    </div>
  </div>
  </>
  )
}

export default Footerbottom

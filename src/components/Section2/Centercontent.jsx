import {ArrowRight } from 'lucide-react';
const Centercontent = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-8 px-4 md:px-10 lg:px-18">
      <h1 className="font-bold text-2xl md:text-4xl">Popular Jobs</h1>
      <div className='flex flex-row items-center  gap-1'>
    <p className='text-blue-600 font-medium  '>veiw all jobs</p>
     <ArrowRight size={16} color="#3b4cce" strokeWidth={2}  />
    </div>
    </div>
  )
}

export default Centercontent

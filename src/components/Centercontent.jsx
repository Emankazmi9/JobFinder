import {ArrowRight } from 'lucide-react';
const Centercontent = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-8">
      <h1 className="font-bold text-4xl ml-18">Popular Jobs</h1>
      <div className='flex flex-row items-center mr-18 gap-1'>
    <p className='text-blue-600 font-medium  '>veiw all jobs</p>
     <ArrowRight size={16} color="#3b4cce" strokeWidth={2}  />
    </div>
    </div>
  )
}

export default Centercontent

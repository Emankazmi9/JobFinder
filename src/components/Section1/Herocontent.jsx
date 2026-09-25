import { Search } from 'lucide-react';
const Herocontent = () => {
  return (
    <>
<div className="flex flex-col justify-between mt-10 md:mt-18 ml-4 md:ml-10 lg:ml-18 h-full w-full md:w-1/2">
      <div>
       <p className="text-blue-600 bg-gray-200  w-50   text-sm rounded-xl  pl-3 py-1">Find Your Next Opportunity</p>
       <h1 className="font-bold text-3xl md:text-5xl my-2">Find Your Dream Job</h1>
       <p className="text-base md:text-lg text-gray-700">Discover thousand of job and start <br className="hidden md:block" /> your career today</p>
       <div className="flex flex-row items-center mt-5 w-full">
       <Search   size={16} className=' bg-white h-13 w-9 pl-3 p-1 rounded-l-md' />  
      <div className="bg-white h-13 w-full md:w-3/4 rounded-r-md flex flex-row items-center pr-3">
       <input className="bg-white h-13 w-full pl-3 outline-none"
       placeholder="Search job title...."/>
       <button className='bg-blue-600 rounded-md h-10 w-20  text-white '>Search</button> 
       </div>
       </div>
       </div>
      </div>
    </>
  )
}

export default Herocontent

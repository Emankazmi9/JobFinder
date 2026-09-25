import { MapPin } from 'lucide-react';
import { Banknote } from 'lucide-react';
const Cardcontent = (props) => {
  return (
    <>
         <div className="flex flex-row gap-55 items-end">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center ml-7 mt-7 gap-2" >
          <MapPin size={16} color="#1d1b1b" strokeWidth={1.5} />
          <p>{props.location}</p>
        </div>
        <div className="flex flex-row items-center ml-7 gap-2">
          <Banknote size={16} color="#0d0c0c" strokeWidth={1.5} />
          <p>{props.salary}</p>
        </div>
      </div>
      <button className="bg-blue-600 h-10 w-25 text-white rounded-md">Apply</button>
     </div>
     </>
  )
}

export default Cardcontent

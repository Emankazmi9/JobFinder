import Footerbottom from "./Footerbottom"
import Footertop from "./Footertop"

const Footer = () => {
  return (
   <>
   <div className="bg-slate-900 h-70"  >
    
    <Footertop/>
  <hr className="border-slate-400 mt-10 mx-4 md:mx-10 lg:mx-18" />
    <Footerbottom/>
   </div>
   
   </>
  )
}

export default Footer

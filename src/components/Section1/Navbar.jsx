import Navlink from "./Navlink"
import Navlogo from "./navlogo"
import Navbutton from "./Navbutton"
const Navbar = () => {
  return (
   <>
     <nav className ="ml-18 h-15 bg-white flex  justify-between items-center ">
    <Navlogo/>
    <Navlink/>
    <Navbutton/>
     </nav>
   </>
  )
}

export default Navbar

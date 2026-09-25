import Navlink from "./Navlink"
import Navlogo from "./navlogo"
import Navbutton from "./Navbutton"
const Navbar = () => {
  return (
   <>
     <nav className="px-4 md:px-10 lg:px-18 h-15 bg-white flex justify-between items-center">
    <Navlogo/>
    <Navlink/>
    <Navbutton/>
     </nav>
   </>
  )
}

export default Navbar

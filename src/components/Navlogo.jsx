import logo from '../assests/logo.png'
const   Navlogo = () => {
  return (
    <>
      <div className="flex items-center ">
      <img  className="h-10  w-10  object-cover  " src={logo}></img>
      <h3 className="pl-4 font-bold text-4xl">Job<span className="text-indigo-600">Finder</span></h3>
      </div> 
      </>
  )
}

export default  Navlogo


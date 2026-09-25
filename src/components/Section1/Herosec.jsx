import Herocontent from "./Herocontent"
import Heroimg from "./Heroimg"

const Herosec = () => {
  return (
    <>
    <div className=" bg-blend-lighten bg-blue-50 h-85 w-full flex flex-row  justify-between ">
        <Herocontent/>
        <Heroimg/>
    </div>
    </>
  )
}

export default Herosec

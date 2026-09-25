import Centercard from "./Centercard"
import Centercontent from "./Centercontent"

const Center = () => {
  return (
    <>
    <div className=" w-full h-15">
      <Centercontent/>
      </div>
      <div className=" w-full h-full">
        <Centercard />
      </div>
      
    </>
  )
}

export default Center

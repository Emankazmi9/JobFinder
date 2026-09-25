
import Cardcontent from "./cardcontent"
import Cardimg from "./Cardimg"

const Card = (props) => {
   
  return (
    <>
      <div className="h-50 w-120 ml-18 border border-gray-400 rounded-md ">
     <Cardimg
     title={props.title}
     company={props.company}
     logo={props.logo}
     />
    <Cardcontent 
    location={props.location}
    salary={props.salary}
    /> 
    </div>
    </>
  )
}

export default Card

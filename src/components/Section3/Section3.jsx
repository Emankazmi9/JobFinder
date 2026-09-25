import Cantainer3 from "./Cantainer3"
import Jobsearch from '../../assests/Jobsearch.png'
import Thousandjob from '../../assests/Thousandjob.png'
import Applyeasy from '../../assests/Applyeasy.png'
const concontent = [
  {
    img: Jobsearch,
    heading: "Easy to Use",
    description1: "Find the right job with our",
    description2: "simple and fast search."
  },
  {
    img: Thousandjob,
    heading: "Thousands of Jobs",
     description1: "Explore jobs from top companies",
    description2: "around the world."
  },
  {
    img: Applyeasy,
    heading: "Apply Easily",
     description1: "Create your profile and apply",
    description2: "in just a few clicks."
  }
];
const Section3 = () => {
  return (
    <>
    <div className="w-full min-h-85 mt-18 bg-blue-50">
    <h1 className="font-bold text-3xl text-center pt-10 ">Why Choose JobFinder?</h1>
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
     {concontent.map((content)=>{
       return (
         <Cantainer3   img={content.img} heading={content.heading} description1 ={content.description1} description2 ={content.description2} />
       )
     })}
      
    </div>
    </div>
    
    </>
  )
}

export default Section3

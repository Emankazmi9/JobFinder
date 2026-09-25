import Card from "./Card"
import Frontend from '../assests/Frontend.png'
import Backend from '../assests/Backend.png'
import UI from '../assests/UI.png'
import React from '../assests/React.png'
const jobopening = [
  {
    title: "Frontend Developer",
    company: "ABC Company",
    logo: Frontend,
    location: "Lahore",
    salary: "$500 - $800"
  },
  {
    title: "Backend Developer",
    company: "XYZ Company",
    logo: Backend,
    location: "Karachi",
    salary: "$600 - $900"
  },
  {
    title: "UI/UX Designer",
    company: "Design Co.",
    logo: UI,
    location: "Lahore",
    salary: "$400 - $700"
  },
  {
    title: "React Developer",
    company: "Tech Ltd.",
    logo: React,
    location: "Islamabad",
    salary: "$700 - $1000"
  }
];
const Centercard = () => {
  return (
    <div className="flex flex-row gap-10 flex-wrap">
      {jobopening.map((job)=>{
        return(
        < Card key={job.title}  title = {job.title} company={job.company} logo={job.logo} location={job.location} salary={job.salary} />
        )
      })}
   
    
    </div>
  )
}

export default Centercard


const Cantainer3 = (props) => {
  return (
    <div className="h-50 w-60 mt-10">
        <div className='flex flex-col justify-center items-center'>
            <img className='h-20 w-20 rounded-full' src={props.img}></img>
            <h1 className='font-bold mt-5 text-lg'>{props.heading}</h1>
            <p className='text-center font-medium text-gray-600'>{props.description1} <br/> {props.description2}</p>
        </div>
       
    </div>
  )
}

export default Cantainer3

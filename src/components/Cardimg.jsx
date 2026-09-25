
const Cardimg = (props) => {
    
  return (
   <>
    <div className='flex flex-row mt-7 ml-7 gap-7'>
        <img className="  h-18 w-18 object-cover" src={props.logo}></img>
        <div >
          <h3 className='font-bold my-1 text-md'>{props.title}</h3>
          <p className='text-gray-500 font-medium'>{props.company}</p>
        </div>
      </div>
      
   </>
  )
}

export default Cardimg

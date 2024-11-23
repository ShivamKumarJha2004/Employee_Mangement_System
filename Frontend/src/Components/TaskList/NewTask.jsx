import React from 'react'

const NewTask = (props) => {
  return (
    <div
    className=" flex-shrink-0 h-[20rem] w-[300px] md:w-[350px] md:h-[20rem] rounded-xl bg-orange-300"
         >
           <div className="flex justify-between items-center p-5">
             <h3 className="bg-red-600 text-sm px-6 py-1 rounded">{props.category}</h3>
             <h4 className="font-bold whitespace-nowrap ml-1">
               {new Intl.DateTimeFormat("en-GB", {
                 year: "numeric",
                 month: "long",
                 day: "numeric",
               }).format(new Date(props.date))}
             </h4>
           </div>
           <h2 className="text-2xl font-semibold p-5">{props.tasktitle}</h2>
           <p className="text-sm p-5">{props.taskdescription}</p>
       <div className='mt-4 '>
       <button className="bg-indigo-500 w-[80%] rounded-lg ml-6 md:mb-10 py-2 px-2 transform transition duration-150 ease-in-out active:scale-95 hover:bg-indigo-600">
  Mark as Completed
</button>
 
       </div>

         </div>

  )
}

export default NewTask
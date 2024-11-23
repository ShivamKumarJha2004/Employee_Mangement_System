import React from 'react'

const CompleteTask = (props) => {
  return (
    <div>
         <div
       className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-emerald-400"
            >
              <div className="flex justify-between items-center p-5">
                <h3 className="bg-red-600 text-sm px-6 py-1 rounded">{props.category}</h3>
                <h4 className="font-bold">
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
            <button className='w-[90%] rounded-lg ml-3 mb-2 py-2 px-1 bg-green-600 text-lg font-semibold'>Completed</button>
            
          </div>

            </div>

    </div>
  )
}

export default CompleteTask
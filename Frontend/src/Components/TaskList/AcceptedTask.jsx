import React from 'react'

const AcceptedTask = (props) => {
  return (
    <div
       className=" flex-shrink-0 h-auto w-[300px] rounded-xl bg-pink-400"
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
          <div className='flex justify-between mt-4 '>
          <button className="bg-green-500 w-[50%] rounded-lg ml-3 mb-2 py-2 px-1 transform transition duration-150 ease-in-out active:scale-95 hover:bg-green-600">
  Mark as Completed
</button>
<button className="w-[40%] bg-teal-300 rounded-lg mr-2 mb-2 py-2 px-1 transform transition duration-150 ease-in-out active:scale-95 hover:bg-teal-400">
  Mark as Failed
</button>

          </div>

            </div>

 
  )
}

export default AcceptedTask
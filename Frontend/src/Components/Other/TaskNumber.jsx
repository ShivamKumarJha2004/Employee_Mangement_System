import React from 'react';

const TaskNumber = ({ taskCount }) => {
  return (
    <div className='flex justify-between relative bottom-[27rem] gap-8 px-10 flex-col md:flex-row '>
      <div className='md:w-[25%] w-[90%] bg-rose-500 text-center py-10 px-6 rounded-md'>
        <h2 className='text-2xl font-semibold'>{taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='md:w-[25%] w-[90%] bg-yellow-500 text-center py-10 px-6 rounded-md'>
        <h2 className='text-2xl font-semibold'>{taskCount.newtask}</h2>
        <h3 className='text-xl font-medium'>New Tasks</h3>
      </div>
      <div className='md:w-[25%] w-[90%] bg-green-500 text-center py-10 px-6 rounded-md'>
        <h2 className='text-2xl font-semibold'>{taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='md:w-[25%] w-[90%] bg-gray-500 text-center py-10 px-6 rounded-md'>
        <h2 className='text-2xl font-semibold'>{taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskNumber;

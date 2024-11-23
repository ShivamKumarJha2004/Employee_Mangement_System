import React from "react";
import AcceptedTask from "./AcceptedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({ tasks = [] }) => {
  console.log("Tasks received in TaskList:", tasks);

  return (
    <>
     <div
  id="tasklist"
  className="outline-none rounded-md bg-transparent border-2 border-green-600 h-[90vh]  md:h-[58vh] relative bottom-[25rem] w-[85%]  md:w-full flex flex-col md:flex-row md:overflow-x-scroll overflow-y-scroll gap-5 py-5 px-2 md:ml-0 mt-20 ml-5 "
>
  {tasks.map((ele, index) => {
    if (ele.status === "active") {
      return (
        <AcceptedTask
          key={`active-${index}`}
          date={ele.taskDate}
          tasktitle={ele.taskTitle}
          taskdescription={ele.taskDescription}
          category={ele.taskCategory}
        />
      );
    }
    if (ele.status === "newtask") {
      return (
        <NewTask
          key={`newtask-${index}`}
          date={ele.taskDate}
          tasktitle={ele.taskTitle}
          taskdescription={ele.taskDescription}
          category={ele.taskCategory}
        />
      );
    }
    if (ele.status === "completed") {
      return (
        <CompleteTask
          key={`completed-${index}`}
          date={ele.taskDate}
          tasktitle={ele.taskTitle}
          taskdescription={ele.taskDescription}
          category={ele.taskCategory}
        />
      );
    }
    if (ele.status === "failed") {
      return (
        <FailedTask
          key={`failed-${index}`}
          date={ele.taskDate}
          tasktitle={ele.taskTitle}
          taskdescription={ele.taskDescription}
          category={ele.taskCategory}
        />
      );
    }
    return null;
  })}
</div>

    </>
  );
};

export default TaskList;

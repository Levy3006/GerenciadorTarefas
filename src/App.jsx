import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./index.css";
function App() {
  const [tasks, SetTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudos sobre estrutura de dados e algorítimos",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Inglês",
      description: "Estudos sobre Inglês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Git e Github",
      description: "Estudos sobre versionamento de código",
      isCompleted: false,
    },
  ]);
  function ChangeStatus(taskID) {
    // this function checks if a button has the id passed as a parameter. if so, the
    // property isCompleted is changed.
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    // the function SetTasks updates the state of the task
    SetTasks(newTasks);
  }
  function DeleteTask(taskID) {
    SetTasks(
      (prevTasks) => prevTasks.filter((task) => task.id !== taskID) // Remove a tarefa com o id correspondente
    );
  }
  return (
    //1 - div covering all width and height screen, 2- color grey, 3- centralize div padding 6(24px)
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task Manager
        </h1>

        <AddTask />
        {
          //passing elements as props to Tasks (child component)
        }
        <Tasks
          tasks={tasks}
          ChangeStatus={ChangeStatus}
          DeleteTask={DeleteTask}
        />
      </div>
    </div>
  );
}

export default App;

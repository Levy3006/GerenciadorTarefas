function AddTask() {
  return (
    <div className="w-[500px] space-y-4 bg-slate-900 text-white p-2 rounded-md flex gap-2 flex-col rounded-md mb-5">
      <input
        className="rounded-md flex-col rounded-md p-1  text-slate-600"
        type="text"
        placeholder="Task Title"
      ></input>
      <input
        className="rounded-md flex-col rounded-md p-1  text-slate-600"
        type="text"
        placeholder="Description Title"
      ></input>
      <button className=" bg-blue-800 rounded-md px-3 py-1">Add Task</button>
    </div>
  );
}

export default AddTask;

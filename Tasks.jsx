 function addTask(e) {
    const randomInt = Math.floor(Math.random() * 1000);
    setupdatedTasks([...updatedTasks, { id: randomInt, text: task }]);
    setTask("");
    if(task === " ")
    {
      return " task cant be empty"
    }
  }

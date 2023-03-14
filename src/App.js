import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';

function Todo() {
  const[tasks,setTasks] = useState([                                 //tasks
    {taskName:"get bread",
    isChecked:false},
    {taskName:"go shopping",
    isChecked:false},
    {taskName:"learn js",
    isChecked:false}
  ])

  const[filterTextValue,updateFilterValue]= useState("All")     //filter tanımı
   const filteredTaskList = tasks.filter((task)=>{                // filtrelenmiş sonuçlar
    if(filterTextValue==="All"){
      return task;
    }
    else if (filterTextValue ==="Active"){
      return task.isChecked === false
    }
    else{
      return task.isChecked === true
    }
  })

  const onFilterBtnCliked = (filterBtn)=>{                      //filtre buton click handler
    updateFilterValue(filterBtn)
  }

  const onDeleteSelectedValues = (deleteValue) =>{              //value silme
    let itemsCopy =[...tasks]
    itemsCopy.splice(deleteValue,1)
    setTasks(itemsCopy)
  }

  const onDeleteCompletedValues = () =>{
    const completedTasks = tasks.filter((task) =>!task.isChecked)
    setTasks(completedTasks)
  }
  return (
    <div className="App">
      <section className='to-do'>
          <Header addTask={setTasks} tasks={tasks}/>
          <List deleteValueSelected={onDeleteSelectedValues} clearCompleted={onDeleteCompletedValues} tasks={filteredTaskList}/>
          <Footer filterValueSelected={onFilterBtnCliked}/>
      </section>     
    </div>
  );
}

export default Todo;

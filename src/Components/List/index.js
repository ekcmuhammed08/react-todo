import React, { useState, useEffect } from 'react'

function List({clearCompleted,tasks,deleteValueSelected}) {

    const [selectAll,setSelectAll] = useState(false)
    const [newTaskList,setNewTaskList] = useState(tasks)    //taskleri yeni bir listeye al
    const [changeStyle,setChangeStyle] = useState({})       //checked olunca style güncelle

    useEffect(() => {                                       //tasks değişince newtasklisti değişince güncelle
      setNewTaskList(tasks)
    }, [tasks])
    
    useEffect(() => {                                       //newtasklist değişince:
      const newStyle = {}                                   
      newTaskList.forEach((t,i) => {                        //checked ise styleı güncelle
        newStyle[i] = t.isChecked ? "completed" : ""
      });
      setChangeStyle(newStyle)
    }, [newTaskList])
    

    const handleCheck = (taskIndex)=> {                      //check handler
        const newTasks = [...newTaskList]
        newTasks[taskIndex].isChecked =  !newTasks[taskIndex].isChecked
        setNewTaskList(newTasks);
        console.log(" newTaskList" + JSON.stringify(newTaskList,null," "))
    }

    const deleteTask = (i,name)=>{
        deleteValueSelected(i)
    }

    const setAllChecked = ()=>{
        setSelectAll(!selectAll)
        const newTasks = [...newTaskList]
        newTasks.forEach((task)=>{
            if(!selectAll){
                task.isChecked=true
            }
            else task.isChecked=false
        })
        setNewTaskList(newTasks);
    }
  return (
    <div className='list'>
        <section>
            <div className="setandclear">
                <span className='set-all'>
                    <input className="toggle-all" type="checkbox" checked = {selectAll} onChange={setAllChecked}/>
                    <label htmlFor="toggle-all">
                        <div className="">
                        <svg height="35px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polyline points="7.25 14.25,2.75 14.25,2.75 1.75,13.25 1.75,13.25 9.25"></polyline> <path d="m9.75 12.75 1.5 1.5 3-2.5m-8.5-4h4.5m-4.5 3h1.5m-1.5-6h4.5"></path> </g></svg>
                        </div>
                    </label>
                    <text className='tasks-length'>({tasks.length})</text>
                </span>
                <div className="tooltip">
                    <button className='tooltip' onClick={clearCompleted}>
                        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" width="32px" height="32px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path class="st0" d="M168.256,86.263c23.815,0,43.128-19.304,43.128-43.128C211.384,19.312,192.071,0,168.256,0 c-23.832,0-43.143,19.312-43.143,43.135C125.112,66.959,144.424,86.263,168.256,86.263z"></path> <path class="st0" d="M389.288,132.104v-0.851c0-12.78-10.352-23.132-23.131-23.132H171.86c-46.82,0-88.396,15.612-98.772,67.517 L41.403,307.916c-2.228,9.962,4.042,19.829,14.005,22.058c9.946,2.219,19.813-4.05,22.034-14.005l33.332-88.133l8.626,262.282 c0,12.086,9.795,21.882,21.874,21.882c12.094,0,21.89-9.795,21.89-21.882l8.698-156.413l8.681,156.413 c0,12.086,9.802,21.882,21.882,21.882c12.087,0,21.89-9.795,21.89-21.882l12.31-316.75l132.709-18.357 C380.765,153.429,389.288,143.65,389.288,132.104z"></path> <rect x="336.497" y="225.645" transform="matrix(-0.7648 0.6443 -0.6443 -0.7648 820.1215 192.6837)" class="st0" width="76.784" height="40.794"></rect> <path class="st0" d="M273.918,320.807l13.097,167.059c1.201,13.662,12.643,24.134,26.37,24.134H431.58 c13.71,0,25.16-10.471,26.37-24.134l13.096-167.059H273.918z M328.671,488.28c-4.298,0.254-7.973-3.024-8.235-7.305l-7.417-122.269 c-0.255-4.289,3.016-7.973,7.305-8.244c4.289-0.254,7.973,3.016,8.243,7.305l7.401,122.27 C336.23,484.333,332.96,488.01,328.671,488.28z M380.264,480.498c0,4.313-3.485,7.798-7.782,7.798 c-4.297,0-7.782-3.486-7.782-7.798V358.237c0-4.297,3.485-7.782,7.782-7.782c4.298,0,7.782,3.486,7.782,7.782V480.498z M424.529,480.975c-0.254,4.281-3.938,7.559-8.226,7.305c-4.29-0.27-7.56-3.947-7.304-8.243l7.4-122.27 c0.262-4.289,3.946-7.558,8.243-7.305c4.289,0.271,7.559,3.955,7.289,8.244L424.529,480.975z"></path> </g> </g></svg>
                    </button>
                    <span className='tooltiptext'>Clear Completed Tasks</span>
                </div>
            </div>
            <ul className="todo-list">
			{newTaskList && newTaskList.map((task,i)=>(
                <li key={i} className={changeStyle[i]}>
                    <div className='view'>
                        <div className="">
                        <input id={`task-${i}`} className='toggle' type='checkbox' checked={task.isChecked} onChange={() => handleCheck(i)}/>
                        <label className='task' htmlFor={`task-${i}`}>{task.taskName}</label>
                        </div>
                        <button className='button' onClick={() => deleteTask(i,task.taskName)}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="32" viewBox="7 0 75 75" xmlSpace="preserve">
                            <g style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" >
                                <path d="M 68.842 90 H 21.158 c -4.251 0 -7.696 -3.446 -7.696 -7.696 v -52.09 h 63.077 v 52.09 C 76.538 86.554 73.092 90 68.842 90 z" style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '#BC3C3C', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                                <path d="M 78.321 22.213 H 11.679 c -2.209 0 -4 -1.791 -4 -4 s 1.791 -4 4 -4 h 66.643 c 2.209 0 4 1.791 4 4 S 80.53 22.213 78.321 22.213 z" style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '#BC3C3C', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                                <path d="M 57.815 22.213 h -25.63 c -2.209 0 -4 -1.791 -4 -4 V 7.696 C 28.185 3.453 31.637 0 35.881 0 h 18.238 c 4.244 0 7.696 3.453 7.696 7.696 v 10.517 C 61.815 20.422 60.024 22.213 57.815 22.213 z M 36.185 14.213 h 17.63 V 8 h -17.63 V 14.213 z" style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '#BC3C3C', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                                <path d="M 54.784 78.235 c -2.209 0 -4 -1.791 -4 -4 V 44.976 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 29.259 C 58.784 76.444 56.993 78.235 54.784 78.235 z" style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '#FFFFFF', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                                <path d="M 35.216 78.235 c -2.209 0 -4 -1.791 -4 -4 V 44.976 c 0 -2.209 1.791 -4 4 -4 s 4 1.791 4 4 v 29.259 C 39.216 76.444 37.425 78.235 35.216 78.235 z" style={{stroke: "", strokeWidth: 1, strokeDasharray: "", strokeLinecap: "", strokeLinejoin: "", strokeMiterlimit: 10, fill: '#FFFFFF', fillRule: "", opacity: 1,}} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                            </g>
                        </svg>
                        </button>
                    </div>
                </li>
            ))}
		</ul>
        </section>

    </div>
  )
}

export default List
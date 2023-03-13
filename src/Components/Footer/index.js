import React, { useState, useEffect } from 'react'
import List from '../List'

function Footer({tasks,filterValueSelected,clearCompleted}) {
    const buttonList = [
        {name:"All",
        selected:false
        },
        {name:"Active",
        selected:false
        },
        {name:"Completed",
        selected:false
        }]
    const[btnList,setBtnList] = useState(buttonList)
    const[changeStyle,setChangeStyle] = useState()

    useEffect(() => {                                      //btnList değişince:
        const newStyle = {}                                   
        btnList.forEach((b,i) => {                        //selected ise styleı güncelle
          newStyle[i] = b.selected ? "selected" : ""
        });
        setChangeStyle(newStyle)
      }, [btnList])

    const handleCheck = (clickedBtn,taskIndex)=>{          //check handler
        const newTasks = [...btnList]                       
        newTasks.forEach((j,i)=>{                          //buttonlist. selected i güncelle
            if(i===taskIndex){
                j.selected = true;
           }
           else{
                j.selected =false
           }
        })
        setBtnList(newTasks)
        filterValueSelected(clickedBtn.name)                //buton filtresi
        console.log(clickedBtn.name)
    }    

  return (
    <div>
        <footer className='footer'>
            <span className='menu'>
                <ul>
                    {
                        btnList.map((btn,i)=>
                        <li key={i}>
                            <button className='filter-button' href="" onClick={()=>handleCheck(btn,i)}>{buttonList[i].name}</button>
                        </li>
                    )
                    }
                </ul>
            </span>
        </footer>
    </div>
  )
}

export default Footer
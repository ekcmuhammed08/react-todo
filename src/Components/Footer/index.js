import React, { useState } from 'react'


function Footer({filterValueSelected}) {
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

    const handleClick = (clickedBtn,taskIndex)=>{          //check handler
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
    }    

  return (
    <div>
        <footer className='footer'>
            <span className='menu'>
                <ul className='footer-buttons'>
                    {
                        btnList.map((btn,i)=>
                        <li key={i}>
                            <button className='filter-button' href="" onClick={()=>handleClick(btn,i)}>{buttonList[i].name}</button>
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
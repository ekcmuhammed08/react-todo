import {useState, useEffect} from 'react'

const initialFormValues = {isChecked:false, taskName:''};   //form values tanımı

function Header({tasks,addTask}) {
    const[form,setForm] = useState(initialFormValues)        //form setform

    useEffect(() => {
      setForm(initialFormValues)                            //tasks değişince güncelle
    }, [tasks])

    const onChangeInput = (e) =>{                           //inputu forma yaz
        setForm({...form, [e.target.name] :e.target.value})
    }    

    const onSubmit = (e) =>{                                //task submitle
        e.preventDefault();
        if(form.taskName === ""){
            return false;
        }
        addTask([...tasks,form])
    }
    
  return (
    <div>
        <header>
        <div className="header">
                to - do
        </div>
        <div className="add-task">
            <form onSubmit={onSubmit} className="input-form" >
                <input type="input" name='taskName' value={form.taskName} onChange={onChangeInput} autoFocus/>
                <button type="submit" className='add-button'>
                <svg className='plus-svg' fill="#F09440" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 349.03 349.031" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> 
                            <path d="M349.03,141.226v66.579c0,5.012-4.061,9.079-9.079,9.079H216.884v123.067c0,5.019-4.067,9.079-9.079,9.079h-66.579 c-5.009,0-9.079-4.061-9.079-9.079V216.884H9.079c-5.016,0-9.079-4.067-9.079-9.079v-66.579c0-5.013,4.063-9.079,9.079-9.079 h123.068V9.079c0-5.018,4.069-9.079,9.079-9.079h66.579c5.012,0,9.079,4.061,9.079,9.079v123.068h123.067 C344.97,132.147,349.03,136.213,349.03,141.226z"></path> </g> </g></svg>
                </button>
            </form>
        </div>
        </header>
    </div>
  )
}

export default Header
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ButtonView from './ButtonView';
import Todolist from './Todolist';
function Addtodo() {

    const [todos, settodos] = useState([{title:'', id: 1},{title:'', id: 2}])
    const [task, settask] = useState({title:'', id:''})
  const handleChange=(e)=>{
      //  console.log('i am in handle change')
        settask({title:e.target.value,id:uuidv4()})

    }
 const handleSubmit=(e)=>{
     e.preventDefault();
      //  console.log('i am in handle submit')
        settodos([...todos, task])
        e.target.firstChild.value='';

    }
    //console.log(task)
     console.log(todos)
    return (
        <div>
        <ButtonView text='Add' color='Aquamarine'/>
            <Todolist todolist = {todos}/>
        </div>
    )
}

export default Addtodo
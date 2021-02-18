import React from 'react'
import Todolist from '../components/Todolist';

export default {
    title: 'AddList',
    component: Todolist
}
export const AddList1 = () => <Todolist todolist={[{title:'d',id:'s'}]} />
// export const AddList2 = () => <Todolist text='AddList'/>
// export const AddList3 = () => <Todolist text='AddEnd'/>
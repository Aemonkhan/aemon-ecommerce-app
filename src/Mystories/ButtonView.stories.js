import React from 'react'
import ButtonView from '../pages/ButtonView';

export default {
    title: 'AddButton',
    component: ButtonView
}
export const mybtn1 = () => <ButtonView text='Add' color='lightgrey'/>
export const mybtn2 = () => <ButtonView text='AddTo' color ='lightblue' />
export const mybtn3 = () => <ButtonView text='AddList' color='pink' />
<<<<<<< HEAD
import {useRef} from 'react'
export default function CarDetails({info}) {
    const targetModel= useRef()
    const targetColor= useRef()
    const targetYear= useRef()
    return (
        <>
        <input ref={targetModel} onFocus={()=>{targetModel.current.value=''}} type='text' defaultValue={info.model}></input>
        <input ref={targetYear}  onFocus={()=>{targetYear.current.value=''}} type='number' defaultValue={info.year}></input>
        <input ref={targetColor}  onFocus={()=>{targetColor.current.value=''}} type='text' defaultValue={info.color}></input>
=======
import { useRef } from 'react'
export default function CarDetails({ info }) {
    const targetModel = useRef()
    const targetColor = useRef()
    const targetYear = useRef()
    return (
        <>
            <input ref={targetModel} onFocus={() => { targetModel.current.value = '' }} type='text' defaultValue={info.model}></input>
            <input ref={targetYear} onFocus={() => { targetYear.current.value = '' }} type='number' defaultValue={info.year}></input>
            <input ref={targetColor} onFocus={() => { targetColor.current.value = '' }} type='text' defaultValue={info.color}></input>
>>>>>>> 61b8c1c1afc6905a9ed5be7a9ca252390e048646
        </>
    )
}
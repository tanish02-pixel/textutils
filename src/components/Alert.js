import React from 'react'


export default function  Alert(props){
    

    //to make S capital in success...!! use lower.slice(1) becoz it will print uccess and S will be capital by other method...!
   const capitalise = (word)=> {
   const lower = word.toLowerCase();
   return lower.charAt(0).toUpperCase() + lower.slice(1);
   }



    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` } role="alert">
        <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
        </div>

    )
}
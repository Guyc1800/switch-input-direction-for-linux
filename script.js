document.onkeydown=(event)=>{
    let focus_el =document.querySelectorAll("*[contenteditable=true]:focus,input:focus,textarea:focus")
    if(focus_el.length!==0){
        if((event.code==="ControlRight"&&event.shiftKey===true)||
            (event.code==="ShiftRight"&&event.ctrlKey===true)){
            focus_el[0].style.direction="rtl"
        }
        if((event.code==="ControlLeft"&&event.shiftKey===true)||
            (event.code==="ShiftLeft"&&event.ctrlKey===true)){
            focus_el[0].style.direction="ltr"
        }
    }
}
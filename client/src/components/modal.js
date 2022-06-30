import design from "./modal.module.css"
import {useEffect, useRef, useState} from "react"
import {createMethod,updateMethod} from "../method/method"



const Modal =({toggle_modal_visibility,Modal_text,invoke_point,initial_data_received}) =>{

    const [isSuccess,setIsSuccess] = useState(false)
    const [warn,setWarn] = useState([])

    const titleRef= useRef((invoke_point[0] ==="update")?initial_data_received.title:"") 
    const bodyRef = useRef((invoke_point[0] ==="update")?initial_data_received.body:"")

    const submitHandler =(e) =>{
        e.preventDefault()
        const titleValue = titleRef.current.value
        const bodyValue = bodyRef.current.value

        if(bodyValue === "" || titleValue === ""){

            if(bodyValue === "" && titleValue === ""){
                bodyRef.current.value=""
                titleRef.current.value =""
                setWarn(["all","Enter valid values"])
            }
            else if(bodyValue === ""){
               setWarn(["1","Please enter a valid title"])
            }
           else{
            setWarn(["2","Please enter a valid body"])
           }
        }
        else{
            const created_body = {
                title:titleValue ,
                body:bodyValue,
            }
            if(invoke_point[0] === "add"){
                createMethod(toggle_modal_visibility,created_body,setIsSuccess)
            }
            else{
                updateMethod(toggle_modal_visibility,created_body,setIsSuccess,invoke_point[1])
            }
    

        }
    }

    return(
        <>
      <div className={design.bg} >
                <div className={design.container}>
                    <div className={design.header}>
                        <big>{Modal_text[0]}</big>
                        <button onClick={() =>toggle_modal_visibility()} className={design.btn}><i className=" fa fa-times" ></i></button>
                    </div>
                    <hr />
                    <div className={design.input}>
                        {isSuccess
                        ?<div className={design.icon_div_success}><i className=" fa fa-check-circle" ></i></div>
                        :<form  onSubmit={submitHandler}  >
                        <div >
                            <label htmlFor="title">Title:</label>
                            <input name="title" ref={titleRef} type="text" placeholder="Enter  Title"  />
                            {(warn[0] === "2" ||warn[0] ==="all")?<small className={design.warn}>{warn[1]}</small>:""}
                            </div>

                            <div className={design.input_div_one}>
                            <label htmlFor="title">Body:</label>
                            <textarea ref={bodyRef}  name="body"cols="30" rows="4" placeholder="Enter Body"  >{bodyRef.current.value}</textarea>
                            {(warn[0] === "1" || warn[0]  ==="all")?<small className={design.warn}>{warn[1]}</small>:""}
                        </div>
                        <div className={design.btns}>
                            <button  >{Modal_text[1]}</button>
                            <button type="reset">reset</button>
                        </div>
                        </form>
                        }
                    </div>


                </div>
        </div>

        </>

    )
}
export default Modal
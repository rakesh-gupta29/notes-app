import design from "./item.module.css"
import {deleteMethod} from "../method/method"
const Item =({toggle_modal_visibility,set_modal_text,invoke_point,data}) =>{
    const handleEditBtn = () =>{
        set_modal_text(["Edit Item","Update"])
        toggle_modal_visibility()
        invoke_point(["update",data._id,"/patch"])
    }
    const handledeleteItem =() =>{
        deleteMethod(data._id)
        }
    return(
        <>
        <section className={design.master}>
            <div className={design.title}>{data.title}</div>
            <div className={design.divider}/>
            <article className={design.body}>
                <p>{data.body}</p>
            </article>
            <div className={design.btn_div}>
                <button onClick={handleEditBtn}><i className=" fa fa-pen" ></i></button>
                <button onClick={handledeleteItem }><i className=" fa fa-trash" ></i></button>
            </div>
        </section>
        </>
    )
}

export default Item
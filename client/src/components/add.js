import design from  "./item.module.css"

const Add =({toggle_modal_visibility,set_modal_text,invoke_point}) =>{
    const handleAddBtn = () =>{
        set_modal_text(["Add Item","Create"])
        toggle_modal_visibility()
        invoke_point(["add","add","/"])


    }
    return(
        <>
        <div className={design.master}>
            <div className={design.title}>
                Create......
            </div>
            <div className={design.divider}></div>
            <div className={design.empty} onClick={handleAddBtn}>
                <div className={design.centering}>
                    <div className={design.adding_sign}>+</div>
                    <h5>ADD ITEMS</h5>
                </div>

            </div>
        </div>
        </>

    )
}
export default Add
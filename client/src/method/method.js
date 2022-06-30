
const timing =(func,time) =>{
    setTimeout(func,time )
}
export const createMethod =(toggle_modal_visibility,created_body,setIsSuccess) =>{
    fetch("https://thisisworking1999.herokuapp.com/post",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(created_body)
    })
    .then(res => res.json())
    .then(data => console.log("success"))
    .then(() =>{
        setIsSuccess(true)
        timing(toggle_modal_visibility,700)
    }
    )
    .catch((error) =>alert("error"))
}

export const updateMethod =(toggle_modal_visibility,created_body,setIsSuccess,target_id) =>
{
    fetch("https://thisisworking1999.herokuapp.com/update",{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            target_id:target_id,
            ...created_body
        }),
    })
    .then(() =>{
        setIsSuccess(true)
        timing(toggle_modal_visibility,700)
    })
    .catch((error) =>alert("An error Occured"))


}
export const deleteMethod =(target_id) =>
{
    fetch("https://thisisworking1999.herokuapp.com/delete",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            target_id:target_id,
        }),
    })
    .catch((error) =>alert("error occured"))
}


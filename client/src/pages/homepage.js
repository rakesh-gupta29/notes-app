import Items from "../components/item"
import Add from "../components/add"
import Modal from "../components/modal"
import design from "./homepage.module.css"
import { useEffect, useState } from "react"

const Homepage =() =>{
    const [loading,setLoading] = useState(true)
    const [dataReceived,setDataReceived]= useState([])
    const [isModalVisible,setIsModalVisible] = useState(false)
    const [dynamic_modal_text,setDynamic_modal_text] = useState([])
    const [invoke_point,setInvokePoint] = useState([])
    const [initial_modal_data,setInitialModalData] = useState(null)


    const determine_invoke_point =([para,data_passed]) =>{
        if(para === "update"){
            setInitialModalData(dataReceived.find(item => item._id === data_passed))
            setInvokePoint([para,data_passed])
        }
        else if(para === "add"){
            setInvokePoint([para,data_passed])
        }
    }

    useEffect( () =>{
        fetch("https://thisisworking1999.herokuapp.com/")
        .then(res => res.json())
        .then(data =>{setDataReceived(data.data);setLoading(false)} )

    },[dataReceived])
    const set_modal_text = (data) =>[
        setDynamic_modal_text(data)
    ]
    
    const Modal_open_func =() =>{
        setIsModalVisible(prev => !prev)
    }


const handleDeleteAll=() =>{
    fetch("https://thisisworking1999.herokuapp.com/deleteall",{method:"DELETE"})
    .catch(err => alert("An error occured"))
}
   
       
    

    return(
        <>
        <div className={design.btn_top}><button  onClick={handleDeleteAll}>Delete All</button>
        </div>
            {loading?
            <div className={design.loading}><center>Loading ...</center></div>
            :<div className={design.container}>
                {dataReceived.map(item => 
                <Items
                data={item}
                toggle_modal_visibility ={Modal_open_func}
                set_modal_text = {set_modal_text}
                invoke_point = {determine_invoke_point}

                 key={item._id}
                 />)}

                 <Add
                 toggle_modal_visibility ={Modal_open_func}
                 set_modal_text = {set_modal_text}
                 invoke_point = {determine_invoke_point}
                 initial_modal_data={initial_modal_data}


                 
                 />

                {isModalVisible
                ?
                    <Modal
                    toggle_modal_visibility ={Modal_open_func}
                    Modal_text={dynamic_modal_text}
                    invoke_point={invoke_point}
                    initial_data_received = {initial_modal_data}
                    />
                :""}
                </div>}
        </>

    )
}
export default Homepage



import { useState, useEffect } from "react";
import axios from "axios";
import './Listofuser.css'

const Listofuser = () => {
    const [listOfUser, setlistOfUser] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setlistOfUser(response.data))
            .catch(error => console.log(error))
    }, [])

    

    return (
        <div className='card'>
            {listOfUser.map(list => (
                <div className='card2'>
                   
                   <img src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' width='100' height='100'/>
                    name:{list.name}<br/>   
                   email: {list.email}<br/><br/>
                  <button> position </button>
       </div>
               
            ))}
        </div>
    )
}

export default Listofuser;
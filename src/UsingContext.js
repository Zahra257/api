import {UserContext} from './Context/UserContext'
import {useState} from 'react'
import User from './User'
import ChangeUser from './ChangeUser'
const UsingContext = () => {

  const [user, setUser] = useState({name: 'Zakarya'})
//useContext
  return (
    <div className="UsingContext"> 
      <UserContext.Provider value={{user,setUser}}>
        <User/>
        <ChangeUser/>
      </UserContext.Provider>
    </div>
  );
}

export default UsingContext
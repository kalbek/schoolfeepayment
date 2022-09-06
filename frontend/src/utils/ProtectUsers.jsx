import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectUsers = () => {
  const { user } = useSelector((state) => state.auth)
  let role;
  if (user)
    role = Object.values(user);
  const location = useLocation();
  return (
    <>
      {   
        !user 
        ? <Navigate to="/login" />
        : user && role[3] === 2001  
            ? <Outlet/> 
            : <Navigate to="/unauthorized" />
       }
    </>
  )
}

export default ProtectUsers
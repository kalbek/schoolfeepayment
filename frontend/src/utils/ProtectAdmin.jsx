import {Outlet, Navigate, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectAdmin = () => {
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
          : user && role[3] === 5150  
              ? <Outlet/> 
              : <Navigate to="/unauthorized" />
        }
      </>
  )
}

export default ProtectAdmin
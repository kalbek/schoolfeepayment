import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Utilities/Progress/Spinner'
import { reset, getSchools } from '../features/schools/schoolSlice'
import {  getUsers } from '../features/auth/authSlice'
import UserItem from '../components/Items/UserItem'
function AdminDashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, users } = useSelector((state) => state.auth)
  const { schools, isLoading, isError, message} = useSelector((state) => state.schools)
  useEffect(() => {
    if (isError){
      if (!user) {
      }
    }
    // if (!user) {
    //   navigate('/login')
    // }
    if (user) {
    dispatch(getSchools())
    dispatch(getUsers())
  }
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

    if (isLoading){
      return <Spinner/>
    }
    
    return (
      <> 
      <section>
        {user ? 
          // (<h4 className='user-name'>Welcome Admin</h4>) : <></>
          (<h4 className='user-name'>Welcome { user && user.name.charAt(0).toUpperCase()+ user.name.slice(1)}</h4>) : <></>
        }
        <h1>Admin Dashboard</h1>
      </section>
      <section className="content">
        {user && user.length > 0 ? (
          <div className="schools">
            {users.map((user) => (
                <UserItem key={user._id} user={user}/>
            ))}
          </div>
        ) : (<h3>No users found</h3>)}
      </section> 
    </>
  )
}

export default AdminDashboard
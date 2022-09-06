import { useDispatch} from 'react-redux'
import { deleteSchool} from '../../features/schools/schoolSlice'
import {FaEdit, FaTrash, FaCalendar} from 'react-icons/fa'
function UserItem({user}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <div className='created_at'>
          <FaCalendar/>{new Date(user.createdAt).toLocaleDateString('en-US')}
        </div>
        <div className="school-detail">
          <div className="text-det">
        <h4> User: {user.name}</h4>
          </div>
        </div>
        <button className="close" onClick={() => dispatch(deleteSchool(user._id))}><FaTrash />delete</button>
        <button className="edit"><FaEdit/>edit</button>
</div>
  )
}
 
export default UserItem
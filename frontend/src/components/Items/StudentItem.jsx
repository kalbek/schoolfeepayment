import { useDispatch } from "react-redux";
import { deleteStudent } from "../../features/students/studentSlice";

function StudentItem({ student }) {
  const dispatch = useDispatch();
  return (
    <div className="student">
      <div>
        {new Date(student.createdAt).toLocaleDateString("en-US") +
          `type is: ${typeof student}`}
      </div>
      <h2>First Name: {student.fname}</h2>
      <h2>Last Name: {student.lname}</h2>
      <h2>Grade: {student.grade}</h2>
      <h2>Section: {student.section}</h2>
      <button
        onClick={() => dispatch(deleteStudent(student._id))}
        className="close"
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
}

export default StudentItem;

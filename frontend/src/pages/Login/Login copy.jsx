import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [someMessage, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      setMessage(message)
    }
    if (isSuccess || user) {
      if (user.roles === 5150)
        navigate('/admindashboard')
      else {
        navigate('/')
      }
    }
    dispatch(reset())
  }, [ user, isError, isSuccess, message, navigate, dispatch])

  // validate email
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  },[email])

  // validate password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password))
  },[password])

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1 className='gradient__text' >
          <FaSignInAlt size={36} color="#AE67FA" /> 
          Sign In
        </h1>
        {/* <p>Please Login</p> */}
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className={validEmail ? "valid" : "invalid"}
              id={email ? "email" : "idle-email"}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>
          <div className="form-group">
            <input
              className={validPwd ? "valid" : "invalid"}
              id={password ? "password" : "idle-password"}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="password"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
          </div>
          <p
            id="errMsg"
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive">
            {" "}
            {someMessage}{" "}
          </p>
          <div className='form-group'>
            {/* <button type='submit' className='btn btn-block'> */}
            <button type='submit'  className={
              !validEmail || !validPwd
                ? "btn-signup"
                : "btn-valid"
            }> Log In </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
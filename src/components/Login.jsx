import { useInput } from '../hooks/useInput'
export default function Login() {
  //we can manage inpust useState
  // or useRef
  // or formData
  const { value: emailValue, hasError: isEmailError, handleOnChangeValue: handleChangeEmail, handleOnBlur: handleBlurEmail} = useInput('')
  const { value: passwordValue, hasError: isPasswordError, handleOnChangeValue: handleChangePassword, handleOnBlur: handleBlurPassword} = useInput('')
  const handleSubmit = (e) => { 
    e.preventDefault()
    //for formDate 3red way logic
    // const formData = new FormData(e.target);
    // const checkbox = formData.getAll('ob')
    // const data = Object.fromEntries(formData.entries())
    // data.checkbox = checkbox
    // e.target.reset()
  }
  const handleChangeValue = (key, value) => { 
    setEnteredValue((prevValue) => ({...prevValue, [key]: value}))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={emailValue} onChange={handleChangeEmail} onBlur={handleBlurEmail} />
          {isEmailError && <p className="error">Email is invalid</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={passwordValue} onChange={handleChangePassword} onBlur={handleBlurPassword}/>
          {isPasswordError && <p className="error">Password is invalid</p>}
        </div>
        <div>
          <fieldset>
            <input type="checkbox" id="ob1" name="ob" value="obj1" />
            <input type="checkbox" id="ob2" name="ob" value="obj2" />
            <input type="checkbox" id="ob3" name="ob" value="obj3" />
          </fieldset>
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import { useLogin } from "../src/Hooks/HookLogin"
import { Form } from 'react-router-dom'

const Login  = () => {
    const {data, HandleChange, onSubmit, FormLogin} = useLogin();
    return(
        <div>
            <h2>LOGIN</h2>
            <Form className="page" method="post" onSubmit={onSubmit}>
                <label>Email:
                    <input type="email" 
                    name="email"
                    value={FormLogin.email}
                    onChange={HandleChange} />
                </label>
                <label>
                Password:
                <input type="password"
                name="password"
                value={FormLogin.password}
                onChange={HandleChange}
                required />
                </label>
                <br />
                <button type="submit" >Ingresar</button>
                {data && <p>{data}</p>}
            </Form>
        </div>
    )
}

export default Login
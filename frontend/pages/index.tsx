import { useRegister } from "../src/Hooks/HookRegister";
import {  Form, useNavigation, Outlet } from "react-router-dom";


export default function Index  (): React.JSX.Element  {
const { data, handleChange, onSubmit, formValues } = useRegister();

function SubmitButton() {
  const navigation = useNavigation();

  const text =
    navigation.state === "submitting"
      ? "Registrando..."
      : navigation.state === "loading"
      ? "Registrado!"
      : "Adelante!";

  return <button type="submit">{text}</button>;
}
    return (
        <div>
          <Outlet />
          <h2>Register</h2>
          <Form className="page" method="post" onSubmit={onSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <SubmitButton />
          </Form>
          {data && <p>{data}</p>}
        </div>
      );
    };
    

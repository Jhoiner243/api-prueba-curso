import React, { useState, useEffect, FormEvent } from "react";

// Define la interfaz para los datos del formulario
interface FormRegisterProps {
  name: string;
  email: string;
  password: string;
}

const FormRegisterComponent = (): React.JSX.Element => {
  // Estado para los mensajes del servidor
  const [data, setData] = useState<string>("");
  // Estado para los valores del formulario
  const [formValues, setFormValues] = useState<FormRegisterProps>({
    name: "",
    email: "",
    password: "",
  });

  // Hook para manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setData(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch inicial que puedes modificar según sea necesario
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/register", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setData(data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Register</button>
      </form>
      {data && <p>{data}</p>}
    </div>
  );
};

export default FormRegisterComponent;

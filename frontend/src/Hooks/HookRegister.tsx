import React, { useState, useEffect, FormEvent } from "react";
import {  useNavigate } from "react-router-dom";

// Define la interfaz para los datos del formulario
interface FormRegisterProps {
  name: string;
  email: string;
  password: string;
}



export const useRegister = () => {
  // Estado para los mensajes del servidor
  const [data, setData] = useState<string>("");
  const navigate = useNavigate();
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
      navigate('/Login')
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
  return {data, onSubmit, handleChange, formValues}
}

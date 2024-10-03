import { useState,   FormEvent } from "react";

interface LoginProps {
    email: string;
    password: string
}

 export const useLogin = () =>{
    const [data, setData] = useState<string> ("")
    const [FormLogin, setFormLogin] = useState<LoginProps>({
        email: "",
        password: ""
    });

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormLogin({
            ...FormLogin,
            [name]: value,
        })
    }
  
        const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> =>{
            e.preventDefault();
            
            try{
            const res = await fetch("http://localhost:3000/api/v1/login",{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(FormLogin),
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

        
        
    return {data, onSubmit, HandleChange, FormLogin}
}

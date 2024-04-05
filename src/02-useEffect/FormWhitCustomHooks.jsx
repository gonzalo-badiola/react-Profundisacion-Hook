import { useEffect } from "react";
import { useForm } from "../hooks/useForm";




export const FormWhitCustomHook = () => {

    const { formState,  onImputChange, username, email, password, onResetForm } = useForm( {
        username: "",
        email: "",
        password: "",
        
      })
   
     return (
    <>
    <h1>Formulario con custom Hook</h1>
    <hr/>

    <input 
    type="text" 
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={ onImputChange }
    />

<input 
    type="email" 
    className="form-control mt-2"
    placeholder="gonzalo@google.com"
    name="email"
    value={email}
    onChange={ onImputChange }
    />

<input 
    type="password" 
    className="form-control mt-2"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={ onImputChange }
    />

    <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}

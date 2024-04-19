import "./ForgotPassword.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordUser } from "../services/user.service";
import { useForgotPasswordError } from "../hooks";

export const ForgotPassword = () => {
    // ESTADOS
    const { handleSubmit, register } = useForm();
    const [res, setRes] = useState({});
    const [send, setSend] = useState(false);
    const [forgotOk, setForgotOk] = useState(false);

    //! 1) --------- funcion que se encarga de gestionar los datos del formulario
    const formSubmit = async (formData) => {
        setSend(true);
        setRes(await forgotPasswordUser(formData));
        setSend(false);
    };

    //! 2) --------- useEffect que gestionan la res con sus errores y sus 200
    useEffect(() => {
        console.log(res);
        useForgotPasswordError(res, setRes, setForgotOk);
    }, 
    [res]);

    //! 3) --------- estados de navegacion o que la funcion esta ok
    if(forgotOk){
        return <Navigate to='/login'/>
    }

    return (
    <>
        <div className="form-wrap">
            <h1>Change your password 💱</h1>

            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
                <input
                className="input_user"
                type="text"
                id="email"
                name="email"
                autoComplete="false"
                {...register("email", { required: true })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                Email
                </label>
            </div>

            <div className="btn_container">
                <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                >
                Change password
                </button>
            </div>

            <p className="bottom-text">
                <small>Enter your email to send you the new password 💌</small>
            </p>
            </form>
        </div>
    </>
    )
}

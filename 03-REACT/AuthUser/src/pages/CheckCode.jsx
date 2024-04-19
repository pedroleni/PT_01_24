import "./CheckCode.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import {
    checkCodeConfirmationUser,
    resendCodeConfirmationUser,
} from "../services/user.service";
import { useAuth } from "../context/authContext";
import { useAutoLogin, useCheckCodeError, useResendCodeError } from "../hooks";

export const CheckCode = () => {
    //! --- ESTADOS ------------------------------------------
    const navigate = useNavigate();
    const { allUser, login, setUser } = useAuth();
    const { register, handleSubmit } = useForm();

    // EL RES Va a ser para el check del code confirmation
    const [res, setRes] = useState({});
    // resResend va a ser para gestionar el renvio del codigo de confirmacion
    const [resResend, setResResend] = useState({});

    const [send, setSend] = useState(false);
    const [okCheck, setOkCheck] = useState(false);

    // ------> estos dos estados se utilizan para cuando se recarga la pagina por el usuario
    const [okDeleteUser, setOkDeleteUser] = useState(false);
    const [userNotFound, setUserNotFound] = useState(false);

    //! 1) --------- funcion con la data del formulario + reenvio
    const formSubmit = async (formData) => {
        /** ¿Cómo compruebo de dónde viene el usuario? Para saber de dónde saco la info del code y el email ?¿?¿?
            viendo si hay algo en el localStorage --> 
            si hay algo en el localStorage --> viene del login
            si no hay nada en el localStorage --> viene del register y lo cojo de allUser 
        */
        const userLocal = localStorage.getItem('user');

        if (userLocal == null) {
            // ENTRAMOS POR EL REGISTER --> no hay nada en el localStorage, cogemos el email del allUser
            const custFormData = {
                confirmationCode: parseInt(formData.confirmationCode),
                email: allUser.data.user.email,
            };
            setSend(true);
            setRes(await checkCodeConfirmationUser(custFormData))
            setSend(false);
        } else {
            // ENTRAMOS POR EL LOGIN --> cogemos el email del localStorage, que está instanciado en userLocal
            const parseUser = JSON.parse(userLocal);
            const custFormData = {
                confirmationCode: parseInt(formData.confirmationCode),
                email: parseUser.email,
            };
            setSend(true);
            setRes(await checkCodeConfirmationUser(custFormData))
            setSend(false);
        };
    };

    const handleReSend = async () => {};

    //! 2) --------- useEffect que nos sirve cuando cambia la res a lanzar el comprobador de errores
    useEffect(() => {
        useCheckCodeError(
            res,
            setRes,
            setOkCheck,
            setOkDeleteUser,
            login,
            setUserNotFound
        )
    }, [res]);

    useEffect(() => {

    }, [resResend]);

    //! 3) --------- condicionales que evaluan si estan a true los estados de navegacion

    return (
    <>
        <div className="form-wrap">
            <h1>Verify your code 👌</h1>
            <p>Write the code sent to your email</p>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
                <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("confirmationCode", { required: false })}
                />
                <label htmlFor="custom-input" className="custom-placeholder">
                Registration code
                </label>
            </div>

            <div className="btn_container">
                <button
                id="btnCheck"
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                >
                Verify Code
                </button>
            </div>
            <div className="btn_container">
                <button
                id="btnResend"
                className="btn"
                disabled={send}
                style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                onClick={() => handleReSend()}
                >
                Resend Code
                </button>
            </div>

            <p className="bottom-text">
                <small>
                If the code is not correct ❌, your user will be deleted from the
                database and you will need to register again.{" "}
                </small>
            </p>
            </form>
        </div>
    </>
    )
}

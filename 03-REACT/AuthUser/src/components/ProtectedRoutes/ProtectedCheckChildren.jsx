import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const ProtectedCheckChildren = ({children}) => {
    const { allUser, user } = useAuth();

    // si el check code de allUser o de user es true --> navegas a page dashboard
    if (allUser?.data?.user?.check == true || user?.check == true) {
        return <Navigate to='/dashboard'/>
    }

    // su el user es null o allUser tiene el codigo vacio ---> navegas a page login
    if (user == null || allUser.data.confirmationCode === '') {
        return <Navigate to='/login'/>
    }

    return children;
}

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
    const loginData = useSelector((state) => state.login);


    const location = useLocation();

    //console.log();
    return (
        allowedRoles?.includes(loginData?.user?.role)
            ? <Outlet />
            : loginData?.user
                ? <Navigate to="/" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;
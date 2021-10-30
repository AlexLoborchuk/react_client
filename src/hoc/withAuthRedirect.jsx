import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) =>{

    function  RedirectComponent (props) {
        let logout = useSelector((state) => state.login.loggined)
        return <div>
              {!!logout  ? <Component {...props} /> : <Redirect to='/login'/>}
        </div>
    }

    return RedirectComponent;
}
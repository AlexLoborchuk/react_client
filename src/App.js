import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import { AdminPageWithAuthRedirect } from "./pages/admin/admin_page";
import { LoginPage } from "./pages/login/login_page";
import { ProfilePageWithAuthRedirect } from "./pages/profile/profile_page";
import { RegistrationFormUserData } from "./pages/registration/registration_form_user_data";
import { RegistrationPage } from "./pages/registration/registration_page";


function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
    <Switch>
        <Route exact path='/' render={()=><Redirect to='/login'/>}/>
        <Route path='/login' render={()=><LoginPage/>}/>
        <Route path='/registration' render={()=><RegistrationPage/>} />
        <Route path='/registration_next_section' render={()=><RegistrationFormUserData/>} />
        <Route path='/profile' render={()=><ProfilePageWithAuthRedirect/>}/>
        <Route path='/admin' render={()=><AdminPageWithAuthRedirect />}/>
    </Switch>
    </Router>
  );
}

export default App;

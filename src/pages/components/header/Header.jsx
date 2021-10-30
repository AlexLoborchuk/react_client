import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Logout } from "../../../store/reducers/login-reducer";
import DefaultAvatar from '../../../image/default_avatar.png';


import { Row, Col, Button, Avatar} from 'antd';
import '../../../style/login.css';

export const Header = () =>{

    const dispatch = useDispatch();  
    const profile_data = useSelector((state) => state.profile)

    return <div>
         <Row>
             <Col span={12} className='header_profile_block' >
             <Avatar size={32} src={!!profile_data.photo ? profile_data.photo : DefaultAvatar} alt='User Avatar'/>
                {profile_data.name} {profile_data.surname}
             </Col>
            <Col span={6} offset={5}>  
                <Button type='primary'  size='large'  shape="round"  className='button'>
                    <NavLink to='/admin'>Admin</NavLink>
                </Button>
                <Button  type='danger'  size='large'  shape="round" className='danger_button' onClick = {()=>{ 
                    dispatch(Logout())
                }} >
                    Logout
                </Button>
            </Col>
         </Row>
    </div>
}
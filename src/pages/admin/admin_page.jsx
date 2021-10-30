import { useSelector,useDispatch } from "react-redux"
import True from '../../image/true.png'
import False from '../../image/false.png'
import { DeleteUser } from "../../store/reducers/admin-reducer"
import { NavLink } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


import { Row, Col, Button} from 'antd';
import '../../style/admin.css'
import '../../style/login.css'
import '../../style/profile.css'


const AdminPage = () =>{

    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    return <div className='page'>
                <Button    
                    size='large'  
                    shape="round"
                    style={{margin: '10px'}} >
                        <NavLink to='/profile'>Back</NavLink>
                </Button>
                <div className='space-align-container'>
                <Row>
                    <Col span={6} className='admin_table'>Name</Col>
                    <Col span={6} className='admin_table'> Location</Col>
                    <Col span={3} className='admin_table'>Sex</Col>
                    <Col span={3} className='admin_table'>User is admin</Col>
                    </Row>
                {users.map((user, id) =>{
                    return <div>
                    <Row key={id}>
                        <Col span={6} className='admin_table'>{user.name} {user.surname} </Col>
                        <Col span={6} className='admin_table'> {user.location}</Col>
                        <Col span={3} className='admin_table'> {user.sex}</Col>
                        <Col span={3} className='admin_table'>{user.isAdmin ? <img src={True} alt="User is admin"/>
                            : <img src={False} alt="User is not admin"/>}
                        </Col>
                        <Col span={6}>
                            <Button  
                                type='danger'  
                                size='large'  
                                shape="round" 
                                className='danger_button'
                                onClick = {()=>{dispatch(DeleteUser(user.id))}}>
                                    Delete
                            </Button>
                        </Col>    
                    </Row>
                </div>
                })}
        </div>
     </div>
}

export const AdminPageWithAuthRedirect = withAuthRedirect(AdminPage);
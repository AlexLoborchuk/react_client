import { useSelector,useDispatch } from "react-redux"
import True from '../../image/true.png'
import False from '../../image/false.png'
import { ChangeRightStatus, DeleteUser } from "../../store/reducers/admin-reducer"
import { NavLink } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Field, Form, Formik } from "formik"


import { Row, Col, Button} from 'antd';
import '../../style/admin.css'
import '../../style/login.css'
import '../../style/profile.css'
import { useEffect, useState } from "react"


const AdminPage = () =>{

    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    //const [loading, setLoading] = useState(false)

    // useEffect(()=>{
    //     if(users.name === undefined){
    //         setLoading(true)
    //     }
    //     else{
    //         setLoading(false)
    //     }
    // }, [users])
   
    return  <div className='page'>
                <Button    
                    size='large'  
                    shape="round"
                    style={{margin: '10px'}} >
                        <NavLink to='/profile'>Back</NavLink>
                </Button>
                <div className='space-align-container'>
                <Row>
                    <Col span={5} className='admin_table'>Name</Col>
                    <Col span={6} className='admin_table'> Location</Col>
                    <Col span={3} className='admin_table'>Sex</Col>
                    <Col span={4} className='admin_table'>User is admin</Col>
                    </Row>
                    
                {/*loading ? <div>...loading</div> :*/ users.map((user, id) =>{
                    return <div key={id}>
                    <Row>
                        <Col span={5} className='admin_table'>{user.name} {user.surname} </Col>
                        <Col span={6} className='admin_table'> {user.location}</Col>
                        <Col span={3} className='admin_table'> {user.sex}</Col>
                      
                        <Col span={4} className='admin_table'>
                        <Formik
                initialValues={{
                    check: user.isAdmin
                }}
             
                onSubmit={fields => {
                   // dispatch(ChangeRightStatus(user.id, fields.check)); ---???
                }}
            >
                {({}) => (
                    <Form>  
                        <Field type="checkbox" name="check" autoFocus className='checkbox' />            
                        <Button type="primary"  
                            size='middle'  
                            shape="round" 
                            className='button'>
                                 Submit
                        </Button>
                    </Form>
                )}
            </Formik>
                        </Col>
                        <Col span={6}>
                            <Button  
                                type='danger'  
                                size='large'  
                                shape="round" 
                                className='danger_button'
                                style={{marginTop: '25px'}}
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
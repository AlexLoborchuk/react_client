import { useDispatch,useSelector } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import DefaultAvatar from '../../image/default_avatar.png'
import { SetEditMode } from '../../store/reducers/profile_reducer';
import { Header } from '../components/header/Header';
import { ProfileForm } from './profile_form';


import { Row, Col, Avatar, Descriptions, Typography, Button} from 'antd';
import '../../style/profile.css'
import '../../style/login.css'


const { Title, Text } = Typography;

const ProfilePage = () =>{

    const dispatch = useDispatch();  
    const profile_data = useSelector((state) => state.profile);

    return  <div>
                <Header /> 
            {profile_data.isEditing ? <ProfileForm /> : 
                <div >
                    <div  className='profile_block space-align-container'> 
                        <Row type="flex" justify="center" align="middle" style={{minHeight: '59vh'}}>
                            <Col span={4}>   
                                <Avatar size={128} src={!!profile_data.photo ? profile_data.photo : DefaultAvatar} alt='User Avatar'/>
                            </Col>
                            <Col span={12} className='profile_info_block'> 
                                <Title level={4}>{profile_data.name} {profile_data.surname}</Title>
                                <div>
                                    <Text className='text'>Phone: {profile_data.phone}</Text>
                                </div>
                                <div>
                                    <Text className='text'>Location: {profile_data.location}</Text>
                                </div>
                                <Descriptions>
                                    <Descriptions.Item  className='text'>{profile_data.description}</Descriptions.Item >
                                </Descriptions>
                                <div>
                                    <Button onClick = {()=>{ 
                                    dispatch(SetEditMode(true))
                                    }}  className='button' type="primary" size='large'  shape="round" >
                                        Change
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            }
            </div>
}

export const ProfilePageWithAuthRedirect = withAuthRedirect(ProfilePage)
import { Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { EditProfile, SetEditMode } from '../../store/reducers/profile_reducer';

import { Form, Input, SubmitButton} from 'formik-antd';
import { Row, Col, } from 'antd';
import '../../style/login.css'

export const ProfileForm = ()=>{

    const dispatch = useDispatch();
    const profile_data = useSelector((state)=> state.profile)

    return <div>
         <Formik
       initialValues={{ name: profile_data.name, 
        surname: profile_data.surname,
        phone: profile_data.phone,
        location: profile_data.location,
        description: profile_data.description
        }}
       onSubmit={(values) => {
            dispatch(EditProfile(values));
            dispatch(SetEditMode(false))
          }
        }
     >
       {({
         values,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '80vh'}}>
          <Col span={10}>
            <Form onSubmit={handleSubmit} className='space-align-container '   align="center">
              <div>
                  <Input
                    className="input"
                    type='name'
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Name"
                />
              </div>
              <div>
                    <Input
                    className="input"
                    type='surname'
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    placeholder="Surname"
                    />
              </div>
              <div>
                  <Input
                    className="input"
                    type='phone'
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Phone"
                />
              </div>
                <div>
                  <Input
                    className="input"
                    type='location'
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    placeholder="Location"
                />
              </div>
                <div> 
                    <Input.TextArea rows={8} className='input'
                    type='descriotion'
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder="Description"
                />
              </div>
              <div>
                <SubmitButton 
                    type="primary" 
                    className='button' 
                    size='large' 
                    shape="round" 
                    disabled={isSubmitting}>
                        Edit
                </SubmitButton>
              </div>
            </Form>  
          </Col>
         </Row> 
       )}
     
     </Formik>
    </div>
}
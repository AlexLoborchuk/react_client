import React from 'react'
import { Formik} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { EditProfile } from '../../store/reducers/profile_reducer';
import { AddNewUser } from '../../store/reducers/admin-reducer';
import uuid from 'react-uuid';


import { Form, Input, SubmitButton} from 'formik-antd';
import { Row, Col} from 'antd';
import '../../style/login.css'




export const RegistrationFormUserData = ()=> {

    const dispatch = useDispatch();
    const isCreated = useSelector((state) => state.profile.created)

    return <div className='page'>
     <Formik
       initialValues={{ 
            name: '',
            surname: '',
            location: '',
            phone: '',
            sex: ''
            }
        }
       onSubmit={(values, { setSubmitting }) => {
           let user = {
               'name': values.name,
               'surname': values.surname,
               'phone': values.phone,
               'location': values.location,
               'description': 'Add some description'
            };
            dispatch(EditProfile(user));
            let adminData = {
                'id': uuid(), 
                'name': values.name,
                'surname': values.surname, 
                'isAdmin': false,
                'location': values.location, 
                'sex': values.sex};
            dispatch(AddNewUser(adminData));
            setSubmitting(false); 
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
          <Col span={8}>
            <Form 
              onSubmit={handleSubmit} 
              className='space-align-container '  
              align="center">
              <Input
                className="input"
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder='Name'
              />
                <Input
                className="input"
                type="surname"
                name="surname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
                placeholder='Surame'
              />
               <Input
                className="input"
                type="location"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                placeholder='location'
              />
               <Input
                className="input"
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder='Phone'
              />

              <div>
                <select
                  name="sex"
                  className='select'
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <option value="">Select a sex</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </select>
              </div>
              <SubmitButton 
                type="primary" 
                className='button' 
                size='large' 
                shape="round" 
                disabled={isSubmitting}>
                    Create
              </SubmitButton >
            </Form>
          </Col>
        </Row>
       )}
     </Formik>
     {isCreated && <Redirect to='/profile'/>}
   </div>
}
import React from 'react'
import { Formik } from 'formik';
import { EditLogin } from '../../store/reducers/login-reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';


import { Form, Input, SubmitButton} from 'formik-antd';
import { Row, Col} from 'antd';
import '../../style/login.css'


export const LoginPage = ()=> {

    const dispatch = useDispatch();
    const loggined = useSelector((state) => state.login.loggined)

    return <div className='page'>
    
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
           dispatch(EditLogin(values))
           setSubmitting(false); 

          }
        }
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '80vh'}}>
          <Col span={8}>
            <Form onSubmit={handleSubmit} className='space-align-container '   align="center">
              <Input   
                className="input"
                type="email"
                name="email"
                span ={12}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='Email'
              />
                  {errors.email && touched.email && errors.email}
            <Input.Password   
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='Password'
            />
           {errors.password && touched.password && errors.password}
            <SubmitButton type="primary" className='button' size='large'  shape="round" disabled={isSubmitting}>
              Login
            </SubmitButton >
            <div>
              <NavLink to='/registration'>Create new account</NavLink>
            </div>
         </Form>
          </Col>
        </Row>
       )}
     </Formik>
     {loggined && <Redirect to='/profile'/>}
   </div>
}
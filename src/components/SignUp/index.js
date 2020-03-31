import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import  {Formik} from 'formik';

import * as yup from 'yup';

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="form-container">
                            <Formik
                                initialValues={{email: '', password: ''}}
                                onSubmit={ (values) => {
                                    console.log(values);
                                    this.props.history.push('/login')
                                }}
                                validationSchema={yup.object().shape({
                                    email: yup.string().email().required('Please enter email'),
                                    password: yup.string().required('Please enter password')
                                })}
                            >
                                {props => {
                                    const {
                                        values,
                                        handleSubmit,
                                        handleChange,
                                        errors,
                                        touched,
                                        handleBlur
                                    } = props;

                                    return (
                                        <React.Fragment>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input 
                                                                name="email" 
                                                                type="email" 
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                className={errors.email && touched.email ? "form-control error": "form-control"}
                                                            />
                                                            { errors.email && touched.email && 
                                                                <div className="invalid-feedback">{errors.email}</div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input 
                                                                name="password" 
                                                                type="password" 
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.password}
                                                                className={errors.password && touched.password  ? "form-control error" : "form-control"}
                                                            />
                                                            { errors.password && touched.password && 
                                                                <div className="invalid-feedback">{errors.password}</div>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </React.Fragment>
                                    )
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(SignUp);
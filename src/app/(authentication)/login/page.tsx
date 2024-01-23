'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Alert, Button, Card, Form, CardBody, FormLabel, FormControl, Spinner } from '@bootstrap';
import Link from 'next/link';
import * as Yup from "yup";
import { FormikProps, useFormik } from "formik";
import { LoginParams, useLoginMutation } from '@/redux/features/authentication/login/apiLogin';
import InputInvalidFeedback from '@/components/common/FormInvalidFeedback';
import InputContainer from '@/components/container/InputContainer';
import CustomAlert from '@/components/ui/alert/CustomAlert';
import { handleApiErrorResponse } from '@/utils/handleApiErrorResponse';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    const [passwordtype, setPasswordtype] = useState(true)
    const [userLogin, setUserLogin] = useState<any>([]);

    // RTK Query Login api
    const [Login, { isLoading, error, isSuccess }] = useLoginMutation();

    useEffect(() => {
        if (isSuccess) {
            router.push('/dashboard')
        }
    }, [isSuccess])

    const validation: FormikProps<LoginParams> = useFormik({
        enableReinitialize: true,

        initialValues: {
            emailID: userLogin.emailID || '',
            password: userLogin.password || '',
        },

        validationSchema: Yup.object({
            emailID: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),

        onSubmit: (values) => {
            Login(values) // calling api
        }
    });

    return (
        <React.Fragment>
            <Head>
                <title>Login</title>
            </Head>

            <Card className="mb-0 border-0 shadow-none">
                <CardBody className="px-0 p-sm-5 m-lg-4">
                    <div className="text-center mt-2">
                        <h5 className="text-primary fs-20">Welcome Back !</h5>
                        <p className="text-muted">Sign in to continue.</p>
                    </div>

                    {error && <CustomAlert variant='danger' autoClose dismissible>{handleApiErrorResponse(error).message}</CustomAlert>}

                    <div className="p-2 mt-5">
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                        >
                            <InputContainer>
                                <FormLabel htmlFor="email" className="form-label">Email</FormLabel>

                                <FormControl
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    name="emailID"
                                    placeholder="Enter email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.emailID || ""}
                                    isInvalid={validation.touched.emailID && validation.errors.emailID ? true : false}
                                />

                                <InputInvalidFeedback message={validation.errors.emailID} />
                            </InputContainer>

                            <InputContainer>
                                <div className="float-end">
                                    <Link href="/forgotpassword" className="text-muted">Forgot password?</Link>
                                </div>

                                <FormLabel className="form-label" htmlFor="password-input">Password</FormLabel>

                                <div className="position-relative auth-pass-inputgroup mb-3">
                                    <FormControl
                                        type={passwordtype ? "password" : "text"}
                                        id="password-input"
                                        className="form-control pe-5 password-input"
                                        name="password"
                                        placeholder="Enter password"
                                        value={validation.values.password || ""}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        isInvalid={validation.touched.password && validation.errors.password ? true : false}
                                    />

                                    <InputInvalidFeedback message={validation.errors.password} />

                                    <Button
                                        onClick={() => setPasswordtype(!passwordtype)}
                                        variant='link'
                                        className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                        type="button"
                                        id="password-addon">
                                        <i className="ri-eye-fill align-middle"></i>
                                    </Button>
                                </div>
                            </InputContainer>

                            <div className="mt-4">
                                <Button variant="primary" className="w-100" type="submit">
                                    {isLoading && <Spinner animation="border" size="sm" className="me-2" />}

                                    Sign In
                                </Button>
                            </div>

                            <div className="mt-4 pt-2 text-center">
                                <div className="signin-other-title">
                                    <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                </div>
                                <div className="pt-2 hstack gap-2 justify-content-center">

                                    {/* <FacebookLogin
                                                                        // appId={facebook.APP_ID}
                                                                        autoLoad={false}
                                                                        callback={facebookResponse}
                                                                        render={(renderProps: any) => (
                                                                            <Button type="button" variant='soft-primary' className="btn-icon" onClick={renderProps.onClick}>
                                                                                <i className="ri-facebook-fill fs-16" />
                                                                            </Button>
                                                                        )}
                                                                    /> */}
                                    {/* <button type="button" className="btn btn-soft-primary btn-icon"><i className="ri-facebook-fill fs-16"></i></button> */}
                                    {/* <button type="button" className="btn btn-soft-danger btn-icon"><i className="ri-google-fill fs-16"></i></button> */}

                                    {/* <GoogleLogin
                                                                        clientId={"23144678283-oek7ncjmmrgkgmi2i56sc411gp71a8sp.apps.googleusercontent.com"}
                                                                        render={(renderProps: any) => (
                                                                            <Button variant='soft-danger' type="button" className="btn-icon" onClick={renderProps.onClick}>
                                                                                <i className="ri-google-fill fs-16" />
                                                                            </Button>
                                                                        )} onSuccess={googleResponse} onFailure={() => { }} /> */}
                                    <Button variant='soft-dark' type="button" className="btn-icon"><i className="ri-github-fill fs-16"></i></Button>
                                    <Button variant='soft-info' type="button" className="btn-icon"><i className="ri-twitter-fill fs-16"></i></Button>
                                </div>
                            </div>
                        </Form>

                        <div className="text-center mt-5">
                            <p className="mb-0">Don&apos;t have an account ? <Link href="/signup" className="fw-semibold text-secondary text-decoration-underline"> SignUp</Link> </p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

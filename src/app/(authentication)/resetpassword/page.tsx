'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Card, CardBody, Form, FormControl, FormLabel, Spinner } from '@bootstrap'
import * as Yup from "yup";
import { useFormik, FormikProps } from 'formik';
import CustomAlert from '@/components/ui/alert/CustomAlert';
import InputContainer from '@/components/container/InputContainer';
import InputInvalidFeedback from '@/components/common/FormInvalidFeedback';
import { useResetPasswordMutation } from '@/redux/features/authentication/resetpassword/apiResetPassword';
import { handleApiErrorResponse } from '@/utils/handleApiErrorResponse';
import { toast } from 'react-toastify';

interface ResetFields {
    password: string;
    confirmPassword: string;
}

export default function CreatePassword() {
    const [passwordtype, setPasswordtype] = useState(true);
    const [confirmPasswordtype, setConfirmPasswordtype] = useState(true);

    // RTK Query Api
    const [ResetPassword, { data, isLoading, error, isSuccess }] = useResetPasswordMutation();

    const validation: FormikProps<ResetFields> = useFormik({
        enableReinitialize: true,

        initialValues: {
            password: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .required("Please Enter Your Password")
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
            confirmPassword: Yup.string()
                .required('Please Enter Your Confirm Password')
                .oneOf([Yup.ref('password')], 'Passwords must match')
        }),

        onSubmit: ({ password }) => {
            ResetPassword({ emailID: "", password }) // calling api
        }
    });

    return (
        <Card className="mb-0 border-0 shadow-none">
            <CardBody className="px-0 p-sm-5 m-lg-4">
                <div className="text-center">
                    <h5 className="text-primary fs-20">Create new password</h5>
                    <p className="text-muted mb-5">Your new password must be different from previous used password.</p>
                </div>

                <div className="p-2">
                    <Form className="needs-validation"
                        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                            e.preventDefault();

                            validation.handleSubmit();
                            return false;
                        }}
                        noValidate action="#"
                    >
                        {isSuccess && (
                            <>
                                {toast("Your Redirect To Login Page...", { position: "top-right", hideProgressBar: false, className: 'bg-success text-white', progress: undefined, toastId: "" })}

                                <CustomAlert variant="success" autoClose dismissible>
                                    {data?.message} and Your Redirect To Login Page...
                                </CustomAlert>
                            </>
                        )}

                        {error && <CustomAlert variant='danger' autoClose dismissible>{handleApiErrorResponse(error).message}</CustomAlert>}

                        <InputContainer>
                            <FormLabel className="form-label" htmlFor="password-input">Password</FormLabel>

                            <div className="position-relative auth-pass-inputgroup">
                                <FormControl
                                    type={passwordtype ? "password" : "text"}
                                    id="password-input"
                                    className="form-control pe-5 password-input"
                                    name="password"
                                    placeholder="Enter password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.password || ""}
                                    isInvalid={validation.touched.password && validation.errors.password ? true : false}
                                    required
                                />

                                <Button
                                    variant='link'
                                    className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                    id="password-addon"
                                    onClick={() => setPasswordtype(prev => !prev)}
                                >
                                    <i className="ri-eye-fill align-middle"></i>
                                </Button>

                                <InputInvalidFeedback message={validation.errors.password} />
                            </div>
                        </InputContainer>

                        <InputContainer>
                            <FormLabel className="form-label" htmlFor="confirm-password-input">Confirm Password</FormLabel>

                            <div className="position-relative auth-pass-inputgroup">
                                <FormControl
                                    type={confirmPasswordtype ? "password" : "text"}
                                    id="confirm-password-input"
                                    className="form-control pe-5 password-input"
                                    name="confirmPassword"
                                    placeholder="Enter confirm password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.confirmPassword || ""}
                                    isInvalid={validation.touched.confirmPassword && validation.errors.confirmPassword ? true : false}
                                    required
                                />

                                <Button
                                    variant='link'
                                    className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                    type="button"
                                    id="confirm-password-addon"
                                    onClick={() => setConfirmPasswordtype(prev => !prev)}
                                >
                                    <i className="ri-eye-fill align-middle"></i>
                                </Button>

                                <InputInvalidFeedback message={validation.errors.confirmPassword} />
                            </div>
                        </InputContainer>

                        <div className="mb-4">
                            <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Dev360 <Link href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                        </div>

                        <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                            <h5 className="fs-13">Password must contain:</h5>
                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                        </div>

                        <div className="mt-4">
                            <Button variant='primary' className="w-100" type="submit">
                                {isLoading && <Spinner animation="border" size="sm" className="me-2" />}

                                Reset Password
                            </Button>
                        </div>

                        <div className="mt-4 text-center">
                            <div className="signin-other-title">
                                <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                            </div>
                            <div>
                                <Button variant='soft-primary' type="button" className="btn-icon me-1">
                                    <i className="ri-facebook-fill fs-16"></i>
                                </Button>

                                <Button variant='soft-danger' type="button" className="btn-icon me-1">
                                    <i className="ri-google-fill fs-16"></i>
                                </Button>

                                <Button variant='soft-dark' type="button" className="btn-icon me-1">
                                    <i className="ri-github-fill fs-16"></i>
                                </Button>

                                <Button variant='soft-info' type="button" className="btn-icon">
                                    <i className="ri-twitter-fill fs-16"></i>
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="mt-4 text-center">
                    <p className="mb-0">Wait, I remember my password...
                        <Link href="/login" className="fw-semibold text-primary text-decoration-underline"> Click here </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}

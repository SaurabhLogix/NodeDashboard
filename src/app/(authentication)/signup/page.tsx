'use client'

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as Yup from "yup";
import { useFormik, FormikProps } from 'formik';
import { Alert, Button, Card, CardBody, Form, FormControl, FormLabel, Spinner } from '@bootstrap';
import InputInvalidFeedback from '@/components/common/FormInvalidFeedback';
import InputContainer from '@/components/container/InputContainer';
import { SignUpParams, useSignUpMutation } from '@/redux/features/authentication/signup/apiSignUp';
import CustomAlert from '@/components/ui/alert/CustomAlert';
import { handleApiErrorResponse } from '@/utils/handleApiErrorResponse';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface SignUpFields extends SignUpParams {
  confirmPassword: string;
}

export default function SignUp() {
  const router = useRouter();
  const [passwordtype, setPasswordtype] = useState(true);
  const [confirmPasswordtype, setConfirmPasswordtype] = useState(true);

  // RTK Query Sign up api
  const [Signup, { data, isLoading, error, isSuccess }] = useSignUpMutation();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  }, [isSuccess])

  const validation: FormikProps<SignUpFields> = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: '',
      lastName: '',
      emailID: '',
      username: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("Please Enter Your First Name"),
      lastName: Yup.string().required("Please Enter Your Last Name"),
      emailID: Yup.string()
        .required("Please Enter Your Email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please Enter Valid Email"
        ),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string()
        .required("Please Enter Your Password")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string()
        .required('Please Enter Your Confirm Password')
        .oneOf([Yup.ref('password')], 'Passwords must match')
    }),
    onSubmit: ({ confirmPassword, ...values }) => {
      Signup(values) // calling api
    }
  });

  return (
    <React.Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Card className="mb-0 border-0 py-3 shadow-none">
        <CardBody className="px-0 p-sm-5 m-lg-4">
          <div className="text-center mt-2">
            <h5 className="text-primary fs-20">Create New Account</h5>
            <p className="text-muted">Get your free account now</p>
          </div>
          <div className="p-2 mt-5">
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
                  {toast("Your Redirect To Login Page...",
                    {
                      position: "top-right",
                      hideProgressBar: false,
                      className: 'bg-success text-white',
                      progress: undefined,
                      toastId: ""
                    })}

                  <CustomAlert variant="success" autoClose dismissible>
                    {data?.message}
                  </CustomAlert>
                </>
              )}

              {error && <CustomAlert variant='danger' autoClose dismissible> {handleApiErrorResponse(error).message} </CustomAlert>}

              <InputContainer>
                <FormLabel htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></FormLabel>

                <FormControl
                  type="text"
                  id="firstName"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter first name"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.firstName || ""}
                  isInvalid={validation.touched.firstName && validation.errors.firstName ? true : false}
                  required
                />

                <InputInvalidFeedback message={validation.errors.firstName} />
              </InputContainer>

              <InputContainer>
                <FormLabel htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></FormLabel>

                <FormControl
                  type="text"
                  id="lastName"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter last name"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.lastName || ""}
                  isInvalid={validation.touched.lastName && validation.errors.lastName ? true : false}
                  required
                />

                <InputInvalidFeedback message={validation.errors.lastName} />
              </InputContainer>

              <InputContainer>
                <FormLabel htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></FormLabel>

                <FormControl
                  type="email"
                  id="useremail"
                  className="form-control"
                  name="emailID"
                  placeholder="Enter email address"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.emailID || ""}
                  isInvalid={validation.touched.emailID && validation.errors.emailID ? true : false}
                  required
                />

                <InputInvalidFeedback message={validation.errors.emailID} />
              </InputContainer>

              <InputContainer>
                <FormLabel htmlFor="username" className="form-label">Username <span className="text-danger">*</span></FormLabel>

                <FormControl
                  type="text"
                  id="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.username || ""}
                  isInvalid={validation.touched.username && validation.errors.username ? true : false}
                  required
                />

                <InputInvalidFeedback message={validation.errors.username} />
              </InputContainer>

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

                  Sign Up
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
                </div>
              </div>
            </Form>
          </div>
          <div className="mt-4 text-center">
            <p className="mb-0">Already have an account ? <Link href="/login" className="fw-semibold text-primary text-decoration-underline"> Login </Link> </p>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
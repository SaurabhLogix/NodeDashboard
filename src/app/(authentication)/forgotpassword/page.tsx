'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button, Card, CardBody, Spinner } from '@bootstrap'
import { useForgotPasswordMutation } from '@/redux/features/authentication/forgotpassword/apiForgotPassword'
import CustomAlert from '@/components/ui/alert/CustomAlert'
import { handleApiErrorResponse } from '@/utils/handleApiErrorResponse'
import { debounce } from 'lodash'

export default function ForgotPassword() {
    const [emailID, setEmailID] = useState('');

    // RTK Query Fogot password api
    const [forgotpassword, { isLoading, error }] = useForgotPasswordMutation();

    function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        forgotpassword(emailID);
    }

    const handleInputChange = debounce((value: string, setValue: (value: string) => void) => {
        setValue(value);
    }, 500)

    return (
        <Card className="mb-0 border-0 py-3 shadow-none">
            <CardBody className="px-0 p-sm-5 m-lg-4">
                <div className="text-center mt-2">
                    <h5 className="text-primary fs-20">Forgot Password?</h5>
                    <p className="text-muted mb-4">Reset password with Dev360</p>
                    <div className="display-5 mb-4 text-danger">
                        <i className="bi bi-envelope"></i>
                    </div>
                </div>

                <div className="alert alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                    Enter your email and instructions will be sent to you!
                </div>

                <div className="p-2">
                    <form onSubmit={handleForm}>

                        {error && <CustomAlert variant='danger' autoClose dismissible>{handleApiErrorResponse(error).message}</CustomAlert>}

                        <div className="mb-4">
                            <label className="form-label">Email</label>

                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                name="emailID"
                                placeholder="Enter Email"
                                onChange={e => handleInputChange(e.target.value, setEmailID)}
                                required
                            />
                        </div>

                        <div className="text-center mt-4">
                            <Button variant='primary' className="w-100" type="submit">
                                {isLoading && <Spinner animation="border" size="sm" className="me-2" />}

                                Send Reset Link
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-4 text-center">
                    <p className="mb-0">
                        Wait, I remember my password...
                        <Link href="/login" className="fw-semibold text-primary text-decoration-underline">
                            Click here
                        </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}

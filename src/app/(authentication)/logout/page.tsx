import React from 'react'
import Head from 'next/head'
import { Button, Card, CardBody } from '@bootstrap'

export default function Logout() {
    return (
        <React.Fragment>
            <Head>
                <title>Logout | Dev360 - Admin & Dashboard Template</title>
            </Head>
            <Card className="mb-0 border-0 shadow-none">
                <CardBody className="px-0 p-sm-5 m-lg-4 text-center">
                    <div className="display-4 text-primary">
                        <i className="bi bi-box-arrow-right"></i>
                    </div>
                    <div className="mt-4 pt-2">
                        <h5 className="fs-18">You are Logged Out</h5>
                        <p className="text-muted">Thank you for using <span className="fw-semibold">hybrix</span> admin template</p>
                        <div className="mt-4">
                            <Button className="btn btn-primary w-100">Sign In</Button>
                            {/* onClick={LogoutUser} */}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

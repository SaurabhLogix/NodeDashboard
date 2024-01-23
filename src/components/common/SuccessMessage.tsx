import Link from 'next/link'
import React from 'react'
import { Card, CardBody } from '@bootstrap'

export default function SuccessMessage() {
    return (
        <Card className="mb-0 border-0 py-3 shadow-none">
            <CardBody className="px-0 p-sm-5 m-lg-4 text-center">
                <div className="avatar-lg mx-auto mt-2">
                    <div className="avatar-title bg-card-custom text-primary display-3 rounded-circle">
                        <i className="bi bi-emoji-smile"></i>
                    </div>
                </div>
                <div className="mt-4 pt-2">
                    <h4>Well done !</h4>
                    <p className="text-muted mx-4">Aww yeah, you successfully read this important message.</p>
                    <div className="mt-4">
                        <Link href="/dashboard" className="btn btn-primary w-100">Back to Dashboard</Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

import React from 'react'
import Link from 'next/link'
import { Button, Card, CardBody } from '@bootstrap'
import Image from 'next/image'
import avatar1 from "@assets/images/users/avatar-1.jpg"

export default function LockScreen() {
    return (
        <Card className="mb-0 border-0 shadow-none">
            <CardBody className="px-0 p-sm-5 m-lg-4">
                <div className="text-center">
                    <h5 className="text-primary fs-20">Lock Screen</h5>
                    <p className="text-muted mb-4">Enter your password to unlock the screen!</p>
                </div>
                <div className="user-thumb text-center">
                    <Image src={avatar1} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                    <h5 className="font-size-15 mt-3">Hi ! Edward Diana</h5>
                </div>
                <div className="p-2 mt-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="userpassword">Password or Pin</label>
                            <input type="password" className="form-control" id="userpassword" placeholder="Enter password or pin" required />
                        </div>
                        <div className="mb-2 mt-4">
                            <Button variant='primary' className="w-100" type="submit">Unlock</Button>
                        </div>
                    </form>
                </div>
                <div className="mt-4 text-center">
                    <p className="mb-0">
                        Not you ? return
                        <Link href="/login" className="fw-semibold text-primary text-decoration-underline"> Signin </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}

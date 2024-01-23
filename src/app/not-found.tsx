import React from 'react'
import Image from 'next/image'
import NonAuthenticateLayout from '@/components/layout/NonAuthenticateLayout'
import { Card, CardBody } from '@bootstrap'
import Link from 'next/link'
import error400 from "@assets/images/error400.png"

export default function NotFound() {
  return (
    <NonAuthenticateLayout>
      <Card className="mb-0 border-0 shadow-none">
        <CardBody className="px-0 p-sm-5 m-lg-4">
          <div className="error-img text-center px-5">
            <Image src={error400} className="img-fluid" alt="" />
          </div>
          <div className="mt-4 text-center pt-3">
            <div className="position-relative">
              <h4 className="fs-18 error-subtitle text-uppercase mb-0">Opps, page not found</h4>
              <p className="fs-15 text-muted mt-3">It will be as simple as Occidental in fact,
                it will Occidental to an English person</p>
              <div className="mt-4">
                <Link href="/" className="btn btn-primary"><i className="mdi mdi-home me-1"></i>Back to home</Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </NonAuthenticateLayout>
  )
}

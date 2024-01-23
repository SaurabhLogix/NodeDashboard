import React from 'react'
import { Card, CardBody, Col, Row } from '@bootstrap'

type AdministratorHeaderProps = {
    title: string
    children: React.ReactNode
}

export default function AdministratorHeader({ title, children }: AdministratorHeaderProps) {
    return (
        <Row>
            <Col lg={12}>
                <Card className="mt-n4 mx-n4 border-0 rounded-0 bg-primary-subtle">
                    <CardBody className="pb-0 px-4">
                        <Row className="justify-content-between align-items-center g-3 mb-5 pb-1 pt-3">
                            <Col lg={4}>
                                <h4 className="mb-0">{title}</h4>
                            </Col>
                            <Col lg={4}>
                                {children}
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

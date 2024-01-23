import React from 'react'
import Image from 'next/image';
import { Card, CardBody, Col, Container, Row } from '@bootstrap';
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import Logo from '../logo/Logo';

export default function NonAuthenticateLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardBody>
                                <Row className="g-0">
                                    <Col lg={5}>
                                        <Card className="auth-card bg-primary h-100 border-0 shadow-none p-sm-3 overflow-hidden mb-0">
                                            <CardBody className="p-4 d-flex justify-content-between flex-column">
                                                <div className="auth-image mb-3">
                                                    <Logo variant='light' size='xl' />
                                                    <Image src={authEffect2} alt="" className="auth-effect-2" priority />
                                                    <Image src={authEffect} alt="" className="auth-effect" />
                                                    <Image src={authEffect} alt="" className="auth-effect-3" />
                                                </div>

                                                <div>
                                                    <h3 className="text-white">Start your journey with us.</h3>
                                                    <p className="text-white-75 fs-15">It brings together your tasks, projects, timelines, files and more</p>
                                                </div>
                                                <div className="text-center text-white-75">
                                                    <p className="mb-0">©
                                                        {new Date().getFullYear()}{" "}
                                                        Dev360. Crafted with <i className="mdi mdi-heart text-danger"></i> by Dev360 team
                                                    </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col lg={7}>
                                        {children}
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

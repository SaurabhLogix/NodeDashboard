'use client'

import React from 'react';
import { Card, Col, Row } from '@bootstrap';
import CountUp from "react-countup";

const CounterAddPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Row className="g-4 row-cols-1">
                                <Col>
                                    <Card className="text-center mb-0">
                                        <Card.Header className="text-bg-success border-0">
                                            <div className="fs-22 fw-semibold">
                                                <CountUp start={0} end={12000} duration={3} separator=',' suffix='k' />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="py-4">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <div className="avatar-title bg-success-subtle text-success fs-22 rounded-circle">
                                                    <i className="bi bi-emoji-smile"></i>
                                                </div>
                                            </div>
                                            <p className="text-muted fs-14 mb-0">Happy Clients</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="text-center mb-0">
                                        <Card.Body className="py-4">
                                            <div className="avatar-sm mx-auto mb-4">
                                                <div className="avatar-title bg-danger-subtle text-danger fs-22 rounded-circle">
                                                    <i className="bi bi-cast"></i>
                                                </div>
                                            </div>
                                            <p className="text-muted fs-14 mb-0">Project Completed</p>
                                        </Card.Body>

                                        <Card.Footer className="text-bg-danger border-0">
                                            <div className="fs-22 fw-semibold">
                                                <CountUp start={0} end={1034} duration={3} />
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment >
    );
};

export default CounterAddPage;
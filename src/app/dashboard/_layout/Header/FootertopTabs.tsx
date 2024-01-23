'use client'

import React from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import MasterPage1 from '../../(nestedroutes)/administrator/(nestedroutes)/master/masterPage1';


export default function FootertopTabs() {
    return (
        <>

            <Row>

                

                <Col xxl={10}>

                    <Card style={{ marginBottom: "0" }}>
                        <Card.Body>

                            <Tab.Container defaultActiveKey="border-navs-home">

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="border-navs-home">
                                        <MasterPage1 />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-profile">
                                        <MasterPage1 />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-messages">
                                        <MasterPage1 />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="border-navs-settings">
                                        <MasterPage1 />
                                    </Tab.Pane>
                                </Tab.Content>
                                <Nav as="ul" variant="pills" className="nav-customs nav-danger" role="tablist">
                                    
                                    

                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-home">
                                            Project 1
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-profile">
                                            Project 2
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-messages">
                                            Project 3
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="border-navs-settings">
                                            Project 4
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </>
    )
}

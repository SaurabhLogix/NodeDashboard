'use client'

import React from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
export default function BottomHeader() {
    return (
        <>
        
            <Row>
                <Col xxl={12}>
                    <Tab.Container defaultActiveKey="home">

                        <Nav as="ul" variant='tabs' className="">
                            <Nav.Item as="li"> <Nav.Link eventKey="home"> Dev 360 Apps </Nav.Link> </Nav.Item>
                            <Nav.Item as="li"> <Nav.Link eventKey="product1"> Home </Nav.Link> </Nav.Item>
                            <Nav.Item as="li"> <Nav.Link eventKey="messages"> Support </Nav.Link> </Nav.Item>
                            <Nav.Item as="li"> <Nav.Link eventKey="settings"> Settings </Nav.Link> </Nav.Item>
                        </Nav>

                        <Tab.Content className="text-muted">
                            <Tab.Pane eventKey="home" id="home">
                                <div className='ribbon-tab'>
                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-brackets-outline"></i>
                                                </div>
                                                <span className="button-title">New Application</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-upload-outline"></i>
                                                </div>
                                                <span className="button-title">New Submission</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Configuration</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-database-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Databases</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-form-textbox-password"></i>
                                                </div>
                                                <span className="button-title">Password Recovery</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-lock-outline"></i>
                                                </div>
                                                <span className="button-title">Encription Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="bi bi-search me-2"></i>
                                                </div>
                                                <span className="button-title">Advanced Search</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-clipboard-check-outline"></i>
                                                </div>
                                                <span className="button-title">Status Approved</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">Start Date: 01/14/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">End Date: 02/14/24</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-check-all"></i>
                                                </div>
                                                <span className="button-title">Process Status All</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-folder-upload-outline"></i>
                                                </div>
                                                <span className="button-title">Submitted: 01/20/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-dots-horizontal"></i>
                                                </div>
                                                <span className="button-title">Other All</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-reload"></i>
                                                </div>
                                                <span className="button-title">Recovery Packages</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-cog-clockwise"></i>
                                                </div>
                                                <span className="button-title">Rendering Options</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-export"></i>
                                                </div>
                                                <span className="button-title">Export Settings</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-publish"></i>
                                                </div>
                                                <span className="button-title">Dev 360 Publisher</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                       
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-book-account-outline"></i>
                                                </div>
                                                <span className="button-title">Contact Book</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-email-outline"></i>
                                                </div>
                                                <span className="button-title">Email Notifications</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-monitor-dashboard"></i>
                                                </div>
                                                <span className="button-title">Dashboard Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="product1" id="product1">
                            <div className='ribbon-tab'>
                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-brackets-outline"></i>
                                                </div>
                                                <span className="button-title">New Application</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-upload-outline"></i>
                                                </div>
                                                <span className="button-title">New Submission</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Configuration</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-database-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Databases</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-form-textbox-password"></i>
                                                </div>
                                                <span className="button-title">Password Recovery</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-lock-outline"></i>
                                                </div>
                                                <span className="button-title">Encription Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="bi bi-search me-2"></i>
                                                </div>
                                                <span className="button-title">Advanced Search</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-clipboard-check-outline"></i>
                                                </div>
                                                <span className="button-title">Status Approved</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">Start Date: 01/14/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">End Date: 02/14/24</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-check-all"></i>
                                                </div>
                                                <span className="button-title">Process Status All</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-folder-upload-outline"></i>
                                                </div>
                                                <span className="button-title">Submitted: 01/20/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-dots-horizontal"></i>
                                                </div>
                                                <span className="button-title">Other All</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-reload"></i>
                                                </div>
                                                <span className="button-title">Recovery Packages</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-cog-clockwise"></i>
                                                </div>
                                                <span className="button-title">Rendering Options</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-export"></i>
                                                </div>
                                                <span className="button-title">Export Settings</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-publish"></i>
                                                </div>
                                                <span className="button-title">Dev 360 Publisher</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                       
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-book-account-outline"></i>
                                                </div>
                                                <span className="button-title">Contact Book</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-email-outline"></i>
                                                </div>
                                                <span className="button-title">Email Notifications</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-monitor-dashboard"></i>
                                                </div>
                                                <span className="button-title">Dashboard Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="messages" id="messages">
                            <div className='ribbon-tab'>
                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-brackets-outline"></i>
                                                </div>
                                                <span className="button-title">New Application</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-upload-outline"></i>
                                                </div>
                                                <span className="button-title">New Submission</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Configuration</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-database-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Databases</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-form-textbox-password"></i>
                                                </div>
                                                <span className="button-title">Password Recovery</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-lock-outline"></i>
                                                </div>
                                                <span className="button-title">Encription Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="bi bi-search me-2"></i>
                                                </div>
                                                <span className="button-title">Advanced Search</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-clipboard-check-outline"></i>
                                                </div>
                                                <span className="button-title">Status Approved</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">Start Date: 01/14/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">End Date: 02/14/24</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-check-all"></i>
                                                </div>
                                                <span className="button-title">Process Status All</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-folder-upload-outline"></i>
                                                </div>
                                                <span className="button-title">Submitted: 01/20/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-dots-horizontal"></i>
                                                </div>
                                                <span className="button-title">Other All</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-reload"></i>
                                                </div>
                                                <span className="button-title">Recovery Packages</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-cog-clockwise"></i>
                                                </div>
                                                <span className="button-title">Rendering Options</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-export"></i>
                                                </div>
                                                <span className="button-title">Export Settings</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-publish"></i>
                                                </div>
                                                <span className="button-title">Dev 360 Publisher</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                       
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-book-account-outline"></i>
                                                </div>
                                                <span className="button-title">Contact Book</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-email-outline"></i>
                                                </div>
                                                <span className="button-title">Email Notifications</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-monitor-dashboard"></i>
                                                </div>
                                                <span className="button-title">Dashboard Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="settings" id="settings">
                            <div className='ribbon-tab'>
                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-brackets-outline"></i>
                                                </div>
                                                <span className="button-title">New Application</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-upload-outline"></i>
                                                </div>
                                                <span className="button-title">New Submission</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-application-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Configuration</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-database-cog-outline"></i>
                                                </div>
                                                <span className="button-title">Manage Databases</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-form-textbox-password"></i>
                                                </div>
                                                <span className="button-title">Password Recovery</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-file-lock-outline"></i>
                                                </div>
                                                <span className="button-title">Encription Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="bi bi-search me-2"></i>
                                                </div>
                                                <span className="button-title">Advanced Search</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-clipboard-check-outline"></i>
                                                </div>
                                                <span className="button-title">Status Approved</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">Start Date: 01/14/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-calendar-clock"></i>
                                                </div>
                                                <span className="button-title">End Date: 02/14/24</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-check-all"></i>
                                                </div>
                                                <span className="button-title">Process Status All</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-folder-upload-outline"></i>
                                                </div>
                                                <span className="button-title">Submitted: 01/20/24</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-dots-horizontal"></i>
                                                </div>
                                                <span className="button-title">Other All</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                        
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-reload"></i>
                                                </div>
                                                <span className="button-title">Recovery Packages</span>
                                            </div>
                                        </div>
                                        <div className="ribbon-block">
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-cog-clockwise"></i>
                                                </div>
                                                <span className="button-title">Rendering Options</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-export"></i>
                                                </div>
                                                <span className="button-title">Export Settings</span>
                                            </div>
                                            <div className="ribbon-button-small">
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-publish"></i>
                                                </div>
                                                <span className="button-title">Dev 360 Publisher</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='ribbon-section'>
                                       
                                        <div className="ribbon-block">
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-book-account-outline"></i>
                                                </div>
                                                <span className="button-title">Contact Book</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-email-outline"></i>
                                                </div>
                                                <span className="button-title">Email Notifications</span>
                                            </div>
                                            <div className='ribbon-button-large'>
                                                <div className='ribbon-icon-container'>
                                                    <i className="mdi mdi-monitor-dashboard"></i>
                                                </div>
                                                <span className="button-title">Dashboard Settings</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            
            
        </>
    )
}

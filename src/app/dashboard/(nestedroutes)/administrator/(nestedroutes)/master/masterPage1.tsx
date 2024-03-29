'use client'

import React from 'react'
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
export default function MasterPage1() {
    return (
        <>
            
            
            <div className=" row">
                <div className="col-lg-4">
                    <div className='card'>
                        
                        <div className='card-body'>

                            

                            <div className='d-flex justify-content-sm-between border-bottom pt-2 pb-2 mb-2'>
                                <div>
                                    <h6 className='mb-1'>Main Heading Come Here</h6>
                                    <p className='mb-1'>Detail description line display here for the content matter...</p>
                                    <span className="badge bg-success">Is Active</span>
                                </div>
                                <div className='d-flex flex-md-column'>
                                    <i className="mdi mdi-eye cursor-pointer"></i>
                                    <i className="ri-edit-2-line link-success cursor-pointer"></i>
                                    <i className="ri-delete-bin-line link-danger cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-sm-between border-bottom pt-2 pb-2 mb-2'>
                                <div>
                                    <h6 className='mb-1'>Main Heading Come Here</h6>
                                    <p className='mb-1'>Detail description line display here for the content matter...</p>
                                    <span className="badge bg-success">Is Active</span>
                                </div>
                                <div className='d-flex flex-md-column'>
                                    <i className="mdi mdi-eye cursor-pointer"></i>
                                    <i className="ri-edit-2-line link-success cursor-pointer"></i>
                                    <i className="ri-delete-bin-line link-danger cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-sm-between border-bottom pt-2 pb-2 mb-2'>
                                <div>
                                    <h6 className='mb-1'>Main Heading Come Here</h6>
                                    <p className='mb-1'>Detail description line display here for the content matter...</p>
                                    <span className="badge bg-success">Is Active</span>
                                </div>
                                <div className='d-flex flex-md-column'>
                                    <i className="mdi mdi-eye cursor-pointer"></i>
                                    <i className="ri-edit-2-line link-success cursor-pointer"></i>
                                    <i className="ri-delete-bin-line link-danger cursor-pointer"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-sm-between border-bottom pt-2 pb-2 mb-2'>
                                <div>
                                    <h6 className='mb-1'>Main Heading Come Here</h6>
                                    <p className='mb-1'>Detail description line display here for the content matter...</p>
                                    <span className="badge bg-success">Is Active</span>
                                </div>
                                <div className='d-flex flex-md-column'>
                                    <i className="mdi mdi-eye cursor-pointer"></i>
                                    <i className="ri-edit-2-line link-success cursor-pointer"></i>
                                    <i className="ri-delete-bin-line link-danger cursor-pointer"></i>
                                </div>
                            </div>
                            <button type="button" className="w-100 addContact-modal btn btn-primary"><i className="bi bi-plus align-middle"></i> Add Contact</button>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className='card'>
                        <div className='card-body'>
                            <form action="#" className="row g-3">
                                <div className="col-md-12">
                                    <label className="form-label">Subscription Type Name <span className='link-danger'>*</span></label>
                                    <input placeholder="Enter Subscription Type name" type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Subscription Months <span className='link-danger'>*</span></label>
                                    <input placeholder="Enter Subscription Type name" type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" placeholder="Description"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
                                        <div className="">
                                            <input type="checkbox" id="customSwitchsizemd" className="form-check-input" />
                                        </div>
                                        <label className="form-label" >Is Active</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='d-flex flex-wrap gap-2 mb-3 mb-lg-0'>
                                        <button type="button" className="btn-label btn btn-success"><i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Add</button>
                                        <button type="button" className="btn-label btn btn-primary"><i className="ri-error-warning-line label-icon align-middle fs-16 me-2"></i> Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="home-1">
                                <p className="text-muted">Use <code>nav-pills</code> class to generate particular selected nav links without borders.</p>

                                <Nav as="ul" variant="pills" className="nav-success mb-3">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="home-1">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="profile-1">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="messages-1">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="settings-1">
                                            Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="home-1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Raw denim you probably haven't heard of them jean shorts Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Too much or too little spacing, as in the example below, can make things unpleasant for the reader. The goal is to make your text as comfortable to read as possible.
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="profile-1">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="messages-1" >
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="settings-1">
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="flex-shrink-0">
                                                <i className="ri-checkbox-circle-fill text-success"></i>
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                After gathering lots of different opinions and graphic design basics, I came up with a list of 30 graphic design tips that you can start implementing.
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>

                    <div className="ribbon-box border shadow-none mb-lg-0 card"><div className="card-body"><div className="ribbon ribbon-primary round-shape">Primary</div><h5 className="fs-14 text-end">Rounded Ribbon</h5><div className="ribbon-content mt-4 text-muted"><p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p></div></div></div>
                </div>
            </div>
        </>
    )
}

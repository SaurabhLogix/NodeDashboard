'use client'

import React from 'react';
import * as Yup from "yup";
import { useFormik, FormikProps } from 'formik';
import { Button, Card, Col, Form, FormLabel, FormControl, Row, Tab } from '@bootstrap';
import InputInvalidFeedback from '@/components/common/FormInvalidFeedback';
import InputContainer from '@/components/container/InputContainer';
import Link from 'next/link';
import CounterAddPage from '../../../_common/CounterAddPage';
import RibbonAddPage from '../../../_common/RibbonAddPage';
import RecentChat from '@/app/dashboard/_segements/RecentChat';

type SubscriptionFields = {
    subscriptionTypeName: string
    subscriptionMonths: string
}

const AddSubscription = () => {
    const validation: FormikProps<SubscriptionFields> = useFormik({
        enableReinitialize: true,

        initialValues: {
            subscriptionTypeName: '',
            subscriptionMonths: '',
        },

        validationSchema: Yup.object({
            subscriptionTypeName: Yup.string().required("Please enter subscription type name"),
            subscriptionMonths: Yup.string().required("Please enter subscription months"),
        }),
        onSubmit: (values) => {
            //Signup(values) // calling api
        }
    });

    return (
        <Tab.Container defaultActiveKey="personalDetails">
            <Row>
                <Col lg={9}>
                    <Card>
                        <Card.Body className="p-4">
                            <Tab.Content>
                                <Tab.Pane eventKey="personalDetails" title="personalDetails">
                                    <Form onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}>
                                        <Row>
                                            <Col lg={6}>
                                                <InputContainer>
                                                    <FormLabel htmlFor="SubscriptionTypeName" className="form-label">Subscription Type Name <span className="text-danger">*</span></FormLabel>
                                                    <FormControl
                                                        type="text"
                                                        id="subscriptionTypeName"
                                                        className="form-control"
                                                        name="subscriptionTypeName"
                                                        placeholder="Enter SubscriptionType name"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.subscriptionTypeName || ""}
                                                        isInvalid={validation.touched.subscriptionTypeName && validation.errors.subscriptionTypeName ? true : false}
                                                    />
                                                    <InputInvalidFeedback message={validation.errors?.subscriptionTypeName} />
                                                </InputContainer>
                                            </Col>

                                            <Col lg={6}>
                                                <InputContainer>
                                                    <FormLabel htmlFor="SubscriptionMonths" className="form-label">Subscription Months<span className="text-danger">*</span></FormLabel>

                                                    <FormControl
                                                        type="text"
                                                        id="subscriptionMonths"
                                                        className="form-control"
                                                        name="subscriptionMonths"
                                                        placeholder="Enter Subscription Months"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.subscriptionMonths || ""}
                                                        isInvalid={validation.touched.subscriptionMonths && validation.errors.subscriptionMonths ? true : false}
                                                    />

                                                    <InputInvalidFeedback message={validation.errors.subscriptionMonths} />
                                                </InputContainer>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="lastnameInput" className="form-label">Description</label>
                                                    <Form.Control as="textarea" rows={3} placeholder='Description' />
                                                </div>
                                            </Col>

                                            <Col lg={7}>
                                                <div className="mb-3 pb-2 d-flex align-items-center">
                                                    <label style={{ marginLeft: "-35px", marginRight: "10px" }} className='form-switch mr-2 mb-0'>Is Active</label>
                                                    <Form.Check type="switch" id="isActiveSwitch" className="mb-0" />
                                                </div>
                                            </Col>
                                            <Row>
                                                <Col lg={4}>
                                                    <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                                        <Button variant='success' className="btn-label"><i className="ri-check-double-line label-icon align-middle fs-16 me-2"></i>Submit</Button>
                                                        <Link href="/dashboard/administrator/subscription" className="btn btn-primary btn-label">
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0">
                                                                    <i className="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Cancel
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Form>
                                </Tab.Pane>

                                <Tab.Pane eventKey="changePassword" title="changePassword">
                                    <form action="#">
                                        <Row className="g-2 justify-content-lg-between align-items-center">
                                            <Col lg={4}>
                                                <div className="auth-pass-inputgroup">
                                                    <label htmlFor="confirm-password-input" className="form-label">Confirm Password*</label>
                                                    <div className="position-relative">
                                                        <input type="password" className="form-control password-input" id="confirm-password-input" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                        <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input"><i className="ri-eye-fill align-middle"></i></button>
                                                    </div>

                                                </div>
                                            </Col>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link scroll={false} href="#" className="link-primary text-decoration-underline">Forgot Password ?</Link>
                                                <div className="">

                                                    <Button variant='success' type="submit">Change Password</Button>
                                                </div>
                                            </div>



                                            <Col lg={12}>
                                                <Card className="bg-light passwd-bg" id="password-contain">
                                                    <Card.Body>
                                                        <div className="mb-4">
                                                            <h5 className="fs-13">Password must contain:</h5>
                                                        </div>
                                                        <div className="">
                                                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>

                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </form>
                                </Tab.Pane>

                            </Tab.Content>
                        </Card.Body>
                    </Card>
                </Col>


                <Col lg={3}>
                    <RibbonAddPage />
                    {/* <CounterAddPage /> */}
                    {/* <RecentChat /> */}
                </Col>

            </Row>
        </Tab.Container>

    );
}

export default AddSubscription;
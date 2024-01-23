'use client'

import React from 'react';
import Image from 'next/image';
import { Button, Card, Col } from '@bootstrap';
import Link from 'next/link';

import productImg1 from "@assets/images/products/img-1.png"
import productImg2 from "@assets/images/products/img-2.png"
import productImg3 from "@assets/images/products/img-3.png"
import productImg4 from "@assets/images/products/img-4.png"
import productImg5 from "@assets/images/products/img-5.png"
import productImg8 from "@assets/images/products/img-8.png"

const StockReport = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Stock Report</h4>
                        <div className="flex-shrink-0">
                            <Button variant='soft-info' size='sm' type="button">
                                <i className="ri-file-list-3-line align-middle"></i> Generate Report
                            </Button>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered table-hover align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Product ID</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Updated Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Stock Status</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {stockReportData.map((item: any, key: number) => (<tr key={key}>
                                        <td>
                                            <Link href="#!" className="fw-medium link-primary">{item.ProductId}</Link>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <Image src={item.productImg} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">{item.productName}</div>
                                            </div>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>
                                            <span className="text-secondary">{item.amount}</span>
                                        </td>
                                        <td>
                                            <span className={"badge text-" + item.color + " bg-" + item.color + "-subtle"}>{item.status}</span>
                                        </td>
                                        <td>{item.quantity} PCS</td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default StockReport;

const stockReportData = [
    { id: 1, ProductId: "#00541", productImg: productImg1, productName: "Rockerz Ear Bluetooth Headphone", date: "16 Aug, 2022", amount: "$658.00", color: "success", status: "In Stock", quantity: "15" },
    { id: 2, ProductId: "#07484", productImg: productImg5, productName: "United Colors Of Benetton", date: "05 Sep, 2022", amount: "$145.00", color: "warning", status: "Low Stock", quantity: "05" },
    { id: 3, ProductId: "#01641", productImg: productImg4, productName: "Striped Baseball Cap", date: "28 Sep, 2022", amount: "$215.00", color: "danger", status: "Out of Stock", quantity: "0" },
    { id: 4, ProductId: "#00065", productImg: productImg3, productName: "350 ml Glass Grocery Container", date: "02 Oct, 2022", amount: "$79.99", color: "success", status: "In Stock", quantity: "37" },
    { id: 5, ProductId: "#00156", productImg: productImg2, productName: "One Seater Sofa", date: "11 Oct, 2022", amount: "$264.99", color: "success", status: "In Stock", quantity: "23" },
    { id: 6, ProductId: "#09102", productImg: productImg8, productName: "Men's Running Shoes Active Grip", date: "19 Nov, 2022", amount: "$264.99", color: "warning", status: "Low Stock", quantity: "23" }
]

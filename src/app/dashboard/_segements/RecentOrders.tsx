'use client'

import React, { useMemo } from 'react';
import { Button, Card, Col, Dropdown, Table } from '@bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/components/ui/pagination/CustomPagination';
import { useAppSelector } from '@/redux/app/hooks';


const RecentOrders = () => {
    const { currentPageNumber } = useAppSelector(state => state.pagination);

    const totalItems = data.length;
    const limit = 5
    const startIndex = (currentPageNumber - 1) * limit;
    const endIndex = startIndex + limit;
    const currentItems = data.slice(startIndex, endIndex);

    const columns = useMemo(
        () => [
            {
                Header: "Purchase ID",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return <Link href="#!" className="fw-medium link-primary">{cellProps.purchaseID}</Link>;
                },
            },
            {
                Header: "Customer Name",
                accessor: "customerName",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Product Name",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    return (
                        <>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2">
                                    <Image src={cellProps.productImage.src} width="32" height={32} alt="" className="avatar-xs rounded-circle" />
                                </div>
                                <div className="flex-grow-1">{cellProps.productName}</div>
                            </div>
                        </>
                    );
                },
            },
            {
                Header: "Amount",
                accessor: "amount",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Order Date",
                accessor: "orderDate",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Vendor",
                accessor: "vendor",
                disableFilters: true,
                filterable: true,
            },
            {
                Header: "Status",
                disableFilters: true,
                filterable: true,
                accessor: (cellProps: any) => {
                    switch (cellProps.status) {
                        case "Paid":
                            return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
                        case "Unpaid":
                            return (<span className="badge text-danger  bg-danger-subtle"> {cellProps.status}</span>)
                        case "Pending":
                            return (<span className="badge text-warning bg-warning-subtle"> {cellProps.status}</span>)
                        default:
                            return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
                    }
                },


            },
        ],
        []
    );

    return (
        <React.Fragment>
            <Col xl={12}>
                <Card>
                    <Card.Header className="align-items-center d-flex mb-n2">
                        <h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown">
                                <Dropdown.Toggle variant='link-dark' className="text-reset dropdown-btn arrow-none p-0">
                                    {/* as={CustomToggle} */}
                                    <span className="fw-semibold text-uppercase fs-12">Sort by:</span>
                                    <span className="text-muted"> Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" >
                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                    <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                                    <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                    <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                                    <Dropdown.Item href="#">This Month</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <div className="table-responsive w-100">
                            <Table className="align-middle table-nowrap mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" style={{ width: "150px" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentItems.length > 0 && currentItems.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>William Elmore</td>
                                                    <td>07 Oct, 2021</td>
                                                    <td>$24.05</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                    <td>
                                                        <Button type="button" variant='light' className="btn-sm">Details</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>

                        <Pagination dataLength={totalItems} limit={limit} />
                    </Card.Body>
                </Card>
            </Col>

        </React.Fragment>
    );
}

export default RecentOrders;

const data = [
    {
        id: 1,
        subscriptionTypeName: 'Yearly',
        subscriptionMonths: 12,
        displayOrder: 1,
        isActive: true,
    },
    {
        id: 2,
        subscriptionTypeName: 'Half Yearly',
        subscriptionMonths: 6,
        displayOrder: 2,
        isActive: true,
    },
    {
        id: 3,
        subscriptionTypeName: 'Monthly',
        subscriptionMonths: 1,
        displayOrder: 3,
        isActive: false,
    },
    {
        id: 4,
        subscriptionTypeName: 'Yearly',
        subscriptionMonths: 12,
        displayOrder: 4,
        isActive: true,
    },
    {
        id: 5,
        subscriptionTypeName: 'Half Yearly',
        subscriptionMonths: 6,
        displayOrder: 5,
        isActive: true,
    },
    {
        id: 6,
        subscriptionTypeName: 'Monthly',
        subscriptionMonths: 1,
        displayOrder: 6,
        isActive: false,
    },
    {
        id: 7,
        subscriptionTypeName: 'yearly',
        subscriptionMonths: 12,
        displayOrder: 7,
        isActive: false,
    },
    {
        id: 8,
        subscriptionTypeName: 'yearly',
        subscriptionMonths: 12,
        displayOrder: 7,
        isActive: false,
    },
    {
        id: 9,
        subscriptionTypeName: 'yearly',
        subscriptionMonths: 12,
        displayOrder: 7,
        isActive: false,
    },
];
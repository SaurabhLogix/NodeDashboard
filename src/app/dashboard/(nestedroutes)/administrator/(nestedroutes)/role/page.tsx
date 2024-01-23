'use client'

import React, { useState, useCallback } from 'react';
import { Card, Col, Row, Table, Button, Modal } from '@bootstrap'
import CustomPagination from '@/components/ui/pagination/CustomPagination'
import { useAppSelector } from '@/redux/app/hooks'
import Head from 'next/head'
import Link from 'next/link'
import AdministratorHeader from '../../_common/AdministratorHeader'
import AdministratorSearchbar from '../../_common/AdministratorSearchbar'
import RoleRightSidebar from './RoleRightSidebar'

const Role = () => {
  const { currentPageNumber } = useAppSelector(state => state.pagination)
  const [isView, setIsView] = useState<boolean>(false)
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [contact, setContact] = useState<any>([]);

  const totalItems = 30;
  const limit = 10;
  const startIndex = (currentPageNumber - 1) * limit;
  const endIndex = startIndex + limit;
  // const currentItems = data.slice(startIndex, endIndex);

  const toggle = useCallback(() => {
    if (modalShow) {
      setModalShow(false)
      setIsView(false);
    } else {
      setModalShow(true)
    }
  }, [modalShow])

  const HandleViewModel = useCallback(() => {
    setIsView(true);
    toggle();
  }, [toggle]);

  const handleDeleteContact = () => {
    if (contact) {
      // dispatch(onDeleteContact(contact.id));
      setDeleteModal(false);
      setContact(null)
    }
  };
  const toggleDelete = () => {
    setDeleteModal(false);
    setContact(null)
  }

  const onClickDelete = (contact: any) => {
    setContact(contact);
    setDeleteModal(true);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Roles</title>
      </Head>

      <AdministratorHeader title="Roles">
        <AdministratorSearchbar searchFunction={(e) => { }} />
      </AdministratorHeader>

      <Row className="mt-n5">
        <Col lg={9}>
          <Card>
            <Card.Body >
              <div className="table-responsive table-card">
                <Table className="table-bordered align-middle table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">SR No</th>
                      <th scope="col">Role Name</th>
                      <th scope="col">Display Order</th>
                      <th scope="col">IsActive</th>
                      <th scope="col" style={{ width: "150px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Admin</td>
                      <td>1</td>
                      <td><span className="badge bg-success">IsActive</span></td>
                      <td>
                        <div className="hstack gap-3 flex-wrap justify-content-center">
                          <Link href="#RoleViewModal" onClick={HandleViewModel} className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                          <Link href="/dashboard/administrator/role/add" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                          <Link href="#removeRoleModal" data-bs-toggle="modal" onClick={onClickDelete} className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>User</td>
                      <td>2</td>
                      <td><span className="badge bg-success">IsActive</span></td>
                      <td>
                        <div className="hstack gap-3 flex-wrap justify-content-center">
                          <Link href="#RoleViewModal" onClick={HandleViewModel} className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                          <Link href="/dashboard/administrator/role/add" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                          <Link href="#removeRoleModal" data-bs-toggle="modal" onClick={onClickDelete} className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Admin</td>
                      <td>3</td>
                      <td><span className="badge bg-danger">InActive</span></td>
                      <td>
                        <div className="hstack gap-3 flex-wrap justify-content-center">
                          <Link href="#RoleViewModal" onClick={HandleViewModel} className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                          <Link href="/dashboard/administrator/role/add" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                          <Link href="#removeRoleModal" data-bs-toggle="modal" onClick={onClickDelete} className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>

                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>superAdmin</td>
                      <td>4</td>
                      <td><span className="badge bg-success">IsActive</span></td>
                      <td>
                        <div className="hstack gap-3 flex-wrap justify-content-center">
                          <Link href="#RoleViewModal" onClick={HandleViewModel} className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                          <Link href="/dashboard/administrator/role/add" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                          <Link href="#removeRoleModal" data-bs-toggle="modal" onClick={onClickDelete} className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>User</td>
                      <td>5</td>
                      <td><span className="badge bg-success">IsActive</span></td>
                      <td>
                        <div className="hstack gap-3 flex-wrap justify-content-center">
                          <Link href="#RoleViewModal" onClick={HandleViewModel} className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                          <Link href="/dashboard/administrator/role/add" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                          <Link href="#removeRoleModal" data-bs-toggle="modal" onClick={onClickDelete} className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <CustomPagination dataLength={totalItems} limit={limit} />
        </Col>
        <Col lg={3}>
          <RoleRightSidebar />
        </Col>
      </Row>

      {/* viwe popup */}
      <Modal id="addContactModal" show={modalShow} onHide={() => toggle()}>
        <Modal.Header className="p-4 pb-0 m-2" closeButton>
          <Modal.Title id="addContactModalLabel" className="fs-5 fw-bold">
            Role View
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0 p-4">
          {/* some data show here on view page */}
          <div className="text-center">
            <div className="text-muted">
              <p>Role Name :<span>Admin</span></p>
            </div>
            <div className="mt-4 fs-15">
              <p className="text-muted mx-4 mb-0">Display Order :<span>5</span></p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <p className="text-muted mx-4 mb-0">IsActive :<span>True</span></p>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <p className="text-muted mx-4 mb-0">Description:<span>Test Admin</span></p>
          </div>
        </Modal.Body>
      </Modal>

      <Modal id="removeContactModal" className="fade zoomIn" show={deleteModal} onHide={toggleDelete} centered>
        <Modal.Header className="p-4 pb-0 m-2" closeButton />
        <Modal.Body className="p-md-5">
          <div className="text-center">
            <div className="text-danger">
              <i className="bi bi-trash display-4"></i>
            </div>
            <div className="mt-4 fs-15">
              <h4 className="mb-1">Remove role ?</h4>
              <p className="text-muted mx-4 mb-0">Are you sure you want to remove this role ?</p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <Button variant='light' type="button" className="btn w-sm" onClick={toggleDelete}>Close</Button>
            <Button variant='danger' type="button" className="btn w-sm" id="remove-contact" onClick={handleDeleteContact}>Yes, Delete It!</Button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
export default Role;

'use client'

import React from 'react';
import { Table, Card, Col, Row } from 'react-bootstrap';

import Head from 'next/head';
// import { getContacts as onGetContacts, addNewContact as onAddNewContact, updateContact as onUpdateContact, deleteContact as onDeleteContact } from 'Components/slices/thunk';
// Import Image
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import CustomPagination from '@/components/ui/pagination/CustomPagination';
import AdministratorSearchbar from '../../_common/AdministratorSearchbar';
import AdministratorHeader from '../../_common/AdministratorHeader';
import SubscriptionRightSidebar from './SubscriptionRightSidebar';

const Subscription = () => {
    const dispatch = useAppDispatch();

    const { currentPageNumber } = useAppSelector(state => state.pagination)

    const totalItems = 30;
    const limit = 5;
    const startIndex = (currentPageNumber - 1) * limit;
    const endIndex = startIndex + limit;
    // const currentItems = data.slice(startIndex, endIndex);

    // const selectDashboardData = createSelector(
    //     (state: any) => state.Contacts.contacts,
    //     (contacts) => contacts
    // );
    // Inside your component
    // const contacts = useSelector(selectDashboardData);

    // useEffect(() => {
    //     if (contacts && !contacts.length) {
    //         // dispatch(onGetContacts());
    //     }
    // }, [dispatch, contacts]);


    // useEffect(() => {
    //     setContactList(contacts)
    // }, [contacts]);

    // const toggle = useCallback(() => {
    //     if (modalShow) {
    //         setModalShow(false)
    //         setIsEdit(false);
    //         setContact(null)
    //         setFieldValue(null)
    //     } else {
    //         setModalShow(true)
    //     }
    // }, [modalShow])

    // const toggleDelete = () => {
    //     setDeleteModal(false);
    //     setContact(null)
    // }

    // Delete Contact
    // const onClickDelete = (contact: any) => {
    //     setContact(contact);
    //     setDeleteModal(true);
    // };

    // const handleDeleteContact = () => {
    //     if (contact) {
    //         // dispatch(onDeleteContact(contact.id));
    //         setDeleteModal(false);
    //         setContact(null)
    //     }
    // };

    // Update Contact
    // const handleUpdateContact = useCallback((ele: any) => {
    //     const contact = ele;
    //     setContact({
    //         id: contact.id,
    //         name: contact.name,
    //         email: contact.email,
    //         phone: contact.phone,
    //         country: contact.country,
    //         label: contact.label,
    //         img: contact.img
    //     });
    //     setIsEdit(true);
    //     toggle();
    // }, [toggle]);

    // const handleDeleteContact = () => {
    //     if (contact) {
    //         // dispatch(onDeleteContact(contact.id));
    //         setDeleteModal(false);
    //         setContact(null)
    //     }
    // };
    // const handleImageFile = (event: any) => {
    //     const ImgObject = {
    //         src: URL.createObjectURL(event.currentTarget.files[0]), width: 500, height: 500
    //     }
    //     setFieldValue(ImgObject);
    // };


    const searchContact = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            // setContactList(contacts.filter((data: any) => (data.name.toLowerCase().includes(search))));
        } else {
            // setContactList(contacts);
        }
    };

    // validation
    // const validation: any = useFormik({
    //     // enableReinitialize : use this flag when initial values needs to be changed
    //     enableReinitialize: true,

    //     initialValues: {
    //         img: (contact && contact.img) || dummyuser,
    //         name: (contact && contact.name) || '',
    //         email: (contact && contact.email) || '',
    //         phone: (contact && contact.phone) || '',
    //         country: (contact && contact.country) || '',
    //         label: (contact && contact.label) || '',
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string().required("Please enter a name."),
    //         email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Enter a valid email address").required("Please enter an email."),
    //         phone: Yup.string().required('Phone number is not valid'),
    //         country: Yup.string().required("Please select a country."),
    //         label: Yup.string().required("Please select a label.")
    //     }),
    //     onSubmit: (values) => {
    //         if (isEdit) {
    //             const updateContact = {
    //                 id: contact ? contact.id : 0,
    //                 img: fieldValue || contact.img,
    //                 name: values.name,
    //                 email: values.email,
    //                 phone: values.phone,
    //                 country: values.country,
    //                 label: values.label
    //             };
    //             // update contact
    //             // dispatch(onUpdateContact(updateContact));
    //             validation.resetForm();
    //         } else {
    //             const newContact = {
    //                 id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
    //                 img: fieldValue || dummyuser,
    //                 name: values.name,
    //                 email: values.email,
    //                 phone: values.phone,
    //                 country: values.country,
    //                 label: values.label
    //             };
    //             // save new contact
    //             // dispatch(onAddNewContact(newContact));
    //             validation.resetForm();
    //         }
    //         toggle();
    //     },
    // });

    //     () => [
    //         {
    //             Header: "Name",
    //             disableFilters: true,
    //             filterable: true,
    //             accessor: (cellProps: any) => {
    //                 return (<span>
    //                     <div className="d-flex align-items-center">
    //                         <div className="flex-shrink-0 me-2">
    //                             <div className="avatar-xs rounded-circle">
    //                                 <Image src={cellProps.img} alt="" className="img-fluid rounded-circle d-block user-img" />
    //                             </div>
    //                         </div>
    //                         <div className="flex-grow-1">
    //                             <h6 className="fw-medium mb-1 user-name">{cellProps.name}</h6>
    //                         </div>
    //                     </div>
    //                 </span>)
    //             },
    //         },
    //         {
    //             Header: "Email",
    //             disableFilters: true,
    //             filterable: true,
    //             accessor: (cellProps: any) => {
    //                 return cellProps.email;
    //             },
    //         },
    //         {
    //             Header: "Phone",
    //             disableFilters: true,
    //             filterable: true,
    //             accessor: (cellProps: any) => {
    //                 return cellProps.phone;
    //             },
    //         },
    //         {
    //             Header: "Country",
    //             disableFilters: true,
    //             filterable: true,
    //             accessor: (cellProps: any) => {
    //                 return cellProps.country;
    //             },
    //         },
    //         {
    //             Header: "Label",
    //             disableFilters: true,
    //             filterable: true,
    //             accessor: (cellProps: any) => {
    //                 switch (cellProps.label) {
    //                     case "Business":
    //                         return (<span className="badge text-info bg-info-subtle"> {cellProps.label}</span>)
    //                     case "Family":
    //                         return (<span className="badge text-success bg-success-subtle"> {cellProps.label}</span>)
    //                     case "Friends":
    //                         return (<span className="badge badge-soft-secondary"> {cellProps.label}</span>)
    //                     case "Imported":
    //                         return (<span className="badge badge-soft-danger"> {cellProps.label}</span>)
    //                     default:
    //                         return (<span className="badge text-info bg-info-subtle"> {cellProps.label}</span>)
    //                 }
    //             },
    //         },
    //         {
    //             Header: "Action",
    //             disableFilters: true,
    //             accessor: (cellProps: any) => {
    //                 return (<span>
    //                     <div className="d-flex align-items-center gap-2 justify-content-center">
    //                         <div>
    //                             <Link href="#viewContactoffcanvas" data-bs-toggle="offcanvas"
    //                                 onClick={() => { setInfo(cellProps); setIsOffcanvas(true) }}
    //                                 className="text-muted px-1 d-block viewlist-btn">
    //                                 <i className="bi bi-eye-fill"></i>
    //                             </Link>
    //                         </div>
    //                         <div>
    //                             <Link href="#addContactModal"
    //                                 onClick={() => handleUpdateContact(cellProps)}
    //                                 className="text-muted px-1 d-block">
    //                                 <i className="bi bi-pencil-fill"></i>
    //                             </Link>
    //                         </div>
    //                         <div>
    //                             <Link href="#removeContactModal" data-bs-toggle="modal" className="text-muted px-1 d-block"
    //                                 onClick={() => onClickDelete(cellProps)}
    //                             >
    //                                 <i className="bi bi-trash-fill"></i>
    //                             </Link>
    //                         </div>
    //                     </div>
    //                 </span>)
    //             },
    //         },
    //     ],
    //     [handleUpdateContact]
    // );

    return (
        <React.Fragment>
            <Head>
                <title>Subscription</title>
            </Head>

            <AdministratorHeader title="Subscription">
                <AdministratorSearchbar searchFunction={searchContact} />
            </AdministratorHeader>

            <Row className="mt-n5">
                <Col lg={9}>
                    <Card>
                        <Card.Body >
                            <div className="table-responsive table-card">
                                <Table className="table-bordered align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">SR. No</th>
                                            <th scope="col">Subscription Type Name</th>
                                            <th scope="col">Subscription Months</th>
                                            <th scope="col">Display Order</th>
                                            <th scope="col">IsActive</th>
                                            <th scope="col" style={{ width: "150px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Yearly</td>
                                            <td>12</td>
                                            <td>1</td>
                                            <td><span className="badge bg-success">IsActive</span></td>
                                            <td>
                                                <div className="hstack gap-3 flex-wrap justify-content-center">
                                                    <Link href="#" className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Half Yearly</td>
                                            <td>6</td>
                                            <td>2</td>
                                            <td><span className="badge bg-success">IsActive</span></td>
                                            <td>
                                                <div className="hstack gap-3 flex-wrap justify-content-center">
                                                    <Link href="#" className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Months</td>
                                            <td>1</td>
                                            <td>3</td>
                                            <td><span className="badge bg-danger">InActive</span></td>
                                            <td>
                                                <div className="hstack gap-3 flex-wrap justify-content-center">
                                                    <Link href="#" className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Half Yearly</td>
                                            <td>6</td>
                                            <td>4</td>
                                            <td><span className="badge bg-success">IsActive</span></td>
                                            <td>
                                                <div className="hstack gap-3 flex-wrap justify-content-center">
                                                    <Link href="#" className="text-muted px-1 d-block viewlist-btn"><i className="bi bi-eye-fill"></i></Link>
                                                    <Link href="#" className="link-success fs-15"><i className="ri-edit-2-line"></i></Link>
                                                    <Link href="#" className="link-danger fs-15"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            {/* </div> */}
                        </Card.Body>
                    </Card>
                    <CustomPagination dataLength={totalItems} limit={limit} />

                </Col>
                <Col lg={3}>
                    <SubscriptionRightSidebar />
                </Col>
            </Row>
        </React.Fragment >
    );
}

export default Subscription;
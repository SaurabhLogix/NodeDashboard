import React, { useCallback, useState } from 'react'
import { Button, Card } from '@bootstrap'
import Link from 'next/link'

export default function RoleRightSidebar() {
    const [modalShow, setModalShow] = useState<boolean>(false);
    const [isOffcanvas, setIsOffcanvas] = useState<boolean>(false);
    const [info, setInfo] = useState<any>("");
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    const [contactList, setContactList] = useState<any>([])
    const [activeList, setActiveList] = useState<any>("all")

    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [contact, setContact] = useState<any>([]);

    const [fieldValue, setFieldValue] = useState<any>();


    const labelFilter = (ele: string) => {
        let filterData
        if (ele === "all") {
            // filterData = contacts.filter((item: any) => item)
        } else {
            // filterData = contacts.filter((item: any) => item.tab === ele || item.label === ele)
        }
        setActiveList(ele)
        setContactList(filterData)
    }

    const toggle = useCallback(() => {

        if (modalShow) {
            setModalShow(false)
            setIsEdit(false);
            setContact(null)
            setFieldValue(null)
        } else {
            setModalShow(true)
        }
    }, [modalShow])

    return (
        <Card style={{ minHeight: "calc(100vh - 70px - 60px - 142px)" }}>
            <Card.Body>
                <Link href="/dashboard/administrator/role/add"><Button variant='primary' type="button" className="w-100 addContact-modal" onClick={() => toggle()}><i className="bi bi-plus align-middle"></i> Add Contact</Button></Link>

                <div className="mt-3 mx-n4 px-4 contact-sidebar-menu" data-simplebar>
                    <ul className="list-unstyled contact-menu-list">
                        <li>
                            <Link href="#!" className={activeList === "all" ? "active" : ""} onClick={() => labelFilter("all")}><i className="ri-folder-2-line align-bottom me-2"></i> <span className="menu-list-link" data-tab="all">All Contacts</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "frequently" ? "active" : ""} onClick={() => labelFilter("frequently")}><i className="ri-history-line align-bottom me-2"></i> <span className="menu-list-link">Frequently Contacted</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "important" ? "active" : ""} onClick={() => labelFilter("important")}><i className="ri-star-line align-bottom me-2"></i> <span className="menu-list-link">Important</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "groups" ? "active" : ""} onClick={() => labelFilter("groups")}><i className="ri-group-line align-bottom me-2"></i> <span className="menu-list-link">Groups</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "trash" ? "active" : ""} onClick={() => labelFilter("trash")}><i className="ri-delete-bin-line align-bottom me-2"></i> <span className="menu-list-link">Deleted</span></Link>
                        </li>
                    </ul>

                    <p className="text-muted mb-2">Labels</p>
                    <ul className="list-unstyled contact-menu-list">
                        <li>
                            <Link href="#!" className={activeList === "Friends" ? "active text-body" : "text-body"} onClick={() => labelFilter("Friends")}><i className="bi bi-tag-fill align-middle me-2 text-secondary"></i> <span className="menu-list-link" data-label="Friends">Friends</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "Family" ? "active text-body" : "text-body"} onClick={() => labelFilter("Family")}><i className="bi bi-tag-fill align-middle me-2 text-success"></i> <span className="menu-list-link" data-label="Family">Family</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "Business" ? "active text-body" : "text-body"} onClick={() => labelFilter("Business")}><i className="bi bi-tag-fill align-middle me-2 text-info"></i> <span className="menu-list-link" data-label="Business">Business</span></Link>
                        </li>
                        <li>
                            <Link href="#!" className={activeList === "Imported" ? "active text-body" : "text-body"} onClick={() => labelFilter("Imported")}><i className="bi bi-tag-fill align-middle me-2 text-danger"></i> <span className="menu-list-link" data-label="Imported">Imported</span></Link>
                        </li>
                    </ul>
                </div>
            </Card.Body >
        </Card >
    )
}

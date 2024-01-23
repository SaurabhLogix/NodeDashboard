'use client'

import React from 'react'
import { Button, Dropdown, DropdownMenu, DropdownToggle } from '@bootstrap'
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks';
import { changeLayoutMode } from '@/redux/features/dashboard/layout/thunk';
import SearchModal from './SearchModal';
import BrowseAppsDropdown from './BrowseAppsDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import Logo from '@/components/logo/Logo';
import Link from 'next/link';
import { LAYOUT_MODE_TYPES, LAYOUT_TYPES } from '@/redux/features/dashboard/layout/layout';
import BottomHeader from './BottomHeader';
import BreadCome from './BreadCome';

export default function Header() {
    const dispatch = useAppDispatch();
    const { layoutType, layoutModeType } = useAppSelector(state => state.layout);

    const toogleMenuBtn = () => {
        var windowSize = document.documentElement.clientWidth;

        if (windowSize > 767)
            document.querySelector(".hamburger-icon")?.classList.toggle('open');

        //For collapse horizontal menu
        if (document.documentElement.getAttribute('data-layout') === "horizontal") {
            document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
        }

        //For collapse vertical menu
        if (document.documentElement.getAttribute('data-layout') === "vertical") {
            if (windowSize < 1025 && windowSize > 767) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
            } else if (windowSize > 1025) {
                document.body.classList.remove('vertical-sidebar-enable');
                (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
            } else if (windowSize <= 767) {
                document.body.classList.add('vertical-sidebar-enable');
                document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
        }

        //Two column menu
        if (document.documentElement.getAttribute('data-layout') === "twocolumn") {
            document.body.classList.contains('twocolumn-panel') ? document.body.classList.remove('twocolumn-panel') : document.body.classList.add('twocolumn-panel');
        }
    };

    return (
        <React.Fragment>
            <header id="page-topbar" style={{border:"none"}}>
                <div className="layout-width">
                    <div className="navbar-header" style={{height:"35px", marginTop:"10px", borderBottom:"1px solid aliceblue"}}>
                        <div className="d-flex">
                            
                            <button
                                type="button"
                                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                                id="topnav-hamburger-icon"
                                onClick={toogleMenuBtn}
                            >

                                <span className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>

                            
                        </div>

                        <div className="d-flex align-items-center">

                            <div className="d-md-none topbar-head-dropdown header-item">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle" id="page-header-search-dropdown" data-bs-toggle="modal" data-bs-target="#searchModal">
                                    <i className="bi bi-search fs-16"></i>
                                </button>
                            </div>
                            <SearchModal />
                            <ProfileDropdown />
                            <BrowseAppsDropdown />
                            
                            

                            

                            <NotificationDropdown />
                            
                        </div>
                    </div>
                    <BottomHeader />
                    
                    <BreadCome />
                </div>
                
                
            </header>
            
            
            

            <div id="removeNotificationModal" className="modal fade zoomIn" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
                        </div>
                        <div className="modal-body p-md-5">
                            <div className="text-center">
                                <div className="text-danger">
                                    <i className="bi bi-trash display-4"></i>
                                </div>
                                <div className="mt-4 fs-15">
                                    <h4 className="mb-1">Are you sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                <Button type="button" variant="light" className="w-sm" data-bs-dismiss="modal">Close</Button>
                                <Button type="button" variant="danger" className="w-sm" id="delete-notification">Yes, Delete It!</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

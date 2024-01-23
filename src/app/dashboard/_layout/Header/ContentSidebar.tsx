'use client'

import React, { useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import { Container } from '@bootstrap';
import SimpleBar from 'simplebar-react';

import VerticalLayout from './VerticalLayout';
import HorizontalLayout from './HorizontalLayout';
import TwoColumnLayout from './TwoColumnLayout';
import Logo from '@/components/logo/Logo';
import { useAppSelector } from '@/redux/app/hooks';

const ContentSidebar = () => {
    const { layoutType, layoutModeType } = useAppSelector(state => state.layout)

    useLayoutEffect(() => {
        const verticalOverlay = document.querySelector(".vertical-overlay");
        // if (verticalOverlay) {
        //     verticalOverlay.addEventListener("click", function () {

        //     });
        // }
    });

    const addEventListenerOnSmHoverMenu = () => {
        // add listener Sidebar Hover icon on change layout from setting
        if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
        } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        } else {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        }
    };

    return (
        <React.Fragment>
            <div className="app-menu navbar-menu">
                

                {layoutType === "horizontal" ? (
                    <div id="scrollbar">
                        <Container fluid>
                            <div id="two-column-menu"></div>
                            <ul className="navbar-nav" id="navbar-nav">
                                <HorizontalLayout />
                            </ul>
                        </Container>
                    </div>
                ) : layoutType === 'twocolumn' ? (
                    <React.Fragment>
                        <TwoColumnLayout layoutType={layoutType} />
                        <div className="sidebar-background"></div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <SimpleBar id="scrollbar" className="h-100">
                            <Container fluid>
                                <div id="two-column-menu"></div>
                                <ul className="navbar-nav" id="navbar-nav">
                                    <VerticalLayout layoutType={layoutType} />
                                </ul>
                            </Container>
                        </SimpleBar>
                        <div className="sidebar-background"></div>
                    </React.Fragment>
                )}
            </div>

            <div className="vertical-overlay" onClick={() => document.body.classList.remove("vertical-sidebar-enable")}></div>
        </React.Fragment>
    );
}

export default ContentSidebar;
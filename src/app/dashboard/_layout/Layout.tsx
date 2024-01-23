'use client'

import React from "react";
import TopBar from "./Topbar";
import Sidebar from "./Sidebar";
import Header from "./Header/Header";

import Footer from "./Footer";
import RightSidebar from "./RightSidebar";
import BottomHeader from "./Header/BottomHeader";
import FootertopTabs from "./Header/FootertopTabs";
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import IconBars from "./Header/IconBars";




export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <React.Fragment>
            <TopBar />
            <Header />

            <Sidebar />
            <section className="main-content">
                <div className="page-content" style={{ marginTop: "150px" }}>
                    <Container fluid={true}>



                        <Row>
                            
                            <Col xxl={11}>
                                
                                <FootertopTabs />
                                
                                {/* {children} */}
                            </Col>
                            <Col xxl={1}>
                            
                            </Col>
                            
                        </Row>


                        
                    </Container>


                </div>
            </section>
            <Footer />
            <RightSidebar />
        </React.Fragment>
    )
}
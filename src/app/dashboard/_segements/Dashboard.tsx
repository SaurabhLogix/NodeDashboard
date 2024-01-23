import React from 'react';
import Head from 'next/head';
import { Col, Row } from '@bootstrap';
import Widget from "./Widget";
import Revenue from "./Revenue";
import MoreSales from './MoreSales';
import RecentOrders from './RecentOrders';
import RecentChat from './RecentChat';
import BestSellingProducts from './BestSellingProducts';
import ProductDelivery from './ProductDelivery';
import SalesByCategory from './SalesByCategory';
import StockReport from './StockReport';
import TopRetailSalesLocation from './TopRetailSalesLocation';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
            </Head>

            <Row>
                <Col>
                    <div className="h-100">
                        <Row>
                            <Widget />
                            <Revenue dataColors='["--tb-light", "--tb-primary", "--tb-secondary"]' />
                        </Row>
                        <Row>
                            <MoreSales />
                            <RecentOrders />
                        </Row>
                        <Row>
                            <BestSellingProducts />
                            <ProductDelivery />
                        </Row>
                        <Row>
                            <SalesByCategory dataColors='["--tb-primary", "--tb-info", "--tb-success", "--tb-secondary"]' />
                            <StockReport />
                        </Row>
                        <TopRetailSalesLocation />
                    </div>
                </Col>

                <RecentChat />
            </Row>
        </React.Fragment>
    );
}

export default Dashboard;
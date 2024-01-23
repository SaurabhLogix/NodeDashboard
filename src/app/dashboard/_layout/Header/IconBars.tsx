'use client';
import React, { useState } from 'react';
import { Button, Card, Collapse, Col } from 'react-bootstrap';
import Link from 'next/link';


const IconBars = () => {
    const [open, setOpen] = useState(false);
    const [collOpen, setcollOpen] = useState(true);
    const [iconColl, seticonColl] = useState(true);
    const [iconColl2, seticonColl2] = useState(true);
    const [blockColl, setblockColl] = useState(true);
    const [blockColl2, setblockColl2] = useState(true);

    const [coll3, setcoll3] = useState(true);
    const [coll4, setcoll4] = useState(true);

    const t_coll3 = () => {
        setcoll3(!coll3);
    };

    const t_coll4 = () => {
        setcoll4(!coll4);
    };

    const t_coll5 = () => {
        setcoll3(!coll3);
        setcoll4(!coll4);
    };

    return (
        <React.Fragment>
            <Col xxl={6}>
                <Card>
                    
                    <Card.Body>
                        
                        <div className="mb-3">
                            <Button variant='primary' onClick={() => setcollOpen(!collOpen)}>
                            <i className="ri-arrow-down-circle-line fs-16"></i>
                            </Button>
                        </div>
                        <Collapse in={collOpen} dimension="width">
                            <div id='example-collapse-text'>
                                <Card body className="mb-0" style={{ width: "300px" }}>
                                    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                                </Card>
                            </div>
                        </Collapse>
                    </Card.Body>
                    
                    
                </Card>
            </Col>



        </React.Fragment>
    );
};

export default IconBars;

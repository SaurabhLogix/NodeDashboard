import React from 'react'
import { Container, Spinner } from '@bootstrap';

export default function DashboardLoading() {
    return (
        <Container className='py-5 my-5 d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="warning" />
        </Container>
    )
}

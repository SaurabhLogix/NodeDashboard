import React from 'react'
import { Container, Spinner } from '@bootstrap';

export default function Loading() {
  return (
    <Container className='vh-100 d-flex justify-content-center align-items-center'>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="warning" />
    </Container>
  )
}

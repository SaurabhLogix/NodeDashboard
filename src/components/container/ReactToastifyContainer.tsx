'use client'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function ReactToastifyContainer() {
    return (
        <ToastContainer
            autoClose={2000} limit={1} closeButton={false}
        />
    )
}

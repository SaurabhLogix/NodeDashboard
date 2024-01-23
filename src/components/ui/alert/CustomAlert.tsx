import React, { useEffect, useState } from 'react'
import { Alert } from '@bootstrap'

type CustomAlertProps = {
    children: React.ReactNode;
    variant: "info" | 'danger' | 'success' | 'warning' | 'secondary' | 'light' | 'dark';
    dismissible?: boolean;
    autoClose?: boolean;
    delay?: number;
}

export default function CustomAlert({ children, variant, dismissible, autoClose, delay }: CustomAlertProps) {
    const [visibleAlert, setVisibleAlert] = useState(true);

    useEffect(() => {
        const timeID = setTimeout(() => setVisibleAlert(false), delay || 5000)

        return () => clearTimeout(timeID)
    }, [delay])

    return (
        <Alert
            variant={variant}
            dismissible={dismissible ? true : false}
            onClose={() => setVisibleAlert(false)}
            show={autoClose ? visibleAlert : false}
        >
            {children}
        </Alert>
    )
}

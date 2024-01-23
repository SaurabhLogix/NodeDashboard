import React from 'react'
import NonAuthenticateLayout from '@/components/layout/NonAuthenticateLayout';

const AutheticationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <NonAuthenticateLayout>{children}</NonAuthenticateLayout>
    )
}

export default AutheticationLayout;



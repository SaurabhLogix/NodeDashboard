import React from 'react';
import NonAuthenticateLayout from '@/components/layout/NonAuthenticateLayout';
import SuccessMessage from '@/components/common/SuccessMessage';

export default function Success() {
    return (
        <NonAuthenticateLayout>
            <SuccessMessage />
        </NonAuthenticateLayout>
    )
}

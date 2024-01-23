import React from 'react'

export default function InputContainer({ children, className }: { children: React.ReactNode, className?: 'string' }) {
    return (
        <div className={`mb-3 ${className}`}>{children}</div>
    )
}

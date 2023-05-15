'use client'

interface Props {
    children: React.ReactNode
}

export default async function Providers({ children }: Props) {
    return (
        <>
            {children}
        </>
    )
}

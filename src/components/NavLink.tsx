'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.css'
import React from 'react'

interface Props {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
    const pathname: String = usePathname()
    const isActive: boolean = pathname === href

    return (
        <Link href={href} className={isActive ? `${styles.active}` : ''}>
            {children}
        </Link>
    )
}

export default NavLink
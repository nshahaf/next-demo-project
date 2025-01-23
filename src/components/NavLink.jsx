'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.css'

export default function NavLink({ href, children }) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link href={href} className={isActive ? `${styles.active}` : ''}>
            {children}
        </Link>
    )
}
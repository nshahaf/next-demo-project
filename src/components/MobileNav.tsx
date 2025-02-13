'use client'
import styles from './Header.module.css'
import Image from 'next/image'
import CloseIcon from '@public/icon-menu-close.svg'
import OpenIcon from '@public/icon-menu.svg'
import { useState } from 'react'
import NavLink from './NavLink'

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                <Image src={OpenIcon} alt="Open menu" style={{ opacity: !isOpen ? 1 : 0 }} />
                <Image src={CloseIcon} alt="Close menu" fill style={{ opacity: isOpen ? 1 : 0 }} />
            </div>
            <nav className={styles.mobileNav} style={{ right: isOpen ? '0' : '-400px' }} >
                <NavLink href="/">Home</NavLink>
                <NavLink href="/new">New</NavLink>
                <NavLink href="/popular">Popular</NavLink>
                <NavLink href="/trending">Trending</NavLink>
                <NavLink href="/categories">Categories</NavLink>
            </nav>

        </>
    )
}

export default MobileNav
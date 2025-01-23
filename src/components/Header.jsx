
import Image from 'next/image'
import styles from './Header.module.css'
import NavLink from '@/components/NavLink'
import logo from '@public/logo.svg'

export default function Header() {
    return (
        <header className={styles.header}>
            <span className='logo-container'>
                <Image src={logo} alt="logo" width={41} height={41} />
            </span>
            <nav className={styles.nav}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/new">New</NavLink>
                <NavLink href="/popular">Popular</NavLink>
                <NavLink href="/trending">Trending</NavLink>
                <NavLink href="/categories">Categories</NavLink>
            </nav>
        </header>
    )
}
import styles from "./Cards.module.css"
import Image from "next/image"

const ImageSrc = [
    "/image-retro-pcs.jpg",
    "/image-top-laptops.jpg",
    "/image-gaming-growth.jpg",
]

export default function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <Image src={ImageSrc[0]} alt="image" width={101} height={128} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>01</h4>
                    <p className={styles.cardText}>Reviving Retro PCs</p>
                    <p className={styles.cardDescription}>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image src={ImageSrc[1]} alt="image" width={101} height={128} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>02</h4>
                    <p className={styles.cardText}>Top 10 Laptops of 2022</p>
                    <p className={styles.cardDescription}>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className={styles.card}>
                <Image src={ImageSrc[2]} alt="image" width={101} height={128} className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>03</h4>
                    <p className={styles.cardText}>The Growth of Gaming</p>
                    <p className={styles.cardDescription}>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}
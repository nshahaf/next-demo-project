import Link from "next/link"
import styles from "./Cards.module.css"
import Image from "next/image"

export default function Cards({ cards = [] }) {
    return (
        <div className={styles.cards}>
            {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                    <Image src={card.imgUrl} alt="image" width={101} height={128} className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h4 className={styles.cardTitle}>{card.title}</h4>
                        <Link href={`/popular/${card.id}`}>
                            <p className={styles.cardText}>{card.text}</p>
                        </Link>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
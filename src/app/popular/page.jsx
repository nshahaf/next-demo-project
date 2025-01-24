//rendering static data from a database or a file on the server side

import styles from '@/components/Cards.module.css'
import Image from 'next/image'

async function fetchCards() { // Fetch cards posts from API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${baseUrl}/api/cards`, { method: 'GET', cache: 'no-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }

    const data = await res.json()
    return data
}

export default async function page() {
    const cards = await fetchCards()

    return (
        <div>
            <h5 style={{ textAlign: 'center', marginBlock: '40px', }}>Fetching data - server component</h5>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card} >
                        <Image src={card.imgUrl} alt="image" width={101} height={128} className={styles.cardImage} />
                        <div className={styles.cardContent}>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardText}>{card.text}</p>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}



import styles from "./page.module.css"
import Cards from "@/components/Cards"
import Aside from "@/components/Aside"
import textData from "@/data/textData.json"

export default function Page() {
  const { cards, articles } = textData

  return (
    <div className={styles.grid}>
      <div className={styles.hero}></div>

      <div className={styles.content}>
        <h2 className={styles.contentTitle}>The Bright Future of Web 3.0?</h2>
        <div>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
      </div>
      <Aside articles={articles.slice(0, 3)} />
      <Cards cards={cards.slice(0, 3)} />
    </div>

  )
}

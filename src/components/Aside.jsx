import styles from "./Aside.module.css"

export default function Aside() {
    return (
        <aside className={styles.aside}>
            <h3 className={styles.mainTitle}>New</h3>
            <p className={styles.secondaryTitle}>Hydrogen VS Electric Cars</p>
            <p className={styles.secondaryText}>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr className={styles.line}></hr>
            <p className={styles.secondaryTitle}>The Downsides of AI Artistry</p>
            <p className={styles.secondaryText}>What are the possible adverse effects of on-demand AI image generation?</p>
            <hr className={styles.line}></hr>
            <p className={styles.secondaryTitle}>Is VC Funding Drying Up?</p>
            <p className={styles.secondaryText}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </aside>
    )
}
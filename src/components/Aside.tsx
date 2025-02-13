import Link from "next/link"
import styles from "./Aside.module.css"
import { Articles } from "@/types";

const Aside = ({ articles = [] }: Articles) => {
    return (
        <aside className={styles.aside}>
            <h3 className={styles.mainTitle}>New</h3>
            {articles.map((article, index) => (
                <div key={index}>
                    <Link href={`/new/${article.id}`}>
                        <p className={styles.secondaryTitle} >{article.title}</p>
                    </Link>
                    <p className={styles.secondaryText}>{article.text}</p>
                    {index < articles.length - 1 && <hr className={styles.line} />}
                </div>
            ))}
        </aside>
    )
}

export default Aside
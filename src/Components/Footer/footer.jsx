import reactLogo from "/src/assets/react.svg"
import styles from "./footer.module.css"

export default function Footer() {

    return (
        <>
            <div className={styles.footer}><p>Built with React</p>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.headerLogo} alt="React logo" />
                </a>
            </div>
        </>
    )
}
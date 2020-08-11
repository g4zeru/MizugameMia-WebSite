import * as styles from './styles.module.css'

const AppFooter = () => {
    return (
        <footer>
            <div className={styles.footerContents}>
                <a
                    href="https://github.com/g4zeru/MizugameMia-WebSite/blob/master/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.about}
                >
                    About this page
                </a>
                <div className={styles.iconContainer}>
                    <a
                        href="https://twitter.com/tera_ny"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/twitter_white.svg" className={styles.snsIcon} />
                    </a>
                    <a
                        href="https://github.com/g4zeru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/github_white.svg" className={styles.snsIcon} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter
import * as styles from './styles.module.css'

const SectionBox = (props) => {
    return (
        <section>
            <h2 className={styles.sectionTitle}>{props.title}</h2>
            {props.children}
        </section>
    )
}

export default SectionBox
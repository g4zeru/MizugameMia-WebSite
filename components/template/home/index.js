import * as styles from './styles.module.css'
import SectionBox from '@components/atoms/sectionBox'
const Home = () => {
    return (
        <>
            <div className={styles.borderContainer}>
                <div className={styles.titleContainer}>
                    <div>
                        <h1 className={styles.title}>水瓶ミア</h1>
                        <h2 className={styles.subTitle}>Mia Mizugame</h2>
                    </div>
                    <img src="https://v-clan.jp/wp/wp-content/uploads/2020/05/fab5097d3c815a8a4fd0f66dbb6298aa-640x1163.jpg" className={styles.lifeSizeImage} />
                </div>
                <img src="" />
            </div>
            <SectionBox title="About">
                <div className={styles.vioContents}>
                    <p>Re:Actマルチタレント部門所属</p>
                    <p>はいぱーまるち妹系VTuberとして歌ってみたやゲーム実況、朗読、料理配信など活動の幅は多岐に渡る</p>
                </div>
            </SectionBox>
            <hr />
            <SectionBox title="Recommend">
                <div className={styles.recommendProductsContainer}>
                    <div className={styles.recommendProducts}>
                        <iframe width="500" height="281" src="https://www.youtube.com/embed/AVUyxWPlR0o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="500" height="281" src="https://www.youtube.com/embed/RA8xdVE8UPc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </SectionBox>
        </>
    )
}

export default Home
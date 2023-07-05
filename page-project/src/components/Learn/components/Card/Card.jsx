import styles from './card.module.scss'

export const Card = () => {
    return (

        <div className={`${styles.card}`}>
        <div className={`${styles.cardItem}`}>
                <span>01</span>
                <p className={`cardo`}>Use HDFS & Map <br/> Reduce for storing & <br/> analyzing data at scale.</p>
            </div>
            <div className={`${styles.cardItem}`}>
                <span>02</span>
                <p className={`cardo`}>Consume streaming <br/> data using Spark <br/> Streaming, Flink, and <br/> Storm.</p>
            </div>
            <div className={`${styles.cardItem}`}>
                <span>03</span>
                <p className={`cardo`}>Choose an <br/> appropriate data <br/> storage technology <br/> for your application</p>
            </div>
            <div className={`${styles.cardItem}`}>
                <span>04</span>
                <p className={`cardo`}>Analyze non-<br/>relational data using <br/> HBase, Cassandra, <br/> and MongoDB.</p>
            </div>
        </div>

    )
}
import styles from './card.modules.scss'

export const Card = (props) => {
    return (
      <div className={`flexCenter paddings`}>
            <div className={`${styles.authorContainerCard} flexCenter paddings`}>
                <img src={props.image} alt='book-img'/>
                  <div className={`${styles.authorContainerCardDesc} flexColStart`}>
                      <h5>{props.name}</h5>
                      <span>{props.price}</span>
                      <p>{props.text}</p>
                      <span className={`yellow-circle printed`}>{props.type}</span>
                      <button className={`authorBtn`}>{props.button}</button>             
                  </div>
            </div>
      </div>
    )
}

console.log(Card)
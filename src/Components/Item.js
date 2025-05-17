import styles from "./item.module.css"
export default function ITem({item, index}){
    return(
        <div >
         <div key={index} className={styles.itemContainer}>
            <div className={styles.imageContainer}>
            <img  className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
            </div>
            <div className={styles.nameContainer}>
                  <div className={styles.name}> {item.name}</div>
               <div className={styles.amount}> {item.amount} {item.unit}</div>
            </div>
         </div>
         </div>
    )
}
import styles from "./fooditem.module.css"
export default function FoodItem({food, setFoodId}){
    

    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt="" />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>

            </div>
           <div className={styles.buttonContainer}>
            <button className={styles.itemButton}
            onClick={()=>{
                    setFoodId(food.id)
                    console.log(food.id);
            }}
            >View Recipe</button>
            </div>

        </div>
    )
}
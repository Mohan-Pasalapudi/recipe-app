import ITem from "./Item";

export default function ItemList({food, isLoading}){
     
    return(
        
        <div>
             {isLoading ? (
              <p>Loading...</p>
            ) : (
                 food.extendedIngredients?.map((item,index)=> 
                   <ITem item={item} index={index}/>
                )
            )}
        </div>  
          
        
    )
}
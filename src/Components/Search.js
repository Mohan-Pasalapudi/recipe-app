import {useState} from "react";
import {useEffect} from "react";

import styles from './search.module.css'
const API="https://api.spoonacular.com/recipes/complexSearch";

const API_KEY="4ab083f8b24d4a7a9278b18e4b7476b0";

export default function Search({foodData, setFoodData}){

    const [query,setQuery] = useState("")

    useEffect(() => {
        async function fetchFood(){
            const res = await fetch(`${API}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);

        }
        fetchFood();
    }, [query])
    return <div className={styles.searchContainer}>
        <input
             className={styles.input} 
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        type="text"
        />
    </div>
}
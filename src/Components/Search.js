import {useState} from "react";
import {useEffect} from "react";

import styles from './search.module.css'
const API="https://api.spoonacular.com/recipes/complexSearch";

const API_KEY="6159a1ac97ba4a7382af0db18de7c6b9";

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
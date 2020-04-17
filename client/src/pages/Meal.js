import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";

function Meals() {
    const searchRef = useRef();
    const [searchState, setSearchState] = useState([]);
    const [resultState, setResultState] = useState({});
    const [recipeState, setRecipeState] = useState([]);

    useEffect(() => {

    }, [resultState]);

    const searchFood = e => {
        e.preventDefault();
        API.searchFood(searchState.search).then(res => {
            setResultState({
                name: res.data.foods[0].food_name,
                calories: res.data.foods[0].nf_calories,
                fat: res.data.foods[0].nf_total_fat,
                carbs: res.data.foods[0].nf_total_carbohydrate,
                protein: res.data.foods[0].nf_protein
            });
        });
    }

    const addFood = e => {
        e.preventDefault();
        recipeState.concat(
            {
                calories: resultState.calories,
                fat: resultState.fat,
                carbs: resultState.carbs,
                protein: resultState.protein
            }
        );
        console.log(recipeState);
    }

    return (
        <div>
            <Navbar />
            <h1>What are you eating today?</h1>
            <form onSubmit={searchFood}>
                <h4>Search for a food:</h4>
                <input
                    type="text"
                    ref={searchRef}
                    onChange={() => {
                        setSearchState({
                            search: searchRef.current.value
                        })
                    }}
                />
                <button type="submit">Search</button>
            </form>
            <button onClick={() => { console.log(resultState) }}>Please Work</button>
            <ul>
                {resultState.name ?
                    <li>{resultState.name}<button onClick={addFood}>Add Food</button></li> :
                    <li>Search Results</li>}
            </ul>
        </div>
    )
}
export default Meals;
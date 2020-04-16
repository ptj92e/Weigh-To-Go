import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";

function Meals() {
    const searchRef = useRef();
    const [searchState, setSearchState] = useState([]);
    const [resultState, setResultState] = useState([]);
    const [recipteState, setRecipeState] = useState([]);

    useEffect(() => {
    }, []);

    const searchFood = e => {
        e.preventDefault();
        API.searchFood(searchState.search).then(res => {
            setResultState({
                result: {
                    name: res.data.foods[0].food_name,
                    calories: res.data.foods[0],
                    fat: res.data.foods[0].nf_total_fat,
                    carbs: res.data.foods[0].nf_total_carbohydrate,
                    protein: res.data.foods[0].nf_protein
                }
            });
        });
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
                <ul>
                    {resultState === null ?
                        <li>Search For Results</li>
                        :
                        resultState.result.map(result => (
                            <li>{result[0].name}<button onClick={console.log(resultState)}>Add Food</button></li>
                        ))}
                </ul>
            </form>
        </div>
    )
}
export default Meals;
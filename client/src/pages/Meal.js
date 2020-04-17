import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";

function Meals() {
    const searchRef = useRef();
    const nameRef = useRef();
    const servingRef = useRef();
    const [searchState, setSearchState] = useState([]);
    const [resultState, setResultState] = useState({});
    const [recipeState, setRecipeState] = useState([]);
    const [mealState, setMealState] = useState({
        name: "",
        calories: "",
        servings: "",
        total_calories: "",
        fat: "",
        carbs: "",
        protein: ""
    });

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
        setRecipeState(
            [
                ...recipeState,
                {
                    calories: resultState.calories,
                    fat: resultState.fat,
                    carbs: resultState.carbs,
                    protein: resultState.protein
                }
            ]
        );
    }

    const nutritionCalc = e => {
        e.preventDefault();
        let name = nameRef.current.value;
        let servings = servingRef.current.value;
        let calories = 0;
        let fat = 0;
        let carbs = 0;
        let protein = 0;
        if (recipeState.length === 0) {
            alert("There are no ingredients");
        } else {
            for (let i = 0; i < recipeState.length; i++) {
                calories = calories += recipeState[i].calories;
                fat = fat += recipeState[i].fat;
                carbs = carbs += recipeState[i].carbs;
                protein = protein += recipeState[i].protein;
            }
            setMealState({
                name: name,
                servings: servings,
                calories: calories,
                total_calories: calories,
                fat: fat,
                carbs: carbs,
                protein: protein
            });
        }
    }

    return (
        <div>
            <Navbar />
            <h1>What is the name of this meal?</h1>
            <form>
                <input
                    type="text"
                    required ref={nameRef}
                />
                <p>How many servings did you have?</p>
                <select ref={servingRef}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
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
                        {resultState.name ?
                            <li>{resultState.name}<button onClick={addFood}>Add Food</button></li> :
                            <li>Search Results</li>}
                    </ul>
                </form>
                <button onClick={nutritionCalc} type="submit">Save Meal</button>
            </form>
            <button onClick={() => console.log(mealState)}>Please Have Worked</button>
        </div>
    )
}
export default Meals;
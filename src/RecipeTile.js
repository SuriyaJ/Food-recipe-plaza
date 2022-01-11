import React from 'react';
import "./RecipeTile.css";

function RecipeTile({ recipe }) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && ( <div className = 'recipetile'
            onClick = {
                () => { window.open(recipe["recipe"]["url"]); }
            } >
            <
            img className = 'recipetile_image'
            src = { recipe["recipe"]["image"] }
            alt = 'no img' / >
            <p className = 'recipetile_name' > { recipe["recipe"]["label"] } </p>
             </div >
        )
    );
}

export default RecipeTile;
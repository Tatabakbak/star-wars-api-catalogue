import React from "react";

const PlanetView = ({planet}) => {
    const {id, name, population, climate, terrain, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet-image" alt="planet"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Climate</span>
                        <span>{climate}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Terrain</span>
                        <span>{terrain}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PlanetView;
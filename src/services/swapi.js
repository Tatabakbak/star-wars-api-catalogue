export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const people = await this.getResource(`/people/`);
        return people.results.map(this._transformPerson);
    };


    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    };

    getAllPlanets = async () => {
        const planets = await this.getResource(`/planets/`);
        console.log(planets);
        return planets.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    };

    getAllStarships = async () => {
        const starships = await this.getResource(`/starships/`);
        return starships.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship)
    };

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`;
    };

    getAllSpecies = async () => {
        const res = await this.getResource(`/species/`);
        return res.results;
    };

    getSpecie = async (id) => {
        return await this.getResource(`/species/${id}/`);
    };

    getSpecieImage = ({id}) => {
        return `${this._imageBase}/species/${id}.jpg`;
    };

    getAllVehicles = async () => {
        const res = await this.getResource(`/vehicles/`);
        return res.results;
    };

    getVehicle = async (id) =>{
        return await this.getResource(`/vehicles/${id}/`);
    };

    getVehicleImage = ({id}) => {
        return `${this._imageBase}/vehicles/${id}.jpg`;
    };

    _extractId = (url) => {
        const idRegex = /\/([0-9]*)\/$/;
        return url.match(idRegex)[1];
    };

    _transformPlanet = (planet) => {
        //in case of different namings and to restrict received data
        const id = this._extractId(planet.url);
        return {
            id: id,
            name: planet.name,
            population: planet.population,
            climate: planet.climate,
            terrain: planet.terrain,
            diameter: planet.diameter
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    };
}
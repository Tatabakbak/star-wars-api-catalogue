export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        const people = await this.getResource(`/people/`).results;
        return people.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const planets = await this.getResource(`/planets/`).results;
        return planets.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const starships = await this.getResource(`/starships/`).results;
        return starships.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship)
    }

    async getAllSpecies() {
        const res = await this.getResource(`/species/`);
        return res.results;
    }

    async getSpecie(id) {
        return await this.getResource(`/species/${id}/`);
    }

    async getAllVehicles() {
        const res = await this.getResource(`/vehicles/`);
        return res.results;
    }

    async getVehicle(id) {
        return await this.getResource(`/vehicles/${id}/`);
    }

    _extractId(url) {
        const idRegex = /\/([0-9]*)\/$/;
        return url.match(idRegex)[1];
    }

    _transformPlanet(planet) {
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
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship(starship){
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
}
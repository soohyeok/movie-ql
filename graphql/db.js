export let movies = [
    {
        id: 0,
        name: "Avengers",
        score: 9
    },
    {
        id: 1,
        name: "Up",
        score: 7
    },
    {
        id: 2,
        name: "Star Wars",
        score: 6
    },
    {
        id: 3,
        name: "The Godfather",
        score: 9
    },
    {
        id: 4,
        name: "Spiderman",
        score: 6
    },
    
];
export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: (movies.length),
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

const axios = require("axios");
const {Movie} = require("../models/movie");
const MovieListItem = require("../models/movieListItem");
exports.getAll = (req, response) => {
    axios.get('https://api.kinopoisk.dev/movie', {
        params: {
            token: '68GHZCT-9P744TW-PATFQBS-E8M9YA9',
            search: '7-10',
            field: 'rating.kp',
            limit: '100',
            sortField: 'votes.imdb',
            sortType: '-1'
        }
    }).then(res => {
        let movies = [];
        res.data.docs.forEach(m => {
            movies.push(new Movie(m.id, m.name, m.shortDescription,
                m.rating.kp, m.votes.kp, m.year, m.poster.previewUrl, m.description, 100, 100, ['genre'], m.movieLength))
        })
        response.json(movies);
    })
}

exports.getMovieListItems = (req, response) => {
    axios.get('https://api.kinopoisk.dev/movie', {
        params: {
            token: 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06',
            search: '7-10',
            field: 'rating.kp',
            limit: '100',
            sortField: 'votes.imdb',
            sortType: '-1',
            selectFields: 'genres name alternativeName year movieLength id poster.previewUrl'
        }
    }).then(res => {
        let movies = [];
        res.data.docs.forEach(m => {
            movies.push(new MovieListItem(m.genres.map(g => g.name), m.name, m.alternativeName, m.year,
                m.movieLength, m.id, m.poster.previewUrl))
        })
        response.json(movies);
    })
}

exports.getMovieById = (req, response) => {
    axios.get('https://api.kinopoisk.dev/movie', {
        params: {
            token: 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06',
            selectFields: 'genres name alternativeName year movieLength id poster.previewUrl',
            field: 'id',
            search: req.params.id
        }
    }).then(res => {
        let m = res.data;
        let movieListItem = new MovieListItem(m.genres.map(g => g.name), m.name, m.alternativeName, m.year,
            m.movieLength, m.id, m.poster.previewUrl);
        response.json(movieListItem);
    })
}
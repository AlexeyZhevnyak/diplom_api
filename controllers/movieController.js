const axios = require("axios");
const {Movie} = require("../models/movie");
const MovieListItem = require("../models/movieListItem");
exports.getAll = (req, response) => {
    axios.get('https://api.kinopoisk.dev/movie', {
        params: {
            token: 'ZKQSQM2-H8DMP6W-JA19DEP-RSBCV3M',
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
    axios.get('https://api.kinopoisk.dev/v1/movie', {
        params: {
            token: 'ZKQSQM2-H8DMP6W-JA19DEP-RSBCV3M',
            search: '7-10',
            field: 'rating.kp',
            limit: '100',
            sortField: 'votes.imdb',
            sortType: '-1',
            selectFields: 'genres name alternativeName year movieLength id poster.previewUrl countries.name'
        }
    }).then(res => {
        let movies = [];
        res.data.docs.forEach(m => {
            movies.push(new MovieListItem(m.genres.map(g => g.name), m.name, m.alternativeName, m.year,
                m.movieLength, m.id, m.poster.previewUrl, m.countries))
        })
        response.json(movies);
    })
}

exports.getMovieById = (req, response) => {
    axios.get('https://api.kinopoisk.dev/v1/movie', {
        params: {
            token: 'ZKQSQM2-H8DMP6W-JA19DEP-RSBCV3M',
            selectFields: 'genres name alternativeName year movieLength id poster.previewUrl',
            field: 'id',
            search: req.params.id
        }
    }).then(res => {
        let m = res.data.docs[0];
        let movieListItem = new MovieListItem(m.genres.map(g => g.name), m.name, m.alternativeName, m.year,
            m.movieLength, m.id, m.poster.previewUrl);
        response.json(movieListItem);
    })
}
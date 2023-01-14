const axios = require("axios");
const {Movie} = require("../models/movie");
exports.getAll = (req, response) => {
    axios.get('https://api.kinopoisk.dev/movie', {
        params: {
            token: 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06',
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
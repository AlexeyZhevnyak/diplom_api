module.exports.Movie =  class Movie {
    constructor(id, title, tagline, vote_average, vote_count, release_date, poster_path, overview,
                budget, revenue, genres, runtime) {

        this._id = id;
        this._title = title;
        this._tagline = tagline;
        this._vote_average = vote_average;
        this._vote_count = vote_count;
        this._release_date = release_date;
        this._poster_path = poster_path;
        this._overview = overview;
        this._budget = budget;
        this._revenue = revenue;
        this._genres = genres;
        this._runtime = runtime;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline(value) {
        this._tagline = value;
    }

    get vote_average() {
        return this._vote_average;
    }

    set vote_average(value) {
        this._vote_average = value;
    }

    get vote_count() {
        return this._vote_count;
    }

    set vote_count(value) {
        this._vote_count = value;
    }

    get release_date() {
        return this._release_date;
    }

    set release_date(value) {
        this._release_date = value;
    }

    get poster_path() {
        return this._poster_path;
    }

    set poster_path(value) {
        this._poster_path = value;
    }

    get overview() {
        return this._overview;
    }

    set overview(value) {
        this._overview = value;
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        this._budget = value;
    }

    get revenue() {
        return this._revenue;
    }

    set revenue(value) {
        this._revenue = value;
    }

    get genres() {
        return this._genres;
    }

    set genres(value) {
        this._genres = value;
    }

    get runtime() {
        return this._runtime;
    }

    set runtime(value) {
        this._runtime = value;
    }
}


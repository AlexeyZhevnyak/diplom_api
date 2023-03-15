module.exports = class MovieListItem {
    constructor(genres, name, alternativeName, year, movieLength, id, previewUrl, countries) {
        this._genres = genres;
        this._title = name;
        this._alternativeName = alternativeName;
        this._release_date = year;
        this._runtime = movieLength;
        this._id = id;
        this._poster_path = previewUrl;
        this._countries = countries;
    }


    get countries() {
        return this._countries;
    }

    set countries(value) {
        this._countries = value;
    }

    get previewUrl() {
        return this._poster_path;
    }

    set previewUrl(value) {
        this._poster_path = value;
    }

    get genres() {
        return this._genres;
    }

    set genres(value) {
        this._genres = value;
    }

    get name() {
        return this._title;
    }

    set name(value) {
        this._title = value;
    }

    get alternativeName() {
        return this._alternativeName;
    }

    set alternativeName(value) {
        this._alternativeName = value;
    }

    get year() {
        return this._release_date;
    }

    set year(value) {
        this._release_date = value;
    }

    get movieLength() {
        return this._runtime;
    }

    set movieLength(value) {
        this._runtime = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
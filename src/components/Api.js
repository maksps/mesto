export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getAllCards() {
        return fetch(this._url, {
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject("Произошла ошибка");
            });
    }


    addCard(data) {
        return fetch(this._url, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            console.log(res);
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        });
    }
    deleteCard(id) {
        return fetch(`${this._url}${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                console.log(res);
                // return res.json();
            }

            return Promise.reject("Произошла ошибка");
        });
    }


}
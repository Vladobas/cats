const CONFIG_API = {
    url: 'https://cats.petiteweb.dev/api/single/LmaoXD',
    headers: {
        'Content-Type': 'application/json'
    }
}

export class API {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _onResponse(res) {
        return res.ok ? res.json() : Promise.reject({...res, message: 'Ошибка сервера'})
    }

    getAllCats() {
        return fetch(`${this._url}/show`, {
            method: 'GET'
        }).then(this._onResponse)
    }

    addNewCat(data) {
        return fetch(`${this._url}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: this._headers
        }).then(this._onResponse)
    }

    deleteCatById(idCat){
        return fetch(`${this._url}/delete/${idCat}`, {
             method: 'DELETE',
         }).then(this._onResponce)
     }
}

export const api = new API(CONFIG_API);
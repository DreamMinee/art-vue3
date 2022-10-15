export default class Mail {
    constructor() {
        this.baseUrl = "http://localhost:3011";
    }
    check(email) {
        let url = `/check-mail?mail=${email}`;
        return fetch(this.baseUrl + url,  {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'content-type':'application/json'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        })
        .catch(function (err, data) {
            // There was an error
            console.warn('Something went wrong.', err, data);
        });
    }
    add(email, role) {
        let url = `/add-mail?mail=${email}&role=${role}`;
        return fetch(this.baseUrl + url,  {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'content-type':'application/json'
            },
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return data;
        })
            .catch(function (err, data) {
                // There was an error
                console.warn('Something went wrong.', err, data);
            });
    }
}
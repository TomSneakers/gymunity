import {getItem} from "expo-secure-store";

export class FetchRequest {
    constructor(method, ressource) {
        this.method = method;
        this.url = `http://localhost:5149/${ressource}`;
        this.headers = {};
        this.isUsingAuthorization = false;
    }

    withBody(body) {
        this.body = JSON.stringify(body);
        this.headers = {
            'Content-Type': 'application/json',
        };
        return this;
    }

    addHeader(key, value) {
        this.headers[key] = value;
        return this;
    }

    withAuthorization() {
        this.isUsingAuthorization = true;
        return this;
    }

    async send() {
        if (this.isUsingAuthorization) {
            const token = getItem('accessToken');
            this.addHeader('Authorization', `Bearer ${token}`);
        }
        return fetch(this.url, {
            method: this.method,
            headers: this.headers,
            body: this.body,
        });
    }

    static post(ressource) {
        return new FetchRequest('POST', ressource);
    }
}
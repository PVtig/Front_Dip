import axios from "axios";

export default class PostService {
    static async getAll(table) {
        const response = await axios.get('http://localhost/' + table)
        return response;
    }

    static async getById(table, id) {
        const response = await axios.get( 'http://localhost/' + table + '/' + id)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get('http://localhost/'+ id)
        return response;
    }
}

// const response = await axios.get('https://jsonplaceholder.typicode.com/car')
import axios from 'axios';

const request = async (method, path, data , headers = {}) => {
    let response;
    try {
        response = await axios({
            method,
            url: `http://localhost:5000/${path}`,
            data,
            headers,
        });
        return response.data;
    } catch (error) {
        // throw error.response.data || error.message;
        alert(error.response.data.message)
        return {success:false}
    }
};

export default request;

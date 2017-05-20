/**
 * Created by huangling on 19/5/2017.
 */
import request from 'superagent';

const getParams = (params, queryKey) => {
    if (params.indexOf('?') == 0) {
        params = params.substr(1);
    }

    const paramMap = {};
    params.split('&').map(str => {
        const [key, value] = str.split('=');
        paramMap[key] = value;
    });
    return paramMap[queryKey];
};

export const getDocs = (id) => {
    const req = id ? request.get('/db/getDoc', {id}) : request.get('/db/getDoc');
    return req.then(res => res.body)
        .catch(err => {
            console.log('Can not get docs');
            console.log(err.message);
        });
};

export const addDocs = (doc) => {
    doc.id = new Date().getTime() + '';
    return request.post('/db/addDoc').send(doc)
        .then(res => res.body)
        .catch(err => {
            console.log('Can not add docs');
            console.log(err.message);
        });
};

export const submitCustomer = (data) => {
    return request.post('/form/').send(data)
        .then(res => res.body)
        .catch(err => {
            console.log('submit form failed!');
            console.log(err.message);
        });
};

/**
 * Created by huangling on 19/5/2017.
 */
import request from 'superagent';

export const getDocs = () => {
    return request.get('/db/get')
        .then(res => res.body)
        .catch(err => {
            console.log('Can not get docs');
            console.log(err.message);
        });
};

export const addDocs = (doc) => {
    return request.post('/db/add').send(doc)
        .then(res => res.body)
        .catch(err => {
            console.log('Can not add docs');
            console.log(err.message);
        });
};

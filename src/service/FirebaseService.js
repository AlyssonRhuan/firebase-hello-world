import {firebaseDatabase} from '../utils/firebaseUtils'

// referencia https://blog.tecsinapse.com.br/criando-uma-aplica%C3%A7%C3%A3o-react-firebase-passo-a-passo-9ebc5a8a442f

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {
        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static getDataListPaginate = (nodePath, pagina, size = 10) => new Promise((resolve, reject)=>{
        let query = firebaseDatabase
            .ref(nodePath)
            .limitToLast(size);

            query.on('value', dataSnapshot => {
                const items = [];
                dataSnapshot.forEach(childSnapshot => {
                    const item = childSnapshot.val();
                    item['key'] = childSnapshot.key;
                    items.push(item);
                });


                resolve(items);
        });
    })
    
    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static remove = (id, node) => {
        return firebaseDatabase.ref(node + '/' + id).remove();
    };
}
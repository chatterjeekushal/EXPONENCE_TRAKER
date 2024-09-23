
import { Client,Databases,ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66f13ce800298250869d');

    const databases = new Databases(client);

     async function createDocument(input,expance) {
        const response = await databases.createDocument(

            '66f13dd30037e5b990e8',
            '66f13dfa001ed7086af1',
            ID.unique(),
            {
              expontext:input,
              amount:Number.parseInt(expance, 10),
              userid:ID.unique(),
            }
        );

        console.log(response);
        
     } 

    export default createDocument

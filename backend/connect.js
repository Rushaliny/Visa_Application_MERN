const { MongoClient } = require('mongodb')
require('dotenv').config({path: './config.env'})

async function main() {
    
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)

    try{
    
    await client.connect()

    const collections = await client.db('applyvisa').collections()
    collections.forEach((collection) => console.log('MongoDb Connected:'
        ,collection.s.namespace.collection))

    }
    catch(e){
        console.error(e)
    } finally {
        await client.close()
    }
    
}

main()


// connect.cjs
// const { MongoClient } = require('mongodb');
// require('dotenv').config({ path: './config.env' });

// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db);

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log('MongoDB Atlas connected successfully'); 
//   } catch (e) {
//     console.error('MongoDB connection error:', e);
//   }
// }

// // Export the connection function and client
// module.exports = {
//   connectDB,
//   client
// };

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017/";
 
async function insertData() {
    const client = new MongoClient(uri);
 
    try {
        await client.connect();
 
        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");
 
        const pizzas = [
            { name: "Margherita", ingredients: ["tomato", "mozzarella", "basil"], price: 8.99 },
            { name: "Pepperoni", ingredients: ["tomato", "mozzarella", "pepperoni"], price: 9.99 },
            { name: "Veggie Supreme", ingredients: ["tomato", "bell peppers", "onion", "olives"], price: 10.49 }
        ];
       

        const result = await collection.insertMany(pizzas);
        console.log(`${result.insertedCount} documents inserted:`, result.insertedIds);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}
 
 
async function fetchAllData() {
    const client = new MongoClient(uri);
 
    try {

        await client.connect();
 

        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");
 

        const data = await collection.find().toArray();
 

        console.log(data);
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {

        await client.close();
    }
}
 
insertData();
fetchAllData();
 
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";

async function insertData() {
    const client = new MongoClient(uri);

    try {

        await client.connect();


        const db = client.db("libraryDB");
        const collection = db.collection("books");

        const books = [
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                genre: "Fiction",
                publishedYear: 1960,
                availableCopies: 4
            },
            {
                title: "1984",
                author: "George Orwell",
                genre: "Dystopian",
                publishedYear: 1949,
                availableCopies: 6
            },
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                genre: "Classic",
                publishedYear: 1925,
                availableCopies: 5
            },
            {
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                genre: "Fiction",
                publishedYear: 1951,
                availableCopies: 3
            }
        ];


        const result = await collection.insertMany(books);
        console.log(`${result.insertedCount} documents inserted:`, result.insertedIds);
    } catch (err) {
        console.error("Error inserting data:", err);
    } finally {

        await client.close();
    }
}

async function fetchAllData() {
    const client = new MongoClient(uri);

    try {

        await client.connect();


        const db = client.db("libraryDB");
        const collection = db.collection("books");


        const data = await collection.find().toArray();


        console.log(data);
    } catch (err) {
        console.error("Error fetching data:", err);
    } finally {

        await client.close();
    }
}

insertData();

fetchAllData();

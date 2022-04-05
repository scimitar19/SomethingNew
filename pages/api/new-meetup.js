import { MongoClient } from "mongodb";

// /api/neew-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const mongoClient = await MongoClient.connect(
      "mongodb+srv://somePassword:somePassword@cluster0.nhwnb.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = mongoClient.db();
    const collections = db.collection("meetups");

    const result = await collections.insertOne(data);

    console.log(result);

    mongoClient.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;

import mongoose from "mongoose";

let mongooseConnect = false;

export async function connectToMongoDb() {
  if (mongooseConnect) {
    return;
  }
  mongooseConnect = true;
  await mongoose.connect(
    "mongodb+srv://ashutoshsangra:4xj7hdS43aAv70PZ@cluster0.4ucnbnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      dbName: "courses",
    },
  );
  const reply = await mongoose.connection.db?.admin().command({ ping: 1 });
  if (reply) console.log(reply);
  else console.log("reply wsa not received");
  console.log("Connection to mongoDB was successfull");
}

import mongoose from "mongoose";

const connect = () => {
  try {
    const url = process.env.MONGO_URL!;
    mongoose.connect(
      "mongodb+srv://iliachkoidze12:msuKVqit3VUBpAOH@rentcar.czhwfne.mongodb.net/rentalCars"
    );
  } catch (error) {
    console.log(error);
  }
};

export default connect;

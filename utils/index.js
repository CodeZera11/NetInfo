import mongoose from "mongoose";

const connectToDB = async () => {
    console.log("Building connection.......")
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error.message)
    }
    console.log("....Connection successful")
}

export default connectToDB
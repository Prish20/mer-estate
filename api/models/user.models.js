import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://www.freepik.com/free-vector/anonymous-avatars-grey-circles_44471922.htm#query=profile&position=0&from_view=keyword&track=sph&uuid=5d338399-8234-4cd6-9a3f-4499cdf319be"
  },

}, { timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;

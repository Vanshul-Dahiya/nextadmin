import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q) => {
  // to search every single letter
  // i = case insensitive
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ username: {$regex:regex} });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch users!");
  }
};

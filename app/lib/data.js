import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  // to search every single letter
  // i = case insensitive
  const regex = new RegExp(q, "i");

  // how many users on a page
  const ITEM_PER_PAGE = 2;
  //  on page = 2    .skip(ITEM_PER_PAGE * (page - 1));
  // it will skip first 2 items(2 * (2-1)) and show rest no of users(Item_per_page)

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch users!");
  }
};

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

const itemSchema = new mongoose.Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

const defaultItems = [
  new Item({ name: "Welcome to your todolist!" }),
  new Item({ name: "Hit the + button to add a new item." }),
  new Item({ name: "<-- Hit this to delete an item." })
];

app.get("/", async function (req, res) {
  try {
    const foundItems = await Item.find();

    if (foundItems.length === 0) {
      await Item.insertMany(defaultItems);
      return res.redirect("/");
    } else {
      res.render("list", { listTittle: "Today", newListItems: foundItems });
    }
  } catch (err) {
    console.log("Error finding or inserting items:", err);
    res.send("Error retrieving items.");
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.newItem;

  const newItem = new Item({
    name: itemName,
    completed: false,
  });

  try {
    await newItem.save();
    res.redirect("/");
  } catch (err) {
    console.error("Error saving item:", err);
    res.send("Error saving item.");
  }
});

app.post("/complete", async (req, res) => {
  const checkedItemId = req.body.checkbox;

  if (!checkedItemId) {
    console.log("No item ID received.");
    return res.redirect("/");
  }

  try {
    await Item.findByIdAndUpdate(checkedItemId, { completed: true });
    console.log("Item marked as completed.");
    res.redirect("/");
  } catch (err) {
    console.error("Error marking item as completed:", err);
    res.send("Error marking item as completed.");
  }
});

app.post("/delete", async (req, res) => {
  const checkedItemId = req.body.checkbox;

  if (!checkedItemId) {
    console.log("No item ID received.");
    return res.redirect("/");
  }

  try {
    await Item.findByIdAndDelete(checkedItemId);
    console.log("Successfully deleted item.");
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting item:", err);
    res.send("Error deleting item.");
  }
});

app.get("/about", (req, res) => {
  res.render("about");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

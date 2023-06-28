const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(__dirname + '/views'));

app.post("/shortUrls", async (req, res) => {
  const { fullUrl, notes } = req.body;
  // console.log({fullUrl, notes})
  // alert('hello')

  try {
    await ShortUrl.create({ full: fullUrl, notes });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Error creating short URL");
  }
});

app.get("/", async (req, res) => {
  try {
    let searchQuery = req.query.searchInput || "";
    searchQuery = searchQuery.trim();
    
    let shortUrls;
    let searchResults;


    if (searchQuery !== "") {
      shortUrls = await ShortUrl.find({
        $or: [
          { full: { $regex: searchQuery, $options: "i" } },
          { short: { $regex: searchQuery, $options: "i" } },
          { notes: { $regex: searchQuery, $options: "i" } },
        ],
      });
      searchResults = shortUrls;
    } else {
      // console.log({ fullUrl: req.body.fullUrl });
      shortUrls = await ShortUrl.find({ fullUrl: req.body.fullUrl });
      searchResults = []; // Assign an empty array to searchResults
    }

    res.render("index", {
      shortUrls,
      searchResults: searchResults || [],
      searchQuery,
    });
  } catch (error) {
    console.log(error);
    res.send("Error fetching short URLs");
  }
});

app.get("/autocomplete", async (req, res) => {
  const query = req.query.q;

  try {
    const shortUrls = await ShortUrl.find({
      $or: [
        { full: { $regex: query, $options: "i" } },
        { short: { $regex: query, $options: "i" } },
        { notes: { $regex: query, $options: "i" } },
      ],
    }).limit(3); // Limit the autocomplete results to a maximum of 3

    res.json(shortUrls);
  } catch (error) {
    console.log(error);
    res.send("Error fetching autocomplete results");
  }
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000);

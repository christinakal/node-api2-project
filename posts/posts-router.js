const express = require("express");

const Posts = require("../data/db.js"); // < fix the path

const router = express.Router(); // mind the uppercase R


router.get("/", (req, res) => {
    const pagination = req.query;
  
    console.log("pagination", pagination);
  
    Posts.find(pagination)
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the posts",
        });
      });
  });

// mind the S in exportS
module.exports = router; // same as below
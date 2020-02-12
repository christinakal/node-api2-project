const express = require("express");

const Posts = require("../data/db.js"); // < fix the path


const router = express.Router(); // mind the uppercase R

// --- GET REQUESTS ---
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

router.get('/:id', (req,res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: "Post not found"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "Error retrieving the post"});
    });
});

router.get('/:id/comments', (req,res) => {
    const { id } = req.params;

    Posts.findPostComments(id)
    .then(comment => {
        res.status(200).json(comment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "Error retrieving the post"});
    });
});


// --- POST REQUESTS ---
router.post("/", (req, res) => {
    Posts.insert(req.body)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(error => {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: "Error adding the hub",
        });
      });
  });


// mind the S in exportS
module.exports = router; // same as below
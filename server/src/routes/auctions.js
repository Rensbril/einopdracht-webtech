const express = require("express");
const Joi = require("joi");
const router = express.Router();

//get all
router.get("/", (req, res) => {
  res.json(Object.values(auctions));
});

//get by id
router.get("/:id", (req, res) => {
  const auction = auction.find((p) => p.id === req.params.id);
  if (!auction) res.status(404).send("Auction not found");
  res.json(Object.values(auction));
});

//post
router.post("/", (req, res) => {
  const { error } = validateAuction(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  //push schema to products storage
  const auction = {
    id: nextID,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  nextID++;
  auctions.push(auction);
  res.json(auction);
});

//put
router.put("/:id", (req, res) => {
  //find product
  // bestaat niet return 404
  //bestaat maar bad request return 400
  //update products
  //return update
});

//delete
router.delete("/:id", (req, res) => {});

// request validation
function validateAuction(auction) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(50).required(),

    description: Joi.string().max(200).required(),

    price: Joi.number().integer().max(10000).required(),
  });
  return Joi.validate(auction, schema);
}

module.exports = router;

//storage temporary
let nextID = 3;
let auctions = [
  {
    id: 1,
    name: "Auction 1",
    description: "Auction 1",
    highestBidding: 100,
  },
  {
    id: 2,
    name: "Auction 2",
    description: "Auction 2",
    highestBidding: 100,
  },
];

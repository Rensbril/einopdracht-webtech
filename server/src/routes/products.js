const express = require("express");
const Joi = require("joi");
const router = express.Router();

//get all
router.get("/", function (req, res) {
  res.send(products);
});

//get by id
router.get("/:id", function (req, res) {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) res.status(404).send("Product not found");
  res.send(product);
});

//post
router.post("/", (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  //push schema to products storage
  const product = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  products.push(product);
  res.send(product);
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
function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(50).required(),

    description: Joi.string().max(200).required(),

    price: Joi.number().integer().max(10000).required(),
  });
  return Joi.validate(course, schema);
}

module.exports = router;

//storage temporary
let products = [
  {
    id: 1,
    name: "bike",
    description: "very nice bike",
    price: "1000",
  },
  {
    id: 2,
    name: "pan",
    description: "very nice pan",
    price: "20",
  },
];

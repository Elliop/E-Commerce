const router = require("express").Router();

router.get("/test", (req, res) => {
  console.log("t");
  res.send("totototo");
});

module.exports = router;

const express = require("express");
const router = express.Router();

// Rota api
router.get("/api", (req, res) => {
  res.send("Servidor SuList está online!");
});

module.exports = router;

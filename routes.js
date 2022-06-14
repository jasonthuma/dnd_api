const express = require("express");
const router = express.Router();
const {
  getPlayers,
  getPlayerById,
  getMonsters,
  getMonsterById,
  createPlayer,
  createMonster,
  updatePlayer,
  updateMonster,
  deletePlayer,
  deleteMonster,
} = require("./controllers");
const { validateNewEntry } = require("./validation");

router.get("/", (req, res) => {
  res.send("Go to /players for player data and /monsters for monster data");
});
router.get("/players", getPlayers);
router.get("/players/:id", getPlayerById);
router.get("/monsters", getMonsters);
router.get("/monsters/:id", getMonsterById);
router.post("/players", validateNewEntry, createPlayer);
router.post("/monsters", validateNewEntry, createMonster);
router.put("/players/:id", updatePlayer);
router.put("/monsters/:id", updateMonster);
router.delete("/players/:id", deletePlayer);
router.delete("/monsters/:id", deleteMonster);

module.exports = router;

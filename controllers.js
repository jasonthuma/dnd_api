const knex = require("./knex");
const NewEntry = require("./models");

exports.getPlayers = (req, res) => {
  knex
    .select()
    .from("players")
    .then((players) => {
      res.send(players);
    });
};

exports.getPlayerById = (req, res) => {
  knex
    .select()
    .from("players")
    .where("player_id", req.params.id)
    .then((player) => {
      res.send(player);
    });
  // knex
  //   .raw("select * from players where player_id = ?", req.params.id)
  //   .then((player) => {
  //     res.send(player[0]);
  //   });
};

exports.getMonsters = (req, res) => {
  knex
    .select()
    .from("monsters")
    .then((monsters) => {
      res.send(monsters);
    });
};

exports.getMonsterById = (req, res) => {
  knex
    .select()
    .from("monsters")
    .where("monster_id", req.params.id)
    .then((monster) => {
      res.send(monster);
    });
};

exports.createPlayer = (req, res) => {
  const player = new NewEntry(req.body);
  knex("players")
    .insert({
      player_name: player.name,
      armor_class: player.armor_class,
      init_bonus: player.init_bonus,
    })
    .then(() => {
      res.send(player);
    });
};

exports.createMonster = (req, res) => {
  const monster = new NewEntry(req.body);
  knex("monsters")
    .insert({
      monster_name: monster.name,
      armor_class: monster.armor_class,
      init_bonus: monster.init_bonus,
    })
    .then(() => {
      res.send(monster);
    });
};

exports.updatePlayer = async (req, res) => {
  let player = await knex
    .select()
    .from("players")
    .where("player_id", req.params.id);
  let playerToUpdate = player[0];
  if (req.body.name !== undefined) {
    playerToUpdate.player_name = req.body.name;
  }
  if (req.body.armor_class !== undefined) {
    playerToUpdate.armor_class = req.body.armor_class;
  }
  if (req.body.init_bonus !== undefined) {
    playerToUpdate.init_bonus = req.body.init_bonus;
  }

  knex("players")
    .where("player_id", req.params.id)
    .update({
      player_name: playerToUpdate.player_name,
      armor_class: playerToUpdate.armor_class,
      init_bonus: playerToUpdate.init_bonus,
    })
    .then(() => {
      res.send(playerToUpdate);
    });
};

exports.updateMonster = async (req, res) => {
  let monster = await knex
    .select()
    .from("monsters")
    .where("monster_id", req.params.id);
  let monsterToUpdate = monster[0];
  if (req.body.name !== undefined) {
    monsterToUpdate.monster_name = req.body.name;
  }
  if (req.body.armor_class !== undefined) {
    monsterToUpdate.armor_class = req.body.armor_class;
  }
  if (req.body.init_bonus !== undefined) {
    monsterToUpdate.init_bonus = req.body.init_bonus;
  }

  knex("monsters")
    .where("monster_id", req.params.id)
    .update({
      monster_name: monsterToUpdate.monster_name,
      armor_class: monsterToUpdate.armor_class,
      init_bonus: monsterToUpdate.init_bonus,
    })
    .then(() => {
      res.send(monsterToUpdate);
    });
};

exports.deletePlayer = async (req, res) => {
  let player = await knex
    .select()
    .from("players")
    .where("player_id", req.params.id);
  let playerToDelete = player[0];

  knex("players")
    .where("player_id", req.params.id)
    .del()
    .then(() => {
      res.send(playerToDelete);
    });
};

exports.deleteMonster = async (req, res) => {
  let monster = await knex
    .select()
    .from("monsters")
    .where("monster_id", req.params.id);
  let monsterToDelete = monster[0];
  knex("monsters")
    .where("monster_id", req.params.id)
    .del()
    .then(() => {
      res.send(monsterToDelete);
    });
};

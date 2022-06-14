exports.validateNewEntry = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req.check("name", "Name must be less than 50 characters").isLength({
    max: 50,
  });
  req.check("armor_class", "Armor Class is required").notEmpty();
  req.check("armor_class", "Armor Class must be 1 or 2 characters").isLength({
    max: 2,
  });
  req.check("init_bonus", "Initiative Bonus is required").notEmpty();
  req
    .check("init_bonus", "Initiative Bonus must be 1 or 2 characters")
    .isLength({
      max: 2,
    });

  //Check for errors
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  //Proceed to next middleware
  next();
};

const Dive = require('../models/Dive');

module.exports = {
  createDive: async (req, res) => {
    try {
      await Dive.create({
        location: req.body.location,
        Date: req.body.Date,
        depth: req.body.depth,
        notes: req.body.notes,
        userId: req.user.id,
      });
      console.log('Dive has been logged!');
      res.redirect('/dives');
    } catch (err) {
      console.log(err);
    }
  },
};

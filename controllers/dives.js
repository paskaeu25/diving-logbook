const Dive = require('../models/Dive');

module.exports = {
  getDives: async (req, res) => {
    console.log(req.user);
    try {
      // const diveLogs = await Todo.find({userId:req.user.id})
      res.render('dive.ejs', {
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createDive: async (req, res) => {
    try {
      await Dive.create({
        location: req.body.location,
        Date: req.body.date,
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

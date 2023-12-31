const Dive = require('../models/Dive');

module.exports = {
  getDives: async (req, res) => {
    console.log(req.user);
    try {
      const diveLogs = await Dive.find({ userId: req.user.id })
        .sort({
          Date: 'desc',
        })
        .lean();
      const totalLogs = await Dive.countDocuments({ userId: req.user.id });
      res.render('dive.ejs', {
        user: req.user,
        dives: diveLogs,
        total: totalLogs,
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

  deleteDive: async (req, res) => {
    console.log(req.body.diveIdFromJSFile);
    try {
      await Dive.findOneAndDelete({ _id: req.body.diveIdFromJSFile });
      console.log('Deleted Dive Log');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};

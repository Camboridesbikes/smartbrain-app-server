const handleProfile = (req, res, db)=> {
const { id } = req.params;

db.where({id}).select('*').from('users').then(user=> {
  user.length ?
  res.json(user[0]) :
  res.status(400).json('not found');

}).catch(err => res.status(400).json('error getting user'));
}

module.exports = {
  handleProfile: handleProfile
};

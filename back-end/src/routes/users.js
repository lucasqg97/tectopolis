

const imgDefault = 'http://pageone.ph/wp-content/uploads/2017/04/2017-04-05-Gizmos-Say-Goodbye-To-The-Iconic-Twitter-Egg-Profile-.png'
let newPost = {
  full_name: req.body.full_name,
  arroba: req.body.arroba,
  bio: req.body.bio,
  imgLink: req.body.imgLink || imgDefault
}
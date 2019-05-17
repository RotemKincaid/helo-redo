module.exports = {
  login: (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    db.find_user(username).then(user => {
      if (user[0]) {
        if (password === user[0].password) {
          req.session.user = {
            username: user[0].username,
            fullname: user[0].full_name
          };
          console.log(req.session);

          res.status(200).send(req.session.user);
        } else {
          res.status(401).send("Password does not match!");
        }
      } else {
        res
          .status(404)
          .send("Username does not exist, please register to continue");
      }
    });
  },
  register: (req, res) => {
    const db = req.app.get("db");

    const { username, password } = req.body;
    db.find_user(username).then(user => {
      // if user exists, do not let them register again
      if (user.length) {
        res.status(200).send("That user already exists");
      } else {
        // if the user does not exist, we will create the user, set them to a session and send the data to the front
        db.create_user([username, password]).then(user => {
          req.session.user = {
            username: user[0].username
          };
          res.status(200).send(req.session.user);
        });
      }
    });
  }
};

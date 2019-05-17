const userposts = false;
const search = "";

module.exports = {
  getAllPosts: (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { userposts, search } = req.query;

    if (userposts === true && search === true) {
    }

    db.get_posts(user_id).then(posts => {
      res.status(200).send(posts);
    });
  },

  createPost: (req, res) => {
    const db = req.app.get("db");
    const { title, image_url, content } = req.body;

    db.create_post([title, image_url, content]).then(posts => {
      res.status(200).send(posts);
    });
  }
};

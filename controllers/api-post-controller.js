const Post = require("../models/post");

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getPosts = (req, res) => {
  const posts = [
    { id: 1, name: 12 },
    { id: 2, name: 121 },
    { id: 3, name: 312 },
    { id: 4, name: 121 },
    { id: 6, name: 121 },
    
  ];
  const newPosts = JSON.stringify(posts);
  res.send(newPosts);
};

const addPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

const deletePost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then((post) => res.status(200).json(id))
    .catch((error) => handleError(res, error));
};

const editPost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text }, { new: true })
    .then((post) => res.json(post))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getPosts,
  addPost,
  getPost,
  deletePost,
  editPost,
};

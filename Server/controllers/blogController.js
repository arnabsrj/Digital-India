// --- Logic for Blog Routes ---
const Blog = require('../models/Blog');
const path = require('path');

// @desc    Get all blog posts
exports.getBlogPosts = async (req, res) => {
  try {
    const posts = await Blog.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error('Error fetching blog posts:', err.message);
    res.status(500).send('Server Error: Failed to retrieve posts.');
  }
};

// @desc    Create a new blog post (with image)
exports.createBlogPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Use absolute URL for image
    const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
    const image = req.file ? `${BASE_URL}/uploads/${req.file.filename}` : null;

    const newPost = new Blog({
      title,
      content,
      author: author || 'Admin',
      image,
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('Error creating blog post:', err.message);
    res.status(500).send('Server Error: Failed to create post.');
  }
};

// @desc    Update Blog Post (with optional image)
exports.updateBlogPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const BASE_URL = process.env.BASE_URL || "http://localhost:5000";
    const image = req.file ? `${BASE_URL}/uploads/${req.file.filename}` : undefined;

    const updatedPost = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, ...(image && { image }) },
      { new: true }
    );

    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });

    res.json(updatedPost);
  } catch (err) {
    console.error('Error updating blog post:', err.message);
    res.status(500).send('Server Error: Failed to update post.');
  }
};

// @desc    Delete Blog Post
exports.deleteBlogPost = async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Blog post not found' });
    res.json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    console.error('Error deleting blog post:', err.message);
    res.status(500).send('Server Error: Failed to delete post.');
  }
};

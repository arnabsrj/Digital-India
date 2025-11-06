const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getBlogPosts,
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
} = require("../controllers/blogController");
const path = require("path");

// === Multer configuration ===
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// === Routes ===

// Get all blog posts
router.get("/", getBlogPosts);

// Create new blog post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Get base URL (works in both localhost & production)
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    req.body.image = req.file ? `${baseUrl}/uploads/${req.file.filename}` : null;

    const result = await createBlogPost(req, res);
    return result;
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ message: "Server error while creating blog" });
  }
});

// Update post
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    if (req.file) {
      req.body.image = `${baseUrl}/uploads/${req.file.filename}`;
    }

    const result = await updateBlogPost(req, res);
    return result;
  } catch (err) {
    console.error("Error updating blog:", err);
    res.status(500).json({ message: "Server error while updating blog" });
  }
});

// Delete post
router.delete("/:id", deleteBlogPost);

module.exports = router;

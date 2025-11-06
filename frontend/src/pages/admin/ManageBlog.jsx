// --- Manage Blog Page ---
import React, { useState, useEffect } from "react";
import "./AdminPages.css";

const ManageBlog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://digital-india-backend-unnn.onrender.com/api/blog"
      );
      if (!res.ok) throw new Error("Failed to fetch posts");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // --- Create / Update Post ---
  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId
        ? `https://digital-india-backend-unnn.onrender.com/api/blog/${editingId}`
        : "https://digital-india-backend-unnn.onrender.com/api/blog";

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("author", "Admin");
      if (image) formData.append("image", image);

      const res = await fetch(url, {
        method,
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to save post");

      setTitle("");
      setContent("");
      setImage(null);
      setEditingId(null);
      setSuccess(editingId ? "✅ Post updated!" : "✅ Post published!");
      setTimeout(() => setSuccess(""), 3000);

      fetchPosts();
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 3000);
    }
  };

  const editPost = (post) => {
    setEditingId(post._id);
    setTitle(post.title);
    setContent(post.content);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await fetch(
        `https://digital-india-backend-unnn.onrender.com/api/blog/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete post");
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      {/* --- Create / Edit Form --- */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>{editingId ? "Edit Blog Post" : "Create New Blog Post"}</h2>
        </div>
        <div className="admin-card-body">
          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}
          <form className="admin-form" onSubmit={submitHandler}>
            <div className="admin-form-group">
              <label>Post Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-group">
              <label>Post Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-group">
              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>

            <button type="submit" className="admin-btn">
              {editingId ? "Update Post" : "Publish Post"}
            </button>
          </form>
        </div>
      </div>

      {/* --- List of Posts --- */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Existing Posts</h2>
        </div>
        <div className="admin-card-body">
          {loading && <p>Loading Posts...</p>}
          {!loading && posts.length === 0 && <p>No posts available.</p>}
          <ul className="admin-list">
            {posts.map((post) => (
              <li key={post._id} className="admin-list-item">
                <div>
                  <h3>{post.title}</h3>

                  {post.image && (
                    <img
                      src={
                        post.image.startsWith("http")
                          ? post.image
                          : `https://digital-india-backend-unnn.onrender.com${post.image}`
                      }
                      alt="Post"
                      style={{ width: "120px", borderRadius: "8px" }}
                    />
                  )}

                  <p>
                    {post.author} •{" "}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="admin-actions">
                  <button
                    className="admin-btn btn-edit"
                    onClick={() => editPost(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="admin-btn btn-danger"
                    onClick={() => deletePost(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageBlog;

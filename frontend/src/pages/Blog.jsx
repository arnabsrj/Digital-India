import React, { useState, useEffect } from 'react';
import './Blog.css';

// --- Icons ---
const MailIcon = () => (
  <svg className="bl-share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const LinkIcon = () => (
  <svg className="bl-share-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101" />
  </svg>
);
const ChevronRightIcon = () => (
  <svg className="bl-archive-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg className="bl-archive-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// --- Blog Post Component ---
const BlogPost = ({ title, date, content, image }) => (
  <article className="bl-post-card">
    <header>
      <h2 className="bl-post-title">{title}</h2>
      <p className="bl-post-meta">
        Posted on {new Date(date).toLocaleDateString()}
      </p>
    </header>

    {/* --- Image Section --- */}
    {image && (
      <div className="bl-post-image">
        <img
          src={
            image.startsWith("http")
              ? image
              : `http://localhost:5000${image}`
          }
          alt={title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "15px",
            objectFit: "cover"
          }}
        />
      </div>
    )}

    <div
      className="bl-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />

    <footer className="bl-post-footer">
      <div className="bl-post-share">
        <a href="#" title="Email"><MailIcon /></a>
        <a href="#" title="Share"><LinkIcon /></a>
      </div>
    </footer>
  </article>
);

// --- Archive Item ---
const ArchiveItem = ({ year, count, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className={`bl-archive-parent ${isOpen ? 'open' : ''}`}>
      <a href="#" onClick={toggleOpen}>
        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        {year} ({count})
      </a>
      {isOpen && <ul className="bl-archive-child">{children}</ul>}
    </li>
  );
};

// --- Blog Page ---
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blog');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading blog posts...</p>;

  return (
    <main className="blog-page">
      <div className="bl-hero">
        <h1>Digital India CSP Blog</h1>
        <p>News, Updates, and Insights</p>
      </div>

      <div className="bl-container">
        <div className="bl-main-content">
          {posts.length === 0 ? (
            <p>No blog posts available yet.</p>
          ) : (
            posts.map((post) => (
              <BlogPost
                key={post._id}
                title={post.title}
                date={post.createdAt}
                content={post.content}
                image={post.image}
              />
            ))
          )}
        </div>

        {/* Sidebar */}
        <aside className="bl-sidebar">
          <div className="bl-sidebar-widget">
            <h3 className="bl-widget-title">Blog Archive</h3>
            <ul className="bl-archive-list">
              <ArchiveItem year="2025" count={posts.length}>
                {posts.map((post) => (
                  <li key={post._id}>
                    <a href="#">{post.title}</a>
                  </li>
                ))}
              </ArchiveItem>
            </ul>
          </div>

          <div className="bl-sidebar-widget">
            <h3 className="bl-widget-title">Share This Blog</h3>
            <div className="bl-sidebar-share-links">
              <a href="#" className="bl-share-link-block"><MailIcon /> Email This</a>
              <a href="#" className="bl-share-link-block"><LinkIcon /> Share to X</a>
              <a href="#" className="bl-share-link-block"><LinkIcon /> Share to Facebook</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Blog;

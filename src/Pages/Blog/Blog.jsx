import React from 'react'
import "./Blog.css"

const blogPosts = [
  {
    img: "/assets/ronaldo.jpg",
    tag: "Football",
    tagColor: "tag-teal", // Add this for tag-specific color
    title: "The Rise of Men's Football",
    description: "A deep dive into the growing popularity of women's football around the globe.",
    authorImg: "/assets/person_5.jpg",
    authorName: "Jane Doe",
    time: "3h ago"
  },
  {
    img: "/assets/s5.jpg",
    tag: "Criket",
    tagColor: "tag-purple", // Add this for tag-specific color
    title: "RCB VS MUMBAI INDIANS",
    description: "Relive the most iconic moments from the NBA season that had everyone talking.",
    authorImg: "/assets/person_4.jpg",
    authorName: "Michael Lee",
    time: "Yesterday"
  },
  {
    img: "/assets/nadal.jpg",
    tag: "Tennis",
    tagColor: "tag-pink", // Add this for tag-specific color
    title: "The Evolution of Tennis Equipment",
    description: "How modern technology has revolutionized the game of tennis.",
    authorImg: "/assets/person_1.jpg",
    authorName: "Serena Fox",
    time: "1w ago"
  },
  {
    img: "./assets/basketball.jpg",
    tag: "BASKETBALL",
    tagColor: "tag-green", // New color for cricket
    title: "The Best Basketball Performances of 2023",
    description: "An in-depth analysis of the best performances in cricket throughout the year.",
    authorImg: "/assets/person_2.jpg",
    authorName: "Rahul Singh",
    time: "2d ago"
  },
  {
    img: "./assets/hockey.jpg",
    tag: "Hockey",
    tagColor: "tag-blue", // New color for ticket
    title: "Hockey Enthusiam is Increasing day by day",
    description: "Exploring how technology is shaping the future of Hockey for major events.",
    authorImg: "/assets/person_3.jpg",
    authorName: "Aditi Kumar",
    time: "5h ago"
  },
  {
    img: "/assets/kabaddi.jpg",
    tag: "Kabaddi",
    tagColor: "tag-orange", 
    title: "Kabaddi: The Ancient Sport's Modern Revival",
    description: "Kabaddi is seeing a resurgence across India. Here's how it's captivating new audiences.",
    authorImg: "/assets/person_7.jpg",
    authorName: "Sunil Sharma",
    time: "1w ago"
  }
];


const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading text-black"><span>Latest</span> Sports Insights</h1>
      <div className="container-box">
        {blogPosts.map((post, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={post.img} alt="blog-post" />
            </div>
            <div className="card-body">
              <div className={`tag ${post.tagColor}`}>{post.tag}</div>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <div className="user">
                <img src={post.authorImg} alt="author" />
                <div className="user-info">
                  <h5 className='text-white'>{post.authorName}</h5>
                  <small>{post.time}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

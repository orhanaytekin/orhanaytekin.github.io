"use client";

import DraggableResizableComponent from './DraggableResizableComponent';
import { SOCIALS } from '../constants/socials';

interface Blog {
  title: string;
  date: string;
  description: string;
  link: string;
}

const blogs: Blog[] = [
];

const BlogSection = () => {
  return (
    <section className="grid-container fade-in">
      <DraggableResizableComponent>
        <h2 className="text-3xl mb-4">Blog</h2>
      </DraggableResizableComponent>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <DraggableResizableComponent key={index}>
            <div className="card">
              <h3 className="text-2xl mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
              <p className="mb-2">{blog.description}</p>
              <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
            </div>
          </DraggableResizableComponent>
        ))
      ) : (
        <DraggableResizableComponent>
          <div className="card text-center">
            <p className="mb-4">No blog posts available at the moment.</p>
            <p className="mb-4">Please follow me on Medium for future updates!</p>
            <a 
              href={SOCIALS.medium}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Follow on Medium
            </a>
          </div>
        </DraggableResizableComponent>
      )}
    </section>
  );
};

export default BlogSection;
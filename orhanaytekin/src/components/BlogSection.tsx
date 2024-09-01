"use client";

import DraggableResizableComponent from './DraggableResizableComponent';

const blogs = [
  {
    title: 'Understanding NestJS',
    date: 'September 1, 2024',
    description: 'A comprehensive guide to getting started with NestJS.',
    link: 'https://medium.com/@orhanaytek1n/understanding-nestjs',
  },
  {
    title: 'Next.js for Beginners',
    date: 'August 15, 2024',
    description: 'An introductory tutorial on building web applications with Next.js.',
    link: 'https://medium.com/@orhanaytek1n/next-js-for-beginners',
  },
  {
    title: 'Docker Essentials',
    date: 'July 30, 2024',
    description: 'Learn the basics of Docker and containerization.',
    link: 'https://medium.com/@orhanaytek1n/docker-essentials',
  },
];

const BlogSection = () => {
  return (
    <section className="grid-container fade-in">
      <DraggableResizableComponent>
        <h2 className="text-3xl mb-4">Blog</h2>
      </DraggableResizableComponent>
      {blogs.map((blog, index) => (
        <DraggableResizableComponent key={index}>
          <div className="card">
            <h3 className="text-2xl mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
            <p className="mb-2">{blog.description}</p>
            <a href={blog.link} className="text-blue-500 hover:underline">Read More</a>
          </div>
        </DraggableResizableComponent>
      ))}
    </section>
  );
};

export default BlogSection;
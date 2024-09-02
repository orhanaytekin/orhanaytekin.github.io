interface BlogProps {
  title: string;
  description: string;
  link: string;
}

const Blog: React.FC<BlogProps> = ({ title, description, link }) => {
  return (
    <div className="hover-grow bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};

export default Blog;
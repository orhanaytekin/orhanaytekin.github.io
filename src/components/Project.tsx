interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technologies, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </div>
      <a href={link} className="text-blue-500 hover:underline">
        View project
      </a>
    </div>
  );
};

export default Project;
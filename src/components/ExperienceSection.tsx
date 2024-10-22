const experiences = [
  {
    role: 'Backend Developer',
    company: 'PlusMinusOne',
    duration: 'August 2024 - Present',
    details: 'Developing backend services using Node.js and NestJS.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Papelz',
    duration: 'July 2024 - July 2024',
    details: 'Assisted in developing the backend using Node.js and NestJS. Contributed to the frontend development with React and Next.js.',
  },
  {
    role: 'Software Engineer',
    company: 'Neuronic',
    duration: 'July 2023 - July 2024',
    details: 'Developed and maintained backend services using AWS, NodeJS and TypeScript. Implemented CI/CD pipelines and enforced coding standards.',
  },
  {
    role: 'Android Developer Intern',
    company: 'GİB Teknoloji',
    duration: 'July 2023 - September 2023',
    details: 'Improved the existing GİB application, enhancing user experience and optimizing efficiency.',
  },
  {
    role: 'Computer Science Intern',
    company: 'Ankara Su ve Kanalizasyon İdaresi',
    duration: 'August 2022 - September 2022',
    details: 'Completed reviews of codes, requirements and project plans. Developed mobile applications using Flutter and Dart.',
  },
];

const ExperienceSection = () => {
  return (
    <section className="fade-in">
      <h2 className="text-3xl mb-4">Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="card">
          <h3 className="text-2xl">{experience.role}</h3>
          <p className="text-gray-400">{experience.company} | {experience.duration}</p>
          <p>{experience.details}</p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
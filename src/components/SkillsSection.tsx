const skills = [
  { category: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Dart'] },
  { category: 'Frameworks & Libraries', items: ['React.js', 'Spring Boot', 'Node.js', 'Flutter', 'NestJS'] },
  { category: 'Technologies & Tools', items: ['AWS (Amazon Web Services)', 'REST APIs', 'CI/CD Pipelines', 'Git', 'PostgreSQL'] },
];

const SkillsSection = () => {
  return (
    <section className="fade-in">
      <h2 className="text-3xl mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="card">
          <h3 className="text-2xl">{skill.category}</h3>
          <ul className="list-disc pl-5">
            {skill.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
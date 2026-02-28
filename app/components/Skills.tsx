export default function Skills() {
  const skills = [
    "AWS", "Azure", "Terraform", "Docker", "Kubernetes",
    "GitLab CI/CD", "Jenkins", "Linux", "PowerShell", "Python"
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-black p-4 rounded-lg text-center border border-gray-800 hover:border-blue-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
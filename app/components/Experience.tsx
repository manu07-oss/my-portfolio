export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-8">Experience</h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold">LSEG — DevOps Engineer</h3>
          <p className="text-gray-400">
            Managed AWS & Azure platforms, built modular Terraform
            infrastructure, designed GitLab CI/CD pipelines, automated Windows
            server migrations, and improved deployment reliability.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Connectgen — Associate Developer</h3>
          <p className="text-gray-400">
            Designed Amazon Connect infrastructure using CloudFormation and
            implemented event-driven architectures with SNS and Lambda.
          </p>
        </div>
      </div>
    </section>
  );
}
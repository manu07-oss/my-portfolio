export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Projects</h2>

      <div className="space-y-8">

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">
            Cloud-Native Microservices Deployment
          </h3>
          <p className="text-gray-400">
            Built AWS infrastructure using Terraform, deployed containerized
            apps on EKS, and implemented CI/CD with GitLab and Jenkins.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">
            Windows Server Migration
          </h3>
          <p className="text-gray-400">
            Migrated Windows Server 2012 to 2019 with 80% automation using
            PowerShell and IIS configuration optimization.
          </p>
        </div>

      </div>
    </section>
  );
}
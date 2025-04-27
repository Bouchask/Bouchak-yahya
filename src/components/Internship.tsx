
import internshipData from '../data/internship.json';

const Internship = () => {
  return (
    <section id="internship" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in">Stage</h2>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl animate-fade-in">
        <div className="space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-semibold text-purple-700">{internshipData.company}</h3>
              <p className="text-gray-600">Stage de {internshipData.duration} - {internshipData.role}</p>
            </div>
            <div className="space-x-2">
              {internshipData.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm transition-all duration-300 hover:bg-purple-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="prose text-gray-600">
            <p className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              {internshipData.description}
            </p>
            
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
              Compétences Acquises :
            </h4>
            <ul className="list-disc list-inside space-y-2">
              {internshipData.learnings.map((learning, index) => (
                <li 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${450 + index * 150}ms` }}
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

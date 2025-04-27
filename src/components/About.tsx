
const About = () => {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">À propos de moi</h2>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="space-y-6">
          <p className="text-gray-600">
            Je suis Yahya Bouchak, un étudiant en informatique à FPK Khouribga, poursuivant une licence en Systèmes d'Information et Intelligence Artificielle (SI-IA). Mon parcours académique témoigne de mon engagement envers l'excellence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Formation</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="font-medium">SI-IA - FPK Khouribga</span>
                  <br />
                  <span className="text-sm">Licence en cours</span>
                </li>
                <li>
                  <span className="font-medium">BTS en DSI</span>
                  <br />
                  <span className="text-sm">Mention "Très Bien"</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Travail d'équipe</li>
                <li>Résolution de problèmes</li>
                <li>Autonomie</li>
                <li>Communication</li>
                <li>Adaptabilité</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

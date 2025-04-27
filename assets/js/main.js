const content = {
  en: {
    siteTitle: "[Your Name]",
    aboutTitle: "About Me",
    aboutDescription: "I am a passionate data scientist with experience in Machine Learning, Deep Learning, Generative AI, Business Intelligence, and Graph Theory.",
    projectsTitle: "Projects",
    projects: [
      { title: "Predictive Analytics", desc: "Machine Learning models for predicting business outcomes." },
      { title: "Deep Learning Classifier", desc: "Image classification using convolutional neural networks." },
      { title: "BI Dashboard", desc: "Business Intelligence reports with Power BI and Tableau." },
      { title: "Knowledge Graphs", desc: "Graph theory applied to recommendation systems." }
    ],
    contactTitle: "Contact"
  },
  es: {
    siteTitle: "[Tu Nombre]",
    aboutTitle: "Sobre mí",
    aboutDescription: "Soy un científico de datos apasionado con experiencia en Machine Learning, Deep Learning, IA Generativa, Inteligencia de Negocios y Teoría de Grafos.",
    projectsTitle: "Proyectos",
    projects: [
      { title: "Análisis Predictivo", desc: "Modelos de Machine Learning para predecir resultados de negocio." },
      { title: "Clasificador de Deep Learning", desc: "Clasificación de imágenes usando redes neuronales convolucionales." },
      { title: "Dashboard de BI", desc: "Informes de Inteligencia de Negocios con Power BI y Tableau." },
      { title: "Grafos de Conocimiento", desc: "Teoría de grafos aplicada a sistemas de recomendación." }
    ],
    contactTitle: "Contacto"
  }
};

function setLanguage(lang) {
  document.getElementById("site-title").textContent = content[lang].siteTitle;
  document.getElementById("about-title").textContent = content[lang].aboutTitle;
  document.getElementById("about-description").textContent = content[lang].aboutDescription;
  document.getElementById("projects-title").textContent = content[lang].projectsTitle;
  document.getElementById("contact-title").textContent = content[lang].contactTitle;

  // update active lang button
  document.querySelectorAll('.language-button').forEach(btn => {
    btn.classList.remove('active-language');
  });
  document.getElementById(`${lang}-btn`).classList.add('active-language');
}

// Set default language
setLanguage('en');

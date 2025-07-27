import React, { useState, useEffect } from 'react';
import { Globe, Phone, Mail, Users, Calendar, BookOpen, Trophy, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ChevronDown, Settings } from 'lucide-react';
import AdminDashboard from './AdminDashboard';

const CollegeWebsite = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMoreStudentLife, setShowMoreStudentLife] = useState(false);
  const [showMoreNews, setShowMoreNews] = useState(false);
  const [showMoreGallery, setShowMoreGallery] = useState(false);
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contentData, setContentData] = useState(null);

  // Données par défaut
  const defaultContentData = {
    about: {
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
      textFr: 'Le Collège Polyvalent Bilingue de Douala est un établissement d\'enseignement secondaire prestigieux offrant une formation de qualité dans un environnement bilingue. Fondé en 2010, notre collège s\'engage à fournir une éducation excellente préparant nos élèves aux défis du monde moderne.',
      textEn: 'Collège Polyvalent Bilingue de Douala is a prestigious secondary education institution offering quality training in a bilingual environment. Founded in 2010, our college is committed to providing excellent education preparing our students for the challenges of the modern world.'
    },
    studentLife: [
      { title: 'Pique-nique', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop' },
      { title: 'Football', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop' },
      { title: 'Tennis de Table', image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop' },
      { title: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop' },
      { title: 'Théâtre', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' },
      { title: 'Sciences', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop' }
    ],
    events: [
      {
        title: 'Conférence sur la Cybersécurité et la Technologie',
        description: 'Un aperçu des menaces cybernétiques internationales et de la sécurité technologique',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=120&h=80&fit=crop'
      },
      {
        title: 'Introduction aux Matériaux à État Solide',
        description: 'Cours gratuit d\'introduction aux matériaux à état solide',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=120&h=80&fit=crop'
      },
      {
        title: 'Journée de Plantation',
        description: 'Rejoignez-nous pour la plantation d\'arbres dans notre collège',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=120&h=80&fit=crop'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=300&fit=crop',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop'
    ],
    counter: {
      students: '1,000+',
      teachers: '50+',
      classes: '30+'
    },
    header: {
      phone: '+237 652 123 456',
      email: 'info@cpb-douala.cm',
      collegeName: 'COLLÈGE POLYVALENT BILINGUE DE DOUALA',
      slogan: 'Excellence in Bilingual Secondary Education'
    },
    footer: {
      address: 'Douala, Cameroun',
      copyright: 'Copyright © 2024 Collège Polyvalent Bilingue de Douala. All Rights Reserved.'
    }
  };

  // Charger les données au démarrage
  useEffect(() => {
    const savedData = localStorage.getItem('cpbd-content-data');
    if (savedData) {
      setContentData(JSON.parse(savedData));
    } else {
      setContentData(defaultContentData);
    }
  }, []);

  // Fonctions de gestion
  const handleUpdateContent = (newData) => {
    setContentData(newData);
    localStorage.setItem('cpbd-content-data', JSON.stringify(newData));
  };

  const handleAdminLogin = () => {
    const password = prompt('Mot de passe admin:');
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setShowAdminDashboard(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  if (!contentData) {
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>;
  }

  const translations = {
    fr: {
      // Header
      home: 'Accueil',
      about: 'À Propos',
      academics: 'Académique',
      admissions: 'Admissions',
      research: 'Recherche',
      faculty: 'Corps Professoral',
      students: 'Étudiants',
      resources: 'Ressources',
      
      // Hero Section
      heroTitle: 'Admissions Ouvertes 2023-24',
      knowMore: 'En Savoir Plus',
      
      // About Section
      aboutUs: 'À Propos de Nous',
              aboutText: 'Le Collège Polyvalent Bilingue de Douala est un établissement d\'enseignement secondaire prestigieux offrant une formation de qualité dans un environnement bilingue. Fondé en 2010, notre collège s\'engage à fournir une éducation excellente préparant nos élèves aux défis du monde moderne.',
      
      // Academic Zone
      academicZone: 'Zone Académique',
      department: 'Département',
      programmes: 'Programmes',
      notification: 'Notification',
      admission: 'Admission',
      
      // Visit School
      visitSchool: 'VISITEZ NOTRE COLLÈGE',
      
      // Student Life
      studentLife: 'Vie Étudiante',
      picnic: 'Pique-nique',
      football: 'Football',
      tableTennis: 'Tennis de Table',
      viewMore: 'Voir Plus',
      
      // News & Events
      latestNews: 'Dernières Nouvelles & Événements',
      upcomingEvents: 'Événements à Venir',
      cybersecurityTitle: 'Conférence sur la Cybersécurité et la Technologie',
      cybersecurityText: 'Un aperçu des menaces cybernétiques internationales et de la sécurité technologique',
      solidStateTitle: 'Introduction aux Matériaux à État Solide',
      solidStateText: 'Cours gratuit d\'introduction aux matériaux à état solide',
      plantationTitle: 'Journée de Plantation',
              plantationText: 'Rejoignez-nous pour la plantation d\'arbres dans notre collège',
      
      // Statistics
      students1000: 'Élèves',
      teachers50: 'Professeurs',
      classes30: 'Classes',
      
      // Gallery
      gallery: 'Galerie',
      viewAll: 'Voir Tout',
      
      // Footer
      quickLinks: 'Liens Rapides',
      explore: 'Explorer',
      announcements: 'Annonces',
      departments: 'Départements',
      courses: 'Cours',
      emotionalWellness: 'Bien-être Émotionnel',
      antiSexualHarassment: 'Politique Anti-Harcèlement',
      ourProgrammes: 'Nos Programmes',
      rules: 'Règlements',
      corporateLife: 'Vie Corporative',
      publications: 'Publications',
      newsletter: 'Newsletter',
      events: 'Événements',
      campusLife: 'Vie Scolaire',
      facultyRecruitment: 'Recrutement Professoral',
      libraryResources: 'Ressources Bibliothèque',
      alumniNetwork: 'Réseau Alumni',
      contactUs: 'Contactez-nous',
      tenders: 'Appels d\'Offres',
      
      // Contact Info
      address: 'Douala, Cameroun',
      copyright: 'Copyright © 2024 Collège Polyvalent Bilingue de Douala. Tous droits réservés.'
    },
    en: {
      // Header
      home: 'Home',
      about: 'About',
      academics: 'Academics',
      admissions: 'Admissions',
      research: 'Research',
      faculty: 'Faculty & Staff',
      students: 'Students',
      resources: 'Resources',
      
      // Hero Section
      heroTitle: 'Admission Open 23-24',
      knowMore: 'Know More',
      
      // About Section
      aboutUs: 'About Us',
              aboutText: 'Collège Polyvalent Bilingue de Douala is a prestigious secondary education institution offering quality training in a bilingual environment. Founded in 2010, our college is committed to providing excellent education preparing our students for the challenges of the modern world.',
      
      // Academic Zone
      academicZone: 'Academic Zone',
      department: 'Department',
      programmes: 'Programmes',
      notification: 'Notification',
      admission: 'Admission',
      
      // Visit School
      visitSchool: 'VISIT OUR COLLEGE',
      
      // Student Life
      studentLife: 'Student Life',
      picnic: 'Picnic',
      football: 'Football',
      tableTennis: 'Table Tennis',
      viewMore: 'View More',
      
      // News & Events
      latestNews: 'Latest News & Events',
      upcomingEvents: 'Upcoming Events',
      cybersecurityTitle: 'Cybersecurity and Technology Conference',
      cybersecurityText: 'A look at international cyber threats and security technology',
      solidStateTitle: 'Introduction to Solid State Materials',
      solidStateText: 'Free introduction course to solid state materials',
      plantationTitle: 'Plantation Drive',
              plantationText: 'Join us for tree plantation at our college',
      
      // Statistics
      students1000: 'Students',
      teachers50: 'Teachers',
      classes30: 'Classes',
      
      // Gallery
      gallery: 'Gallery',
      viewAll: 'View All',
      
      // Footer
      quickLinks: 'Quick Links',
      explore: 'Explore',
      announcements: 'Announcements',
      departments: 'Departments',
      courses: 'Courses',
      emotionalWellness: 'Emotional Wellness',
      antiSexualHarassment: 'Anti-Sexual Harassment Policy',
      ourProgrammes: 'Our Programmes',
      rules: 'Rules',
      corporateLife: 'Corporate Life',
      publications: 'Publications',
      newsletter: 'Newsletter',
      events: 'Events',
      campusLife: 'School Life',
      facultyRecruitment: 'Faculty Recruitment',
      libraryResources: 'Library Resources',
      alumniNetwork: 'Alumni Network',
      contactUs: 'Contact Us',
      tenders: 'Tenders',
      
      // Contact Info
      address: 'Douala, Cameroon',
      copyright: 'Copyright © 2024 Collège Polyvalent Bilingue de Douala. All Rights Reserved.'
    }
  };

  const t = (key) => translations[currentLang][key] || key;

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'fr' ? 'en' : 'fr');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-purple-600 text-white">
        {/* Top Bar */}
        <div className="bg-purple-700 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>{contentData.header.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>{contentData.header.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center px-2 py-1 bg-purple-600 rounded hover:bg-purple-500 transition-colors"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span>{currentLang === 'fr' ? 'English' : 'Français'}</span>
              </button>
              <button
                onClick={handleAdminLogin}
                className="flex items-center px-2 py-1 bg-purple-800 rounded hover:bg-purple-700 transition-colors"
                title="Accès Admin"
              >
                <Settings className="w-4 h-4" />
              </button>
              <div className="flex space-x-2">
                <Facebook className="w-4 h-4 cursor-pointer hover:text-blue-300" />
                <Twitter className="w-4 h-4 cursor-pointer hover:text-blue-300" />
                <Instagram className="w-4 h-4 cursor-pointer hover:text-pink-300" />
                <Youtube className="w-4 h-4 cursor-pointer hover:text-red-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img src="/LOGO CPBD.png" alt="CPBD Logo" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{contentData.header.collegeName}</h1>
                <p className="text-sm opacity-90">{contentData.header.slogan}</p>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-purple-500 rounded"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`bg-purple-600 border-t border-purple-500 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row md:justify-center md:space-x-12 py-4">
              {[
                { key: 'home', hasDropdown: false },
                { key: 'about', hasDropdown: true },
                { key: 'academics', hasDropdown: true },
                { key: 'research', hasDropdown: true }
              ].map((item) => (
                <li key={item.key} className="relative">
                  <button
                    className="flex items-center justify-center md:justify-start px-6 py-3 hover:bg-purple-500 rounded-lg transition-colors w-full text-center md:text-left font-medium"
                    onClick={() => {
                      if (item.hasDropdown) {
                        handleDropdown(item.key);
                      } else {
                        scrollToSection(item.key === 'home' ? 'hero' : item.key);
                      }
                    }}
                  >
                    {t(item.key)}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-2" />}
                  </button>
                  {item.hasDropdown && activeDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                      <div className="py-2">
                        <button
                          onClick={() => scrollToSection('about')}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                        >
                          {item.key === 'about' ? 'Présentation' : item.key === 'academics' ? 'Programmes' : 'Projets'}
                        </button>
                        {item.key === 'academics' && (
                          <button
                            onClick={() => scrollToSection('academic-programs')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          >
                            Programmes d'Études
                          </button>
                        )}
                        {item.key === 'research' && (
                          <button
                            onClick={() => scrollToSection('research-section')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          >
                            Nos Recherches
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-96 flex items-center justify-center text-white" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-4">{t('heroTitle')}</h2>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            {t('knowMore')}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={contentData.about.image} 
                alt="Collège CPB Douala"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2 text-yellow-300">{contentData.header.collegeName}</h3>
                <p className="text-sm opacity-90">{contentData.header.slogan}</p>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 mb-6">{t('aboutUs')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {currentLang === 'fr' ? contentData.about.textFr : contentData.about.textEn}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Zone */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-purple-600 mb-12">{t('academicZone')}</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: t('department') },
              { icon: Users, title: t('programmes') },
              { icon: Calendar, title: t('notification') },
              { icon: Trophy, title: t('admission') }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Academic Section */}
      <section id="academic-programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-600 text-center mb-12">Nos Programmes Académiques</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Enseignement Secondaire Bilingue</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre collège offre un programme d'enseignement secondaire complet en français et en anglais, 
                préparant nos élèves aux diplômes nationaux camerounais et internationaux.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 text-purple-600 mr-3" />
                  Classes de la 6ème à la Terminale
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-3" />
                  Encadrement personnalisé
                </li>
                <li className="flex items-center">
                  <Trophy className="w-5 h-5 text-purple-600 mr-3" />
                  Préparation aux concours
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
                alt="Salle de classe moderne"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-purple-600 mb-4">Sciences et Mathématiques</h5>
              <img 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop" 
                alt="Laboratoire de sciences"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <p className="text-gray-700 text-sm">
                Laboratoires modernes équipés pour l'enseignement des sciences physiques, 
                chimie, biologie et mathématiques avancées.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-purple-600 mb-4">Langues et Littérature</h5>
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop" 
                alt="Bibliothèque"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <p className="text-gray-700 text-sm">
                Enseignement approfondi du français, anglais et littératures nationales 
                et internationales dans un cadre bilingue.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h5 className="text-xl font-bold text-purple-600 mb-4">Sciences Humaines</h5>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop" 
                alt="Cours d'histoire"
                className="w-full h-32 object-cover rounded mb-4"
              />
              <p className="text-gray-700 text-sm">
                Histoire, géographie, philosophie et sciences économiques et sociales 
                adaptées au contexte camerounais et africain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research-section" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-600 text-center mb-12">Recherche et Innovation</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" 
                alt="Recherche scientifique"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Excellence en Recherche Pédagogique</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre équipe pédagogique mène des recherches innovantes pour améliorer 
                les méthodes d'enseignement bilingue adaptées au contexte camerounais.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-bold text-gray-800">Pédagogie Bilingue</h5>
                  <p className="text-gray-600 text-sm">Développement de méthodes d'enseignement innovantes</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-bold text-gray-800">Technologies Éducatives</h5>
                  <p className="text-gray-600 text-sm">Intégration des outils numériques dans l'apprentissage</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-bold text-gray-800">Culture et Éducation</h5>
                  <p className="text-gray-600 text-sm">Valorisation du patrimoine culturel camerounais</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-2">Conférences</h5>
              <p className="text-gray-600 text-sm">Participation à des conférences pédagogiques nationales et internationales</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-2">Publications</h5>
              <p className="text-gray-600 text-sm">Articles de recherche sur l'enseignement bilingue en Afrique</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h5 className="text-xl font-bold text-gray-800 mb-2">Partenariats</h5>
              <p className="text-gray-600 text-sm">Collaboration avec les universités camerounaises et étrangères</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit School */}
      <section 
        className="py-20 text-white text-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h3 className="text-4xl font-bold mb-4">{t('visitSchool')}</h3>
        </div>
      </section>

      {/* Student Life */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-600 text-center mb-12">{t('studentLife')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {(showMoreStudentLife ? contentData.studentLife : contentData.studentLife.slice(0, 3)).map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowMoreStudentLife(!showMoreStudentLife)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showMoreStudentLife ? 'Voir Moins' : t('viewMore')}
            </button>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-purple-600">{t('latestNews')}</h3>
                <button 
                  onClick={() => setShowMoreNews(!showMoreNews)}
                  className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors"
                >
                  {showMoreNews ? 'Voir Moins' : t('viewAll')}
                </button>
              </div>
              <div className="space-y-6">
                {contentData.events.slice(0, 2).map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex gap-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
                {showMoreNews && contentData.events.slice(2).map((event, index) => (
                  <div key={index + 2} className="bg-white p-6 rounded-lg shadow-lg flex gap-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-purple-600">{t('upcomingEvents')}</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors">
                  {t('viewAll')}
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=120&h=80&fit=crop" 
                  alt="Plantation Drive"
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">{t('plantationTitle')}</h4>
                  <p className="text-gray-600 text-sm">{t('plantationText')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section 
        className="py-16 text-white relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=400&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{contentData.counter.students}</div>
              <div className="text-xl">{t('students1000')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{contentData.counter.teachers}</div>
              <div className="text-xl">{t('teachers50')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{contentData.counter.classes}</div>
              <div className="text-xl">{t('classes30')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-purple-600 text-center mb-12">{t('gallery')}</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {(showMoreGallery ? contentData.gallery : contentData.gallery.slice(0, 8)).map((image, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => setShowMoreGallery(!showMoreGallery)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showMoreGallery ? 'Voir Moins' : t('viewAll')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* College Info */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img src="/LOGO CPBD.png" alt="CPBD Logo" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-bold">CPB Douala</h4>
                  <p className="text-sm text-gray-400">Douala, Cameroun</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{contentData.header.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{contentData.header.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{contentData.footer.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('departments')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('courses')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('emotionalWellness')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('antiSexualHarassment')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('ourProgrammes')}</a></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-bold mb-4">{t('explore')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('rules')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('corporateLife')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('publications')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('newsletter')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
              </ul>
            </div>

            {/* Announcements */}
            <div>
              <h4 className="font-bold mb-4">{t('announcements')}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('events')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('campusLife')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('facultyRecruitment')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('libraryResources')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('tenders')}</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-400 transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-pink-400 transition-colors" />
              <Youtube className="w-6 h-6 cursor-pointer hover:text-red-400 transition-colors" />
            </div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              {contentData.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Admin Dashboard */}
      {showAdminDashboard && (
        <AdminDashboard
          contentData={contentData}
          onUpdateContent={handleUpdateContent}
          onClose={() => setShowAdminDashboard(false)}
        />
      )}
    </div>
  );
};

export default CollegeWebsite;
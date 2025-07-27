import React, { useState } from 'react';
import { Save, Edit3, X, Plus, Trash2, Eye, EyeOff } from 'lucide-react';

const AdminDashboard = ({ contentData, onUpdateContent, onClose }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [editingData, setEditingData] = useState(contentData);

  const handleSave = () => {
    onUpdateContent(editingData);
    alert('Modifications sauvegardées avec succès !');
  };

  const updateField = (section, field, value) => {
    setEditingData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setEditingData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addArrayItem = (section, newItem) => {
    setEditingData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeArrayItem = (section, index) => {
    setEditingData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const tabs = [
    { id: 'about', label: 'À Propos' },
    { id: 'academic', label: 'Zone Académique' },
    { id: 'studentLife', label: 'Vie Étudiante' },
    { id: 'events', label: 'Événements' },
    { id: 'gallery', label: 'Galerie' },
    { id: 'counter', label: 'Statistiques' },
    { id: 'header', label: 'En-tête' },
    { id: 'footer', label: 'Pied de page' }
  ];

  const renderAboutTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-purple-600">Section À Propos</h3>
      
      <div>
        <label className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="url"
          value={editingData.about.image}
          onChange={(e) => updateField('about', 'image', e.target.value)}
          className="w-full p-3 border rounded-lg"
          placeholder="URL de l'image"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Texte Français</label>
        <textarea
          value={editingData.about.textFr}
          onChange={(e) => updateField('about', 'textFr', e.target.value)}
          className="w-full p-3 border rounded-lg h-32"
          placeholder="Texte en français"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Texte Anglais</label>
        <textarea
          value={editingData.about.textEn}
          onChange={(e) => updateField('about', 'textEn', e.target.value)}
          className="w-full p-3 border rounded-lg h-32"
          placeholder="Texte en anglais"
        />
      </div>
    </div>
  );

  const renderStudentLifeTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-purple-600">Vie Étudiante</h3>
        <button
          onClick={() => addArrayItem('studentLife', { title: '', image: '' })}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      {editingData.studentLife.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Activité {index + 1}</h4>
            <button
              onClick={() => removeArrayItem('studentLife', index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Titre</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateArrayItem('studentLife', index, 'title', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                value={item.image}
                onChange={(e) => updateArrayItem('studentLife', index, 'image', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEventsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-purple-600">Événements</h3>
        <button
          onClick={() => addArrayItem('events', { title: '', description: '', image: '' })}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Ajouter
        </button>
      </div>

      {editingData.events.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Événement {index + 1}</h4>
            <button
              onClick={() => removeArrayItem('events', index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Titre</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateArrayItem('events', index, 'title', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={item.description}
                onChange={(e) => updateArrayItem('events', index, 'description', e.target.value)}
                className="w-full p-2 border rounded h-20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                value={item.image}
                onChange={(e) => updateArrayItem('events', index, 'image', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGalleryTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-purple-600">Galerie</h3>
        <button
          onClick={() => addArrayItem('gallery', '')}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Ajouter Image
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {editingData.gallery.map((imageUrl, index) => (
          <div key={index} className="border p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Image {index + 1}</span>
              <button
                onClick={() => removeArrayItem('gallery', index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => updateArrayItem('gallery', index, null, e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="URL de l'image"
            />
            {imageUrl && (
              <img src={imageUrl} alt={`Gallery ${index + 1}`} className="w-full h-20 object-cover mt-2 rounded" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderCounterTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-purple-600">Statistiques</h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre d'Étudiants</label>
          <input
            type="number"
            value={editingData.counter.students}
            onChange={(e) => updateField('counter', 'students', e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nombre de Professeurs</label>
          <input
            type="number"
            value={editingData.counter.teachers}
            onChange={(e) => updateField('counter', 'teachers', e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nombre de Classes</label>
          <input
            type="number"
            value={editingData.counter.classes}
            onChange={(e) => updateField('counter', 'classes', e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  const renderHeaderTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-purple-600">En-tête</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Téléphone</label>
          <input
            type="text"
            value={editingData.header.phone}
            onChange={(e) => updateField('header', 'phone', e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={editingData.header.email}
            onChange={(e) => updateField('header', 'email', e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Nom du Collège</label>
        <input
          type="text"
          value={editingData.header.collegeName}
          onChange={(e) => updateField('header', 'collegeName', e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slogan</label>
        <input
          type="text"
          value={editingData.header.slogan}
          onChange={(e) => updateField('header', 'slogan', e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>
    </div>
  );

  const renderFooterTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-purple-600">Pied de page</h3>
      
      <div>
        <label className="block text-sm font-medium mb-2">Adresse</label>
        <input
          type="text"
          value={editingData.footer.address}
          onChange={(e) => updateField('footer', 'address', e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Copyright</label>
        <input
          type="text"
          value={editingData.footer.copyright}
          onChange={(e) => updateField('footer', 'copyright', e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
      </div>
    </div>
  );

  const renderAcademicTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-purple-600">Zone Académique</h3>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <p className="text-gray-700">
          La section Zone Académique utilise des icônes et des textes de traduction statiques. 
          Pour personnaliser cette section, vous pouvez modifier les traductions dans le code.
        </p>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about': return renderAboutTab();
      case 'academic': return renderAcademicTab();
      case 'studentLife': return renderStudentLifeTab();
      case 'events': return renderEventsTab();
      case 'gallery': return renderGalleryTab();
      case 'counter': return renderCounterTab();
      case 'header': return renderHeaderTab();
      case 'footer': return renderFooterTab();
      default: return <div>Onglet non trouvé</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Edit3 className="w-5 h-5" />
            Dashboard Admin - CPBD
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t">
              <button
                onClick={handleSave}
                className="w-full bg-green-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Sauvegarder
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
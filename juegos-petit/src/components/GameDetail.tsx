import React, { useState } from 'react';
import { ChevronRight, Star, Users, Clock, Gamepad2 } from 'lucide-react';
import type { Game } from '../data/gameData';
import PlayForm from './Form';

interface GameDetailProps {
  game: Game | null;
  onBack: () => void;
  onPlay: (gameId: string) => void;
  onBackClick?: (game?: Game) => void;
  onShare?: (platform: string, game?: Game) => void;
  onComment?: (gameId: string, comment: string) => void;
}

const GameDetail: React.FC<GameDetailProps> = ({ game, onBack, onPlay }) => {
  const [showPlayForm, setShowPlayForm] = useState(false);

  const handlePlayClick = () => {
    setShowPlayForm(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = (formData: any) => {
    // Simular envío a backend
    console.log('Datos de participación:', formData);
    console.log('Juego:', game?.title);
    
    // Mostrar mensaje de éxito
    alert(`¡Registro exitoso!\n\nHola ${formData.nombre} ${formData.apellido}, te has registrado exitosamente para jugar "${game?.title}".\n\nEn breve nos contactaremos contigo al email ${formData.email} para coordinar la actividad.`);
    
    // Llamar al onPlay original si existe
    if (game) {
      onPlay(game.id);
    }
  };

  // Si no hay juego, mostrar loading o redirigir inmediatamente
  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando juego...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
        >
          <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
          Volver a juegos
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag) => (
                    <span key={tag} className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {game.title}
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-medium">{game.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{game.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{game.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    <span>{game.ageGroup}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {game.detailedDescription}
                </p>

                {/* What you'll learn */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué aprenderás jugando?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {game.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Materiales necesarios</h3>
                  <ul className="space-y-3">
                    {game.materials.map((material, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2 flex items-center justify-center gap-2">
                  <Gamepad2 className="w-8 h-8" />
                  ¡Jugar Gratis!
                </div>
              </div>

              <button 
                onClick={handlePlayClick}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6"
              >
                Comenzar a jugar
              </button>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Creador:</span>
                  <span className="font-medium">{game.author}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-medium">{game.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Edad:</span>
                  <span className="font-medium">{game.ageGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Participantes:</span>
                  <span className="font-medium">{game.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categorías:</span>
                  <span className="font-medium">{game.category.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de participación */}
      <PlayForm
        isOpen={showPlayForm}
        onClose={() => setShowPlayForm(false)}
        gameTitle={game.title}
        gameType={game.type}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default GameDetail;
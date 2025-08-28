import React, { useState } from 'react';
import { games } from '../data/gameData';
import type { Game } from '../data/gameData';
import ProvinciaBanner from './ProvinciaBanner';
import GameCard from './GameCard';
import { Gamepad2, Award, Users } from 'lucide-react';

interface GamesHomeProps {
  onGameClick: (game: Game) => void;
  onNewsletterSubscribe: (email: string) => void;
  isSubscribed: boolean;
}

const GamesHome: React.FC<GamesHomeProps> = ({ onGameClick, onNewsletterSubscribe, isSubscribed }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const featuredGame = games[0];
  const otherGames = games.slice(1);

  const handleNewsletterSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Por favor ingresa un email válido');
      return;
    }

    setIsLoading(true);
    
    // Simular delay de envío
    setTimeout(() => {
      onNewsletterSubscribe(email);
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-16 pb-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-semibold text-[#74a4ab] leading-tight mb-6">
                Juegos Petit Financieros
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Aprendé educación financiera de manera divertida con juegos interactivos diseñados especialmente para niños y familias.
                Desarrollá habilidades de ahorro, presupuesto y decisiones financieras inteligentes.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => document.getElementById('featured-game')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Ver juegos
                </button>
                <button 
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-gray-600 px-8 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  Suscribirse
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Juegos Educativos</h3>
                  <p className="text-gray-600">Actividades diseñadas por expertos en educación financiera</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Aprendizaje Garantizado</h3>
                  <p className="text-gray-600">Conceptos financieros básicos de forma divertida</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Para Toda la Familia</h3>
                  <p className="text-gray-600">Actividades que unen y educan a padres e hijos</p>
                </div>
              </div>
            </div>
            
            {/* Banner */}
            <div className="relative">
              <ProvinciaBanner />
            </div>
          </div>
        </section>

        {/* Featured Game */}
        <section id="featured-game" className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-green-600 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">Destacado</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Juego más popular
            </h2>
            <p className="text-gray-600 text-lg">
              El juego favorito de las familias para aprender finanzas
            </p>
          </div>
          
          <GameCard game={featuredGame} isLarge={true} onClick={onGameClick} />
        </section>

        {/* All Games */}
        <section id='all-games' className="py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Disponibles</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Todos los juegos
            </h2>
            <p className="text-gray-600 text-lg">
              Explorá nuestra colección completa de juegos educativos financieros
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherGames.map((game) => (
              <GameCard key={game.id} game={game} onClick={onGameClick} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="px-8 py-12 text-center">
              {isSubscribed ? (
                <div className="max-w-md mx-auto">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Ya estás suscripto!
                  </h3>
                  <p className="text-gray-600">
                    Revisá tu email para confirmar la suscripción. 
                    Pronto recibirás notificaciones sobre nuevos juegos y actividades.
                  </p>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-4">
                      🎯 Newsletter de juegos educativos
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      No te pierdas ningún juego
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8">
                      Únete a <strong className="text-gray-900">más de 8,000 familias</strong> que 
                      reciben notificaciones sobre nuevos juegos educativos y actividades financieras para niños.
                    </p>
                  </div>

                  {/* Form */}
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-6">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                      <button 
                        onClick={handleNewsletterSubmit}
                        disabled={isLoading}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Enviando...' : 'Suscribirme'}
                      </button>
                    </div>
                  </div> 
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GamesHome;
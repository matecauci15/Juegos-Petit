import { useState } from 'react';
import type { Game } from './data/gameData';
import Header from './components/Header';
import Footer from './components/Footer';
import GamesHome from './components/GamesHome';
import GameDetail from './components/GameDetail';
import { useNavigate } from 'react-router-dom';

// Componente principal de la App
const App = () => {
  const [currentView, setCurrentView] = useState<'home' | 'gameDetail'>('home');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [activeSection, setActiveSection] = useState<string>('Juegos');
  const [, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const navigate = useNavigate();

  // Manejar click en un juego (ir a detalle)
  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    setCurrentView('gameDetail');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar botón "Volver a juegos"
  const handleBackToGames = () => {
    setCurrentView('home');
    // No limpiamos selectedGame inmediatamente para evitar el error
    // Se limpiará cuando seleccionen otro juego
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar registro para jugar
  const handlePlayGame = (gameId: string) => {
    const game = selectedGame;
    if (game) {
      alert(`¡Te has registrado para jugar "${game.title}"!`);
      console.log('Registro para juego:', gameId);
    }
  };

  const handleNewsletterSubscribe = (emailValue: string) => {
    if (emailValue && emailValue.includes('@')) {
      setEmail(emailValue);
      setIsSubscribed(true);
      setShowNotification(true);
      
      // Simular envío a backend
      console.log('Suscribiendo email:', emailValue);
      
      // Ocultar notificación después de 3 segundos
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      alert('Por favor ingresa un email válido');
    }
  };

  const handleShare = (platform: string, game?: Game) => {
    const title = game ? game.title : 'Juegos Educativos Petit Financieros';
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank');
        break;
      default:
        // Copiar al portapapeles
        navigator.clipboard.writeText(url).then(() => {
          alert('¡Link copiado al portapapeles!');
        });
    }
  };

  const handleSectionChange = (newSection: string) => {
    if (newSection === 'Rosario') {
      navigate('/');
    } else {
      navigate(`/${newSection.toLowerCase()}`);
    }
  };

  const handleComment = (gameId: string, comment: string) => {
    // Simular funcionalidad de comentarios
    if (comment) {
      alert('¡Gracias por tu comentario! Lo revisaremos pronto.');
      console.log('Comentario enviado para juego:', gameId, comment);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>

      {/* Notificación de suscripción */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <span>🎮</span>
            <span className="font-medium">¡Suscripción exitosa!</span>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-grow">
          {currentView === 'home' ? (
            <GamesHome 
              onGameClick={handleGameClick} 
              onNewsletterSubscribe={handleNewsletterSubscribe}
              isSubscribed={isSubscribed}
            />
          ) : (
            <GameDetail 
              game={selectedGame}
              onBack={handleBackToGames}
              onPlay={handlePlayGame}
              onShare={handleShare}
              onComment={handleComment}
            />
          )}
        </main>
        
        <Footer setActiveSection={handleSectionChange}/>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { Clock, Users, Star, ChevronRight, Gamepad2 } from 'lucide-react';
import type { Game } from '../data/gameData';

interface GameCardProps {
  game: Game;
  isLarge?: boolean;
  onClick: (game: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, isLarge = false, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group ${
        isLarge ? 'lg:flex' : ''
      }`}
      onClick={() => onClick(game)}
    >
      <div className={`relative ${isLarge ? 'lg:w-1/2' : ''}`}>
        <img 
          src={game.image} 
          alt={game.title}
          className={`w-full object-cover ${isLarge ? 'h-64 lg:h-full' : 'h-48'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Gamepad2 className="w-3 h-3" />
            {game.type}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-medium">{game.difficulty}</span>
          </div>
        </div>
      </div>
      
      <div className={`p-6 ${isLarge ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          {game.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors ${
          isLarge ? 'text-2xl lg:text-3xl' : 'text-lg'
        }`}>
          {game.title}
        </h3>
        
        <p className={`text-gray-600 mb-4 ${isLarge ? 'text-lg' : 'text-sm'}`}>
          {game.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{game.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{game.participants}</span>
            </div>
            <div className="flex items-center gap-1">
              <Gamepad2 className="w-4 h-4" />
              <span>{game.ageGroup}</span>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
import React, { useState } from 'react';
import { X, Gamepad2, Users, Calendar } from 'lucide-react';

interface PlayFormProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gameType: string;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  edad: string;
  acompanante: string;
  comentarios: string;
}

const PlayForm: React.FC<PlayFormProps> = ({ isOpen, onClose, gameTitle, gameType, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    edad: '',
    acompanante: '',
    comentarios: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones básicas
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.edad) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Por favor ingrese un email válido');
      return;
    }

    setIsSubmitting(true);

    // Simular delay de envío
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
      onClose();
      // Resetear formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        edad: '',
        acompanante: '',
        comentarios: ''
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">¡Empezá a jugar!</h2>
              <p className="text-sm text-gray-600">{gameTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Game Info */}
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Gamepad2 className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Información del juego</span>
            </div>
            <p className="text-sm text-green-700">
              <strong>Juego:</strong> {gameTitle}
            </p>
            <p className="text-sm text-green-700">
              <strong>Tipo:</strong> {gameType}
            </p>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                Apellido *
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Tu apellido"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+54 9 11 1234-5678"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="edad" className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Edad del niño/a *
              </label>
              <select
                id="edad"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Seleccionar edad</option>
                <option value="3-5">3-5 años</option>
                <option value="6-8">6-8 años</option>
                <option value="9-11">9-11 años</option>
                <option value="12-14">12-14 años</option>
                <option value="15+">15+ años</option>
              </select>
            </div>
            <div>
              <label htmlFor="acompanante" className=" text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                <Users className="w-4 h-4" />
                ¿Jugará con un adulto?
              </label>
              <select
                id="acompanante"
                name="acompanante"
                value={formData.acompanante}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Seleccionar</option>
                <option value="si">Sí, con padre/madre</option>
                <option value="tutor">Sí, con tutor/familiar</option>
                <option value="no">No, jugará solo/a</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
              Comentarios adicionales
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="¿Hay algo específico que te gustaría que sepamos? (opcional)"
            />
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-xs text-yellow-800">
              <strong>Nota:</strong> Este formulario es para registrar tu interés en el juego. 
              Nos contactaremos contigo para coordinar la mejor forma de acceder a la actividad. 
              Los juegos son gratuitos y están diseñados para fines educativos.
            </p>
          </div>

          {/* Submit */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Registrando...' : 'Registrarme para jugar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayForm;
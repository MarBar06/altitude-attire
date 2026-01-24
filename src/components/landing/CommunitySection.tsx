import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
// Importación de tus nuevas fotos
import cabinCrew from '@/assets/Cabincrew4.png';
import avion from '@/assets/Avion.png';
import naturalPatch from '@/assets/naturalpatch.png';

const reviews = [
  {
    id: 1,
    text: "The effect on my skin is really notorious! I feel hydrated even after an 11-hour flight.",
    author: "MARIEL",
    role: "Frequent Traveler",
    image: cabinCrew // Usando tu nueva imagen
  },
  {
    id: 2,
    text: "Finally found a way to beat jet lag. The transition between time zones felt seamless.",
    author: "JULIAN",
    role: "Digital Nomad",
    image: avion // Usando tu nueva imagen
  },
  {
    id: 3,
    text: "A natural approach to wellness that actually fits the cabin environment perfectly.",
    author: "SOPHIE",
    role: "Wellness Advocate",
    image: naturalPatch // Usando tu nueva imagen
  }
];

export const CommunitySection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="community" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Superior */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-golden-beige font-inter font-black mb-4">
            JOIN THE ALTESSIA COMMUNITY
          </p>
          <h2 className="text-4xl md:text-5xl font-inter font-black uppercase tracking-tighter text-charcoal">
            FOLLOW US ON IG
          </h2>
        </div>

        {/* Frame Unificado - Altura FIJA para que no varíe entre Julian y Mariel */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sage/10 flex flex-col md:flex-row items-stretch h-auto md:h-[650px]">
          
          {/* Bloque de Imagen - 50% exacto y altura fija */}
          <div className="w-full md:w-1/2 h-[400px] md:h-full overflow-hidden">
            <img 
              key={reviews[current].id}
              src={reviews[current].image} 
              alt={reviews[current].author} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Bloque de Texto - 50% exacto y altura fija */}
          <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-white">
            
            {/* Estrellas en HEX: #E5C896 */}
            <div className="flex gap-1.5 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#E5C896" stroke="none" />
              ))}
            </div>

            <blockquote className="mb-12">
              <p className="text-3xl md:text-4xl font-inter font-black uppercase tracking-tighter text-charcoal leading-[1.05] italic">
                "{reviews[current].text}"
              </p>
            </blockquote>

            <div className="flex items-end justify-between mt-auto">
              <div className="space-y-2">
                <p className="font-inter font-black text-sm tracking-[0.2em] text-[#E5C896] uppercase">
                  {reviews[current].author}
                </p>
                <p className="text-[10px] text-charcoal/40 uppercase tracking-widest font-bold font-inter">
                  {reviews[current].role}
                </p>
              </div>

              {/* Navegación */}
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="p-4 rounded-full border border-sage/10 hover:bg-ivory transition-all text-charcoal/40 hover:text-charcoal shadow-sm active:scale-95"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="p-4 rounded-full border border-sage/10 hover:bg-ivory transition-all text-charcoal/40 hover:text-charcoal shadow-sm active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
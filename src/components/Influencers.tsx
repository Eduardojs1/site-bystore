import { Instagram } from 'lucide-react';

const influencers = [
  {
    id: 1,
    name: 'DUDA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/WzsL06J/11.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/dudayz.rp/',
  },
  {
    id: 2,
    name: 'NAY',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/16QrWZ3/20.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/naylafulano/',
  },
  {
    id: 3,
    name: 'LAELA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/gZZ0BZv/1.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/laela.lazuli_rp/',
  },
  {
    id: 4,
    name: 'TEXUGO',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/jfymfVp/15.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/texxugoo/',
  },
  {
    id: 6,
    name: 'DELACRUZ',
    role: 'Content Creator - STREAMER',
    image: 'https://i.ibb.co/x7TQXNb/14.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/soudelacruz/',
  },
  {
    id: 7,
    name: 'LIPA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/Hr9Qndg/21.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/lipa.rp/',
  },
  {
    id: 9,
    name: 'BLUME',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/5F5vjnN/17.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/alexinharp/',
  },
  {
    id: 10,
    name: 'JAMAICA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/BVQyzk8d/image.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/_jamaicaarp/',
  },

  {
    id: 12,
    name: 'VEGA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/P9dWG6p/26.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/vegafvck/',
  },
  {
    id: 13,
    name: 'JULIA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/khrc57Q/1.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/jullia.rp_/',
  },
  {
    id: 14,
    name: 'DONNA',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/r7Tj9xj/10.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/russac.rp/',
  },
  {
    id: 16,
    name: 'JENNY',
    role: 'Content Creator - Stremer',
    image: 'https://i.ibb.co/MD2GVqjG/Captura-de-tela-2024-12-04-015618.jpg',
    youtube: '#',
    instagram: 'https://www.instagram.com/jenny_yuno/',
  },
  {
    id: 17,
    name: 'LAZZARO',
    role: 'Content Creator - Influencer',
    image: 'https://i.ibb.co/7bhYpMy/22.png',
    youtube: '#',
    instagram: 'https://www.instagram.com/lazzaro.png/',
  },
];


const Influencers = () => {
  return (
    <section id="influencers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos <span className="text-purple-500">Influencers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {influencers.map((influencer) => (
            <div key={influencer.id} className="bg-gray-900 rounded-lg p-6 text-center">
              <img
                src={influencer.image}
                alt={influencer.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{influencer.name}</h3>
              <p className="text-purple-500 mb-4">{influencer.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={influencer.instagram} className="text-gray-400 hover:text-pink-600">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Influencers;

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/N1J0wNk/3.png"
          alt="photo background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            By' Store
            <span className="text-purple-500"> Graphics For FiveM & GTA5</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Mude a realidade visual do seu jogo.
          </p>
          <a
              href="#products"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors mr-4"
          >
            Ver Produtos
          </a>
          <a
              href="https://discord.gg/bystoregg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Acesse a Loja
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
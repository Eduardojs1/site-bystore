import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-500 mb-4">By' Store - Graphics</h3>
            <p className="text-gray-400">
              Os melhores Mods gráficos para GTA 5 e FiveM
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-purple-500">Produtos</a>
              </li>
              <li>
                <a href="#influencers" className="text-gray-400 hover:text-purple-500">Influencers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bystore.fivem/" className="text-gray-400 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@ByStorefivem" className="text-gray-400 hover:text-red-600">
                <Youtube size={24} />
              </a>
              <a href="bystore2k23@gmail.com" className="text-gray-400 hover:text-purple-500">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} By' Store Graphics. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Graphic By Store-3',
    description: 'O melhor Configuração Gráfica para o seu GTA5.',
    image: 'https://i.ibb.co/G0gFFcF/6.png'
  },
  {
    id: 2,
    name: 'Presets de Reshades By Store',
    description: 'Preset de Reshades de todos os estilos e únicos.',
    image: 'https://i.ibb.co/3sHHBFQ/7.png'
  },
  {
    id: 3,
    name: 'Acessibilidade',
    description: 'Produtos para pessoas com a deficiencia ocular: D',
    image: 'https://i.ibb.co/bPhTTxF/12.png'
  }
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos <span className="text-purple-500">Produtos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
                <button
                  onClick={() => navigate('/catalog')}
                  className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
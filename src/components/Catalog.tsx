import { ArrowLeft, ExternalLink } from 'lucide-react';

import { Link } from 'react-router-dom';
import {useState} from "react";

const catalogProducts = [
  {
    id: 1,
    name: "Graphic By Store-3",
    description: "A melhor e mais otimizada configuração gráfica para o seu FiveM/GTA5.",
    longDescription:
        "Sendo criado e configurado para abranjer o gosto de cada um. Otimizado, regulado e prático!",
    features: ["Realista", "Regulado", "Otimizado", "Prático"],
    image: "https://i.ibb.co/KD5J27T/5.png",
    gallery: [
      "https://i.ibb.co/rvG76pJ/2.png",
      "https://i.ibb.co/vLGRZFN/3.png",
      "https://i.ibb.co/DfHNNWZ/4.png",
    ],
  },
  {
    id: 2,
    name: "Presets Reshades - FiveM/GTA5",
    description: "Presets de reshads totalmente unicos e de todos estilos para atender o seu gosto.",
    longDescription:
        "Quer aquele toque final para melhorar ainda mais o realismo do seu GTA? Conheça os nossos presets de reshade de todos estilos, efeitos, e claro, exclusivos e únicos.",
    features: ["Exclusividade", "De todos os Estilos", "únicos", "Detalhados"],
    image: "https://i.ibb.co/9p5fnKW/10.png",
    gallery: [
      "https://i.ibb.co/9Z4QWhP/8.png",
      "https://i.ibb.co/NTBStm8/7.png",
      "https://i.ibb.co/kGdjfmg/6.png",
    ],
  },
  {
    id: 3,
    name: "Acessibilidade à Daltonismo",
    description: "",
    longDescription:
        "Presets de Reshades desenvolvidos para pessoas com a deficiência ocular: Daltonismo. Sendo a primeira loja brasileira de gráficos para FiveM e GTA5",
    features: ["Daltonismo", "Inclusão", "Acessibilidade"],
    image: "https://i.ibb.co/Gxq7ztk/8.png",
    gallery: [
      "https://i.ibb.co/3S5VqhF/14.png",
      "https://i.ibb.co/bPhTTxF/12.png",
      "https://i.ibb.co/j8QTTXd/13.png",
    ],
  },
];

const Catalog = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = ({image}: { image: never }) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-cente mb-8">
            <Link to="/" className="flex items-center text-purple-500 hover:text-purple-400">
              <ArrowLeft className="mr-2" />
              Voltar
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-12 text-center">
            Catálogo<span className="text-purple-500"> By'Store</span>
          </h1>

          <div className="space-y-16">
            {catalogProducts.map((product) => (
                <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-purple-500">{product.name}</h2>
                      <p className="text-gray-300">{product.longDescription}</p>

                      <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-3">Características:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-300">
                                <ExternalLink size={16} className="mr-2 text-purple-500"/>
                                {feature}
                              </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => openModal({image: product.image})}
                      />
                      <div className="text-center text-gray-300 text-sm mt-2">
                        Clique na foto para visualizar melhor
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {product.gallery.map((image, index) => (
                            <div key={index} className="text-center">
                              <img
                                  src={image}
                                  alt={`${product.name} preview ${index + 1}`}
                                  className="w-full h-24 object-cover rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                                  onClick={() => openModal({image: image})}
                              />
                              <div className="text-sm text-gray-300 mt-2">
                                Clique na foto para visualizar melhor
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {modalImage && (
            <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                onClick={closeModal}
            >
              <div className="relative">
                <img
                    src={modalImage}
                    alt="Modal"
                    className="max-w-full max-h-screen rounded-lg transform transition-transform duration-300 scale-100 hover:scale-105"
                />
                <button
                    className="absolute top-4 right-4 text-white text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeModal();
                    }}
                >
                  &times;
                </button>
              </div>
            </div>
        )}
      </div>
  );
};

export default Catalog;

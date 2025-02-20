import { Code, Gamepad2, Users } from 'lucide-react';

const stats = [
  {
    icon: <Gamepad2 size={24} />,
    value: '2K',
    label: 'Membros ao total em nosso discord'
  },
  {
    icon: <Users size={24} />,
    value: '1K',
    label: 'Membros ativos diariamente em nosso discord.'
  },
  {
    icon: <Code size={24} />,
    value: '700',
    label: 'FeedBacks positivos e zero negativos.'
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-bold mb-4">
            BY' <span className="text-purple-500">STORE</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Descubra como nos tornamos referência para a comunidade de FiveM em menos de 1 ano!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-500">Do Sonho à Realidade</h3>
            <p className="text-gray-300">
              Sendo criada em Agosto de Dois Mil e Vinte e Três - 2023. Sendo visível a produção e venda de produtos digitais, espeficadamente em configurações de presets de reshade para FiveM e GTA5.
              Abrangendo o público interessado à realizar suas fotos com clareza e qualidade. Em 2024 expandindo ainda mais a nossa gama de produtos, com gráficos desenvolvidos do zero, novos estilos de reshaders,
              acessibilidade ao entorno disto, como: Reshades para pessoas com deficiência ocular (daltonismo), suporte a reshades à diferentes peles de personagem. Desta forma, 2025 é apenas 2º fase do começo.
            </p>
            <p className="text-gray-300">
              É gratificante que a cada dia recebemos diversos clientes novos, assim como antigos recomprando também. Ajudamos, ensinamos, repassamos dicas, de qualquer forma, criamos um laço de amizade com cada um.
              Temos gratidão e carinho por todos que nos apoiam. 🤍
            </p>
          </div>

          <div className="relative">
            <img
              src="https://i.ibb.co/PNt5W3q/11.png"
              alt="Nossa História"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-purple-500/10 rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4 text-purple-500">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Mostrar, ensinar e trazer a realidade por via de uma foto perfeita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
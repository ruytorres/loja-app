export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Painel de Controle</h1>
      <p className="text-gray-600 mb-8">
        Bem-vindo ao Loja App — Gestão de Estoque, Captação de Leads e CRM com IA para comércio local.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
          <h2 className="font-semibold text-lg mb-2">Estoque</h2>
          <p className="text-3xl font-bold text-blue-600">128</p>
          <span className="text-sm text-gray-500">Produtos cadastrados</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
          <h2 className="font-semibold text-lg mb-2">Leads</h2>
          <p className="text-3xl font-bold text-green-600">45</p>
          <span className="text-sm text-gray-500">Oportunidades ativas</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow border border-gray-100">
          <h2 className="font-semibold text-lg mb-2">Conversões CRM</h2>
          <p className="text-3xl font-bold text-purple-600">68%</p>
          <span className="text-sm text-gray-500">Taxa de fechamento</span>
        </div>
      </div>
    </div>
  );
}

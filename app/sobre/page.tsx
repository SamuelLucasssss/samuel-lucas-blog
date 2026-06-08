export const metadata = {
  title: 'Sobre',
  description: 'Conheça Samuel Lucas: gestão em saúde, dados, IA, compras estratégicas, oncologia e eficiência operacional.'
};

export default function SobrePage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Sobre</p>
      <h1>Gestão em saúde com visão prática, dados e inteligência operacional.</h1>
      <p className="lead">Sou Samuel Lucas, gestor de saúde com atuação em compras estratégicas, operação administrativa, oncologia, pronto-socorro, centro clínico e apoio à gestão de pessoas.</p>
      <div className="contentBox">
        <h2>Minha linha de atuação</h2>
        <p>Minha experiência nasce no chão real da operação em saúde: negociação com fornecedores, análise de custos, apoio a setores assistenciais, organização de fluxos, acompanhamento de demandas administrativas e construção de soluções práticas para reduzir desperdícios.</p>
        <p>Nos últimos anos, passei a conectar essa vivência com dados e inteligência artificial, buscando transformar informação dispersa em leitura executiva, prioridade e decisão. O objetivo não é usar tecnologia por moda. É usar tecnologia para melhorar processos, reduzir retrabalho e fortalecer a jornada do paciente.</p>
        <p>Este espaço reúne artigos, análises e projetos sobre IA aplicada à saúde, eficiência operacional, compras estratégicas, indicadores e jornada do paciente oncológico.</p>
      </div>
      <div className="cards3">
        <article className="card"><span>01</span><h3>Operação</h3><p>Processos, fluxos, indicadores, rotina administrativa e suporte à gestão de setores de saúde.</p></article>
        <article className="card"><span>02</span><h3>Eficiência</h3><p>Compras estratégicas, análise de custos, redução de desperdícios e decisões com visão de sustentabilidade.</p></article>
        <article className="card"><span>03</span><h3>Futuro</h3><p>Dados, IA e tecnologia aplicados com responsabilidade para melhorar a gestão e a experiência do paciente.</p></article>
      </div>
      <div className="contentBox">
        <h2>Por que Sallus Intelligence?</h2>
        <p>Sallus Intelligence é a identidade editorial que organiza essa visão: unir gestão em saúde, dados e inteligência artificial de forma prática, responsável e aplicável.</p>
        <p>É uma marca pessoal voltada para construir autoridade, documentar aprendizados, compartilhar métodos e abrir portas para projetos ligados à eficiência operacional em saúde.</p>
        <div className="actions">
          <a className="button primary" href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler artigo principal</a>
          <a className="button secondary" href="/contato">Entrar em contato</a>
        </div>
      </div>
    </section>
  );
}

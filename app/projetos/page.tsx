export const metadata = {
  title: 'Projetos',
  description: 'Projetos de Samuel Lucas em gestão de saúde, dados, IA, compras estratégicas, oncologia e jornada do paciente.'
};

const projects = [
  ['01', 'Jornada do paciente oncológico', 'Modelo para acompanhar etapas críticas da jornada: consulta, exame, biópsia, autorização, compra de medicamento, infusão, retorno e seguimento. O foco é reduzir atrasos, falhas de comunicação e perda de previsibilidade.'],
  ['02', 'Compras estratégicas em saúde', 'Análise de custo-benefício, prazo, logística, estoque, compatibilidade, validade, fornecedor, risco de ruptura e impacto no fluxo de caixa. Comprar bem em saúde é proteger o cuidado e a sustentabilidade da operação.'],
  ['03', 'IA aplicada à operação', 'Uso de inteligência artificial para relatórios executivos, priorização de tarefas, alertas, análise de gargalos, padronização de processos e suporte à decisão em clínicas e hospitais.'],
  ['04', 'Indicadores e painéis executivos', 'Construção de indicadores simples, úteis e acionáveis para gestão: glosas, agenda, estoque, produtividade, custos, compras, jornada do paciente e riscos operacionais.'],
  ['05', 'Eficiência em clínicas de médio porte', 'Aplicação de métodos enxutos para reduzir retrabalho, organizar rotinas, criar rituais de decisão e dar mais clareza à gestão sem transformar tecnologia em enfeite caro.'],
  ['06', 'Conteúdo e autoridade pública', 'Produção de artigos, análises e estudos de caso sobre IA, dados, oncologia, compras estratégicas e operação em saúde, formando um rastro público de conhecimento e posicionamento profissional.']
];

export default function ProjetosPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Projetos</p>
      <h1>Linhas de trabalho que conectam gestão, dados e cuidado.</h1>
      <p className="lead">Esta página organiza os principais campos de estudo e aplicação prática da marca Samuel Lucas | Sallus Intelligence: operação em saúde, inteligência artificial, compras estratégicas e jornada oncológica.</p>
      <div className="contentBox">
        <h2>Portfólio estratégico</h2>
        <p>Os projetos abaixo funcionam como trilhas de construção de autoridade. Eles conectam experiência prática, análise de dados, inteligência artificial e gestão operacional para resolver problemas reais em clínicas, hospitais e serviços oncológicos.</p>
      </div>
      <div className="cards3">
        {projects.slice(0, 3).map(([number, title, text]) => <article className="card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="cards3">
        {projects.slice(3).map(([number, title, text]) => <article className="card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="contentBox">
        <h2>Próxima evolução</h2>
        <p>O próximo passo é transformar essas linhas em estudos de caso documentados, com problema, método, resultado, impacto e possibilidade de replicação em outras operações de saúde.</p>
        <div className="actions">
          <a className="button primary" href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler artigo principal</a>
          <a className="button secondary" href="/contato">Conversar sobre projetos</a>
        </div>
      </div>
    </section>
  );
}

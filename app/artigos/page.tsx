import Link from 'next/link';

export const metadata = {
  title: 'Artigos',
  description: 'Biblioteca editorial de Samuel Lucas sobre gestão em saúde, IA, dados, oncologia, compras estratégicas e eficiência operacional.'
};

const articles = [
  {
    title: 'Como a IA pode reduzir desperdícios na operação de clínicas oncológicas',
    description: 'Agenda, estoque, glosas, compras, indicadores e jornada do paciente oncológico sob a ótica da IA aplicada.',
    href: '/artigos/ia-reduzir-desperdicios-clinicas-oncologicas',
    tag: 'Publicado • IA na Saúde'
  },
  {
    title: 'Compras estratégicas em saúde: por que o menor preço nem sempre é a melhor decisão',
    description: 'Uma análise sobre custo-benefício, prazo, risco operacional, compatibilidade, fornecedor e impacto no fluxo de caixa.',
    href: '/contato',
    tag: 'Próximo artigo • Compras estratégicas'
  },
  {
    title: 'O papel da jornada do paciente na eficiência da oncologia',
    description: 'Como organizar etapas críticas para reduzir atrasos, retrabalho, falhas de comunicação e perda de previsibilidade.',
    href: '/contato',
    tag: 'Próximo artigo • Jornada oncológica'
  },
  {
    title: 'Como dados podem melhorar decisões administrativas em clínicas e hospitais',
    description: 'Da planilha dispersa ao indicador acionável: como transformar informação em decisão executiva.',
    href: '/contato',
    tag: 'Próximo artigo • Dados e gestão'
  },
  {
    title: 'IA na saúde: o que faz sentido agora e o que ainda é fumaça',
    description: 'Uma visão direta sobre aplicações reais, riscos, limites e oportunidades da IA na operação de saúde.',
    href: '/contato',
    tag: 'Próximo artigo • IA prática'
  }
];

export default function ArtigosPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Artigos</p>
      <h1>Biblioteca editorial sobre saúde, dados e inteligência operacional.</h1>
      <p className="lead">Textos para construir autoridade em gestão de saúde, IA aplicada, eficiência operacional, compras estratégicas e jornada do paciente oncológico.</p>
      <div className="contentBox">
        <h2>Linha editorial</h2>
        <p>Os artigos deste espaço seguem uma lógica simples: transformar problemas reais da operação em saúde em análise prática, linguagem clara e método aplicável. O foco não é falar de tecnologia por moda. É mostrar como dados, IA e gestão podem reduzir desperdícios e melhorar decisões.</p>
      </div>
      <div className="articleList">
        {articles.map((article) => (
          <Link className="articleItem" href={article.href} key={article.title}>
            <span>{article.tag}</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        ))}
      </div>
      <div className="contentBox">
        <h2>Objetivo da biblioteca</h2>
        <p>Construir um rastro público de conhecimento sobre saúde, dados e inteligência artificial aplicada à operação. Cada artigo deve funcionar como uma peça de autoridade, portfólio e documentação profissional.</p>
        <div className="actions">
          <a className="button primary" href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler artigo publicado</a>
          <a className="button secondary" href="/projetos">Ver projetos</a>
        </div>
      </div>
    </section>
  );
}

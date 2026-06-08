import Link from 'next/link';

export const metadata = {
  title: 'Artigos',
  description: 'Artigos sobre gestão em saúde, IA, dados, oncologia e eficiência operacional.'
};

const articles = [
  {
    title: 'Como a IA pode reduzir desperdícios na operação de clínicas oncológicas',
    description: 'Agenda, estoque, glosas, compras, indicadores e jornada do paciente oncológico sob a ótica da IA aplicada.',
    href: '/artigos/ia-reduzir-desperdicios-clinicas-oncologicas',
    tag: 'IA na Saúde'
  }
];

export default function ArtigosPage() {
  return (
    <section className="pageShell">
      <p className="eyebrow">Artigos</p>
      <h1>Conteúdo para gestão em saúde com visão de futuro.</h1>
      <p className="lead">Textos para fortalecer autoridade em saúde, dados, IA, oncologia e eficiência operacional.</p>
      <div className="articleList">
        {articles.map((article) => (
          <Link className="articleItem" href={article.href} key={article.title}>
            <span>{article.tag}</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

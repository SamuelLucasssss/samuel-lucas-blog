import Link from 'next/link';

const pillars = [
  { number: '01', title: 'Gestão em Saúde', text: 'Leitura prática da operação, com foco em eficiência, processos e sustentabilidade.' },
  { number: '02', title: 'Dados e IA', text: 'Uso inteligente de tecnologia para transformar informação em decisão executiva.' },
  { number: '03', title: 'Oncologia', text: 'Jornada do paciente, compras, autorização, agenda, estoque e indicadores assistenciais.' }
];

const articles = [
  {
    title: 'Como a IA pode reduzir desperdícios na operação de clínicas oncológicas',
    description: 'Uma visão prática sobre agenda, estoque, glosas, compras, indicadores e jornada do paciente oncológico.',
    href: '/artigos/ia-reduzir-desperdicios-clinicas-oncologicas'
  },
  {
    title: 'Compras estratégicas em saúde: por que o menor preço nem sempre é a melhor decisão',
    description: 'Próximo artigo da linha editorial sobre custo-benefício, risco operacional e continuidade assistencial.',
    href: '/artigos'
  },
  {
    title: 'O papel da jornada do paciente na eficiência da oncologia',
    description: 'Como organizar etapas críticas para reduzir atrasos, retrabalho e perda de previsibilidade.',
    href: '/artigos'
  }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Sallus Intelligence</p>
          <h1>Inteligência, dados e gestão para uma saúde mais eficiente.</h1>
          <p className="lead">Artigos e projetos sobre inteligência artificial aplicada à saúde, eficiência operacional, compras estratégicas e jornada do paciente oncológico.</p>
          <div className="actions">
            <Link className="button primary" href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler artigo principal</Link>
            <Link className="button secondary" href="/sobre">Conhecer minha trajetória</Link>
          </div>
        </div>
        <aside className="heroPanel" aria-label="Resumo de posicionamento">
          <p>Gestão • Dados • IA</p>
          <h2>Operação de saúde com mais clareza, menos desperdício e melhor decisão.</h2>
          <div className="miniGrid">
            <span><b>IA</b> aplicada ao processo real</span>
            <span><b>Dados</b> virando decisão</span>
            <span><b>Custos</b> com visão estratégica</span>
            <span><b>Paciente</b> no centro da jornada</span>
          </div>
        </aside>
      </section>

      <section className="section">
        <p className="eyebrow">Posicionamento</p>
        <h2>Uma marca pessoal com método, não só opinião.</h2>
        <p className="sectionText">A proposta deste blog é transformar experiência de operação em saúde em conhecimento aplicável, com linguagem executiva, visão de futuro e identidade premium ligada ao universo Sallus.</p>
        <div className="cards3">
          {pillars.map((item) => (
            <article className="card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured">
        <div>
          <p className="eyebrow">Artigo em destaque</p>
          <h2>Como a IA pode reduzir desperdícios na operação de clínicas oncológicas</h2>
          <p>O primeiro artigo da linha editorial: direto, técnico na medida certa e forte para posicionamento profissional.</p>
          <Link className="textLink" href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler agora →</Link>
        </div>
        <img src="/cover.svg" alt="Capa editorial do artigo sobre IA e desperdícios em clínicas oncológicas" />
      </section>

      <section className="section">
        <p className="eyebrow">Linha editorial</p>
        <h2>Temas que constroem autoridade.</h2>
        <div className="cards3">
          {articles.map((article) => (
            <Link className="card linkCard" href={article.href} key={article.title}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

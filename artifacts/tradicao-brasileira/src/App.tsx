import { useEffect, useState } from 'react';
import logoPath from '@assets/0_1000925802_1792681547859.png';

type Source = { label: string; href: string };
type Dish = {
  id: string;
  number: string;
  title: string;
  introduction: string;
  history: string;
  facts: string;
  curiosity: string;
  imagePath: string | null;
  imageAlt: string;
  sources: Source[];
};

const dishes: Dish[] = [
  {
    id: 'batata-chips',
    number: '01',
    title: 'Batata chips',
    introduction: 'Um petisco conhecido, visto por aqui como convite para olhar além do sabor.',
    history: '[Espaço editorial para inserir, após pesquisa e checagem, a história cultural deste alimento.]',
    facts: '[Complemento factual a preencher com informação verificada e sua fonte.]',
    curiosity: '[Curiosidade a pesquisar e confirmar antes da publicação.]',
    imagePath: null,
    imageAlt: 'Fotografia da batata chips a ser adicionada após seleção de imagem verificada.',
    sources: [],
  },
  {
    id: 'empadinha-de-frango',
    number: '02',
    title: 'Empadinha de frango',
    introduction: 'Pequena no tamanho, grande no espaço que pode ocupar numa mesa compartilhada.',
    history: '[Espaço editorial para inserir, após pesquisa e checagem, a história cultural deste alimento.]',
    facts: '[Complemento factual a preencher com informação verificada e sua fonte.]',
    curiosity: '[Curiosidade a pesquisar e confirmar antes da publicação.]',
    imagePath: null,
    imageAlt: 'Fotografia da empadinha de frango a ser adicionada após seleção de imagem verificada.',
    sources: [],
  },
  {
    id: 'pipoca',
    number: '03',
    title: 'Pipoca',
    introduction: 'Grãos que estouram e abrem espaço para perguntas sobre conhecimento, técnica e memória.',
    history: '[Espaço editorial para inserir, após pesquisa e checagem, a história cultural deste alimento.]',
    facts: '[Complemento factual a preencher com informação verificada e sua fonte.]',
    curiosity: '[Curiosidade a pesquisar e confirmar antes da publicação.]',
    imagePath: null,
    imageAlt: 'Fotografia da pipoca a ser adicionada após seleção de imagem verificada.',
    sources: [],
  },
  {
    id: 'refrigerantes',
    number: '04',
    title: 'Refrigerantes',
    introduction: 'Uma bebida de muitas versões — e uma boa oportunidade para pensar em hábitos de consumo.',
    history: '[Espaço editorial para inserir, após pesquisa e checagem, a história cultural desta categoria.]',
    facts: '[Complemento factual a preencher com informação verificada e sua fonte.]',
    curiosity: '[Curiosidade a pesquisar e confirmar antes da publicação.]',
    imagePath: null,
    imageAlt: 'Fotografia de refrigerantes a ser adicionada após seleção de imagem verificada.',
    sources: [],
  },
  {
    id: 'chicletes-e-balas',
    number: '05',
    title: 'Chicletes e balas',
    introduction: 'Sabores pequenos que fazem parte de gestos cotidianos e lembranças compartilhadas.',
    history: '[Espaço editorial para inserir, após pesquisa e checagem, a história cultural desta categoria.]',
    facts: '[Complemento factual a preencher com informação verificada e sua fonte.]',
    curiosity: '[Curiosidade a pesquisar e confirmar antes da publicação.]',
    imagePath: null,
    imageAlt: 'Fotografia de chicletes e balas a ser adicionada após seleção de imagem verificada.',
    sources: [],
  },
];

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa História', href: '#nossa-historia' },
  { label: 'Os Pratos', href: '#os-pratos' },
  { label: 'Fontes', href: '#fontes' },
];

function DishEditorial({ dish, reverse }: { dish: Dish; reverse: boolean }) {
  return (
    <article className={`dish-row${reverse ? ' reverse' : ''}`} id={dish.id} data-testid={`dish-${dish.id}`}>
      <div className="dish-visual">
        <span className="dish-number">CADERNO DE SABORES&nbsp; / &nbsp;{dish.number}</span>
        {dish.imagePath ? (
          <img src={dish.imagePath} alt={dish.imageAlt} loading="lazy" />
        ) : (
          <div className="image-placeholder" role="img" aria-label={dish.imageAlt}>
            <span>
              {dish.title}
              <small>Fotografia editorial em preparação</small>
            </span>
          </div>
        )}
      </div>
      <div className="dish-editorial">
        <div className="dish-kicker">Um alimento, muitas camadas</div>
        <h3>{dish.title}</h3>
        <p className="dish-intro">{dish.introduction}</p>
        <div className="editorial-rule" />
        <section className="fact-block" aria-label={`História de ${dish.title}`}>
          <h4>História em pesquisa</h4>
          <p>{dish.history}</p>
        </section>
        <section className="fact-block" aria-label={`Fatos complementares sobre ${dish.title}`}>
          <h4>Para saber mais</h4>
          <p>{dish.facts}</p>
        </section>
        <section className="fact-block" aria-label={`Curiosidade sobre ${dish.title}`}>
          <h4>Uma curiosidade</h4>
          <p>{dish.curiosity}</p>
        </section>
        <section className="fact-block" aria-label={`Fontes para ${dish.title}`}>
          <h4>Fontes consultadas</h4>
          {dish.sources.length > 0 ? (
            <div className="sources">
              {dish.sources.map((source) => (
                <a className="source-link" href={source.href} key={source.href} target="_blank" rel="noreferrer">
                  {source.label}<span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="source-pending">Referências confiáveis serão adicionadas após a checagem editorial.</p>
          )}
        </section>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Tradição Brasileira — Sabores que contam histórias';
    const description =
      'Uma viagem pelas histórias, memórias e encontros culturais por trás dos sabores da feira Tradição Brasileira.';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    const theme = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]') ?? document.createElement('meta');
    theme.name = 'theme-color';
    theme.content = '#092219';
    if (!theme.parentElement) document.head.appendChild(theme);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="topbar">
        <a className="brand-lockup" href="#inicio" aria-label="Tradição Brasileira — início" onClick={closeMenu}>
          <img src={logoPath} alt="Logo Tradição Brasileira: raízes, fauna e memória" />
          <span className="brand-name">Tradição<span>Brasileira</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="button-menu-toggle"
        >
          {menuOpen ? 'Fechar' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '＋'}</span>
        </button>
        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu} data-testid={`link-nav-${item.href.slice(1)}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-inner fade-in">
            <div className="eyebrow">Brasil é mais que a Copa</div>
            <h1 id="hero-title">Sabores que<br /><em>contam histórias</em></h1>
            <p className="hero-copy">
              Um alimento pode guardar histórias de povos, famílias e encontros. Nesta feira, cada sabor
              é um começo: uma chance de conhecer os costumes que atravessam gerações e fazem parte de
              quem somos.
            </p>
            <a className="hero-action" href="#nossa-historia" data-testid="link-hero-history">
              Conheça o projeto <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note" aria-hidden="true">Memória também se partilha</div>
        </section>

        <section className="intro-section" id="nossa-historia" aria-labelledby="history-title">
          <div>
            <div className="section-index">01 — Nossa História</div>
            <h2 id="history-title">Uma história que não cabe numa receita.</h2>
          </div>
          <div className="intro-copy">
            <p>
              A comida brasileira não nasceu de uma origem única. Ela se transforma no encontro — e também
              nas diferenças — entre conhecimentos e práticas <strong>indígenas, africanas e europeias</strong>,
              entre tantas outras presenças que compõem o país.
            </p>
            <p>
              Esses encontros ganharam formas diversas em cada território. Ingredientes, técnicas e costumes
              mudam de região para região, de comunidade para comunidade, e seguem vivos em novas
              interpretações. Olhar para a mesa é perceber essa história em movimento.
            </p>
            <p>
              A Tradição Brasileira nasceu para levar esse olhar à feira: apresentar alimentos cotidianos
              não como curiosidades soltas, mas como pontos de partida para escutar, pesquisar e compartilhar
              memória.
            </p>
          </div>
        </section>

        <section className="menu-section" id="os-pratos" aria-labelledby="dishes-title">
          <div className="menu-heading">
            <div>
              <div className="section-index">02 — Os Pratos</div>
              <h2 id="dishes-title">O que está<br />na nossa feira.</h2>
            </div>
            <p>Cinco escolhas do cotidiano. Cinco convites para ir além do que está no prato.</p>
          </div>
          <div>
            {dishes.map((dish, index) => (
              <DishEditorial key={dish.id} dish={dish} reverse={index % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="closing" id="fontes" aria-labelledby="closing-title">
          <div>
            <div className="eyebrow">03 — Para levar com você</div>
            <h2 id="closing-title">Muito além<br />do prato.</h2>
          </div>
          <div className="closing-copy">
            <p>
              Cada alimento merece uma história bem contada — e cada história merece ser pesquisada com
              cuidado, respeitando as pessoas e culturas que a mantêm viva.
            </p>
            <p>
              A pesquisa e as referências desta página estão sendo organizadas para que cada fato possa ser
              conferido. <strong>Porque Brasil é mais que a Copa:</strong> é memória, diversidade e cultura
              presente no nosso dia a dia.
            </p>
            <a className="hero-action" href="#os-pratos" data-testid="link-return-to-dishes">
              Voltar aos sabores <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logoPath} alt="" aria-hidden="true" />
          <span>Tradição Brasileira · Projeto de empreendedorismo escolar</span>
        </div>
        <a href="#inicio" data-testid="link-footer-top">Voltar ao início ↑</a>
      </footer>
    </div>
  );
}

export default App;

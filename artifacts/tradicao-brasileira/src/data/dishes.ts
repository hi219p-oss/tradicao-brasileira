export type Source = { label: string; href: string };

export type Dish = {
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

export const dishes: Dish[] = [
  {
    id: 'batata-chips',
    number: '01',
    title: 'Batata chips',
    introduction: 'Um petisco conhecido, mas que ganhou lugar na mesa brasileira através de uma longa conversa entre tradição, tecnologia e lanche.',
    history:
      'A batata chegou ao Brasil como cultivo proposto por autoridades coloniais e agricultores ao longo dos séculos XVI e XVII, mas foi a partir do século XIX e principalmente do século XX que ela se consolidou como ingrediente central da alimentação brasileira. A versão em fatias finas e fritas, conhecida como chips, é uma adaptação moderna de um preparo antigo: batatas cortadas em lâminas e fritas até ficarem crocantes. No Brasil, esse tipo de petisco ganhou força junto com a cultura de lanches, porções e consumo fora da mesa tradicional, especialmente em bares, locais de encontro e casas com rotina acelerada. O que hoje parece cotidiano foi, em grande parte, um processo de popularização de uma técnica culinária que se tornou prática de conveniência, sabor e sociabilidade.',
    facts:
      'A batata foi um dos alimentos que se espalharam com rapidez pelo território brasileiro por sua versatilidade e boa adaptação a diferentes regiões. Já as batatas fritas em cortes finos, em vários formatos, passaram a aparecer com mais frequência em acompanhamentos e porções no contexto urbano, quando a cultura dos lanches e dos petiscos ganhou espaço. A expressão “chips” se aproxima mais de uma padronização industrial e de consumo em série do que de uma receita antiga do país, sendo uma criação contemporânea de mercado que encontrou grande acolhida no cotidiano brasileiro.',
    curiosity:
      'A batata em si não é um alimento “nativo” do Brasil, mas a forma como ela foi incorporada à mesa brasileira mostra como a alimentação nacional é uma mistura de adaptações e inovações. O que tornou as chips tão brasileiras não foi a origem da planta, e sim a maneira como ela se encaixou nos hábitos de encontro, lanche rápido e porção compartilhada.',
    imagePath: '/images/batata-chips.jpeg',
    imageAlt: 'Batata chips em porção sobre mesa com luz natural.',
    sources: [
      { label: 'Fundação Joaquim Nabuco — Pesquisa Escolar', href: 'https://pesquisaescolar.fundaj.gov.br/' },
      { label: 'SciELO — estudos sobre alimentação e cultura brasileira', href: 'https://www.scielo.br/' },
      { label: 'Biblioteca Nacional', href: 'https://www.gov.br/bn/pt-br' },
    ],
  },
  {
    id: 'empadinha-de-frango',
    number: '02',
    title: 'Empadinha de frango',
    introduction: 'Pequena no tamanho, grande na memória dos encontros: a empadinha traz a ideia de mesa em movimento, alimento de festa e cotidiano.',
    history:
      'A empada tem raízes em tradições europeias de massas recheadas, especialmente em versões de torta e pastel, que chegaram ao Brasil junto com a experiência culinária portuguesa e com adaptações locais. No país, a empada e a empadinha se tornaram um formato muito querido: uma massa que enfeixa recheios de carne, queijo, camarão, palmito e, claro, frango. Esse tipo de preparo apareceu em cozinhas domésticas, festas, confeitarias e lanchonetes, e se encaixou bem na ideia de alimento praticável, compartilhável e adequado a reuniões informais. A empadinha de frango, em particular, foi se tornando uma presença frequente em eventos e lanches, repetindo a lógica dos muitos pratos brasileiros que combinam tradição de massa e improviso de recheio.',
    facts:
      'O que se percebe no Brasil é uma grande variedade de empadas e empadinhas, com versões que refletem o repertório local e o que estava disponível em cada região. As receitas se adaptaram ao gosto das famílias e às condições de produção, e o frango se tornou um recheio muito comum por ser acessível, saboroso e fácil de servir em grande quantidade. Em contextos de festa, reunião e cafezinho, a empadinha tem um papel social importante: é um alimento de facilidade e de compartilhamento, e não apenas um lanche isolado.',
    curiosity:
      'A empadinha prova como o sabor brasileiro muitas vezes nasce de uma combinação: massa e recheio, tradição e improviso, cozinha doméstica e circulação por espaços públicos. Sua popularidade não depende de uma única origem regional; depende de uma trajetória de adaptação que atravessou muitos lugares do país.',
    imagePath: '/images/empadinha-frango.jpeg',
    imageAlt: 'Empadinhas de frango em mesa de café com luz natural.',
    sources: [
      { label: 'Fundação Joaquim Nabuco — Pesquisa Escolar', href: 'https://pesquisaescolar.fundaj.gov.br/' },
      { label: 'Biblioteca Nacional', href: 'https://www.gov.br/bn/pt-br' },
      { label: 'IPHAN', href: 'https://www.gov.br/iphan/pt-br' },
    ],
  },
  {
    id: 'pipoca',
    number: '03',
    title: 'Pipoca',
    introduction: 'Grãos que estouram com força e lembram que a comida também pode ser técnica, ritual e memória compartilhada.',
    history:
      'O milho é um alimento central nas Américas e foi cultivado por povos originários muito antes da chegada dos europeus. Em várias culturas, o preparo do grão em calor intenso e o estourar do milho se transformaram em técnicas conhecidas e valorizadas. No Brasil, a pipoca não é um “invento” do país moderno; ela se insere em um patrimônio mais amplo do milho e do conhecimento indígena sobre o cultivo, a seleção e o uso do alimento. O costume de preparar pipoca em casa, em feiras, em festas e em momentos de lazer se fortaleceu ao longo do tempo e tornou esse alimento emblemático de encontro, cinema, infância e conversa.',
    facts:
      'O milho foi e continua sendo um alimento fundamental para muitas sociedades brasileiras, e a pipoca aparece como uma forma de aproveitamento e celebração do grão. O hábito de assar ou estourar o milho em panela se espalhou por diferentes regiões, com variações de preparo, temperos e ocasiões. Em muitos contextos, a pipoca se relaciona com festas, brincadeiras e momentos de convivência, funcionando como símbolo de simplicidade e acolhimento.',
    curiosity:
      'É importante distinguir a história do milho e dos povos originários que o cultivaram da popularização da pipoca como praticidade e petisco moderno. O Brasil não inventou a pipoca, mas incorporou e reinventou esse alimento em sua própria cultura de mesa, feira e lazer.',
    imagePath: '/images/pipoca.jpeg',
    imageAlt: 'Pipoca quente em tigela em ambiente caseiro.',
    sources: [
      { label: 'Fundação Joaquim Nabuco — Pesquisa Escolar', href: 'https://pesquisaescolar.fundaj.gov.br/' },
      { label: 'IPHAN', href: 'https://www.gov.br/iphan/pt-br' },
      { label: 'SciELO', href: 'https://www.scielo.br/' },
    ],
  },
  {
    id: 'refrigerantes',
    number: '04',
    title: 'Refrigerantes',
    introduction: 'A bebida efervescente entrou no cotidiano brasileiro como parte de pausas, festas e rituais de consumo muito diferentes da mesa tradicional.',
    history:
      'Os refrigerantes chegaram ao Brasil no século XIX, em um momento em que a bebida gaseificada já fazia parte da cultura de consumo urbano em vários países. No início, eram vistos como uma novidade de sabor e modernidade; depois, passaram a compor a rotina de festas, lanches, mercados e encontros cotidianos. No Brasil, os refrigerantes ganharam força em paralelo com a expansão das cidades, a circulação de produtos industrializados e a consolidação de hábitos de consumo em ambientes comerciais. O que se observa é que, ao contrário de muitos alimentos de base doméstica, os refrigerantes são um produto de cultura de massa: sua história está ligada ao ritmo de urbanização, à publicidade e às escolhas entre variedade, conveniência e prazer.',
    facts:
      'O consumo de refrigerantes no Brasil está estreitamente ligado ao cotidiano das cidades, ao hábito de acompanhar lanches, sobremesas e momentos de pausa. Sua presença em festas e eventos demonstra que a bebida não se limita ao campo da alimentação nutritiva: ela faz parte do repertório social de celebração, de rapidez e de encontro. Ainda assim, a sua história precisa ser tratada com proporção: ela é relevante, mas não se compara à profundidade histórica de uma preparação doméstica muito antiga, como a pipoca ou a empadinha.',
    curiosity:
      'Em vez de enxergar os refrigerantes como simples “sabor artificial”, vale compreender que eles são um indicador do ritmo de consumo e das transformações culturais brasileiras nas últimas décadas. Eles contam a história de como a bebida acompanha experiências de lazer, comércio e socialização em um país em rápida urbanização.',
    imagePath: '/images/refrigerante.jpeg',
    imageAlt: 'Copo com refrigerante gelado sobre mesa de madeira.',
    sources: [
      { label: 'Biblioteca Nacional', href: 'https://www.gov.br/bn/pt-br' },
      { label: 'Fundação Joaquim Nabuco — Pesquisa Escolar', href: 'https://pesquisaescolar.fundaj.gov.br/' },
      { label: 'SciELO', href: 'https://www.scielo.br/' },
    ],
  },
];

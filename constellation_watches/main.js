'use strict';

const translations = {
  pt: {
    'meta.title': 'Constellation Watches — Tempo, Sob Medida para Você',
    'meta.description': 'Curadoria e montagem artesanal de relógios sob medida. Sourcing internacional, inspeção e calibragem in-house — uma peça única, feita para você.',
    'meta.ogDescription': 'Curadoria e montagem artesanal de relógios sob medida, feita para você.',

    'nav.about': 'Sobre',
    'nav.process': 'Processo',
    'nav.collection': 'Coleção',
    'nav.acervo': 'Acervo',
    'nav.complementos': 'Complementos',
    'nav.customize': 'Personalizar',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contato',
    'nav.langToggleLabel': 'Mudar idioma',
    'nav.themeToggleLabel': 'Alternar tema',
    'nav.menuToggleLabel': 'Abrir menu',

    'acervo.metaTitle': 'Constellation Watches — Acervo',
    'acervo.metaDescription': 'Peças já sourced e disponíveis — o acervo em formação da Constellation Watches.',
    'acervo.label': 'O Acervo',
    'acervo.title': 'Peças Já em Mãos',
    'acervo.subtitle': 'Um catálogo em formação — peças que já sourced e inspecionei, disponíveis para quem chegar primeiro.',
    'acervo.empty': 'O acervo está sendo formado — novas peças em breve.',
    'acervo.cardLink': 'Perguntar Sobre Esta Peça',
    'acervo.noImage': 'Foto em breve',

    'complementos.metaTitle': 'Constellation Watches — Complementos',
    'complementos.metaDescription': 'Pulseiras, porta-relógios, caixas e outros acessórios avulsos da Constellation Watches.',
    'complementos.label': 'Complementos',
    'complementos.title': 'Para Além do Relógio',
    'complementos.subtitle': 'Pulseiras avulsas, porta-relógios, caixas e outros acessórios — vendidos separadamente, sem precisar de uma comissão completa.',
    'complementos.empty': 'Os complementos estão sendo selecionados — novidades em breve.',
    'complementos.cardLink': 'Perguntar Sobre Este Item',
    'complementos.noImage': 'Foto em breve',

    '404.metaTitle': 'Constellation Watches — Página Não Encontrada',
    '404.metaDescription': 'Esta página não existe ou foi movida.',
    '404.eyebrow': 'Fora de Órbita',
    '404.title': 'Esta estrela ainda<br/><em>não foi catalogada.</em>',
    '404.subtitle': 'A página que você procura não existe ou foi movida. Vamos guiar você de volta.',
    '404.cta': 'Voltar ao Início',
    '404.exploreLabel': 'Ou explore',

    'hero.eyebrow': 'Est. 2025 · Recife, Brasil',
    'hero.title': 'Tempo,<br /><em>Sob Medida para Você</em>',
    'hero.subtitle': 'Cada relógio Constellation nasce de uma conversa e ganha forma através de curadoria internacional, inspeção rigorosa e montagem cuidadosa — feito para você, peça única.',
    'hero.ctaPrimary': 'Iniciar Sua Comissão',
    'hero.ctaSecondary': 'Ver Coleção',
    'hero.scroll': 'Role',

    'about.label': 'Nossa História',
    'about.title': 'Onde a Curadoria Encontra a Precisão',
    'about.body1': 'A Constellation Watches nasceu da paixão por relojoaria e da crença de que um grande relógio não precisa ser produzido em massa para ser extraordinário. Cada peça começa com uma busca cuidadosa: percorro o mercado internacional em busca de componentes que unam estética, autenticidade e qualidade — sem atalhos.',
    'about.body2': 'Da inspeção à calibragem, cada relógio passa pelas minhas mãos antes de chegar até você. É um processo artesanal, deliberadamente pequeno, feito para quem valoriza atenção aos detalhes mais do que um nome de grife.',
    'about.pillar1': 'Fornecedores Internacionais',
    'about.pillar2': 'Montagem &amp; Calibragem In-House',
    'about.pillar3': 'Peças Sob Medida',

    'how.label': 'O Processo',
    'how.title': 'Da Ideia ao Pulso',
    'how.step1Title': 'Consulta',
    'how.step1Desc': 'Uma conversa direta para entender seu estilo, orçamento e o propósito do relógio — uso diário, ocasião especial ou peça de coleção.',
    'how.step2Title': 'Curadoria &amp; Importação',
    'how.step2Desc': 'Pesquiso fornecedores internacionais, avaliando estética, autenticidade e custo-benefício de cada componente antes de realizar a importação.',
    'how.step3Title': 'Inspeção &amp; Montagem',
    'how.step3Desc': 'Cada peça é inspecionada, montada e calibrada in-house, com limpeza detalhada para garantir qualidade e resistência ao longo do tempo.',
    'how.step4Title': 'Apresentação &amp; Entrega',
    'how.step4Desc': 'Seu relógio chega em uma embalagem dedicada, escolhida a dedo, acompanhada de uma carta explicando a peça e os detalhes da montagem.',

    'watches.label': 'A Coleção',
    'watches.title': 'Exemplos de Montagem',
    'watches.subtitle': 'Cada peça é fruto de uma seleção criteriosa de componentes e uma montagem sob medida — exemplos do que é possível criar para você.',
    'watches.card1Badge': 'Clássico Automático',
    'watches.card1Detail': 'Aço inoxidável · Mostrador sunburst · Automático · Reserva de marcha 72h',
    'watches.card1Desc': 'Um automático atemporal, pensado para o uso diário. Caixa em aço escovado, mostrador sunburst e movimento com 72 horas de reserva de marcha — selecionado e calibrado para durar.',
    'watches.card2Badge': 'Piloto',
    'watches.card2Detail': 'Titânio grau 5 · Mostrador preto fosco · Cronógrafo · Pulseira em couro',
    'watches.card2Desc': 'Inspirado em instrumentos de aviação, com caixa em titânio leve e cronógrafo de alta legibilidade — para quem busca robustez sem abrir mão da elegância.',
    'watches.card3Badge': 'Dress Watch',
    'watches.card3Detail': 'Aço polido · Mostrador guilloché · Ultra-fino · Pulseira em couro de jacaré',
    'watches.card3Desc': 'Uma peça discreta e refinada para ocasiões formais — caixa ultra-fina, mostrador guilloché e pulseira artesanal em couro.',
    'watches.cardLink': 'Solicitar Peça Semelhante',

    'customization.label': 'Sob Medida',
    'customization.title': 'Cada Detalhe, Decidido por Você',
    'customization.cta': 'Iniciar Sua Comissão',
    'tabnav.case': 'Caixa',
    'tabnav.dial': 'Mostrador',
    'tabnav.strap': 'Pulseira',
    'tabnav.movement': 'Movimento',

    'tab.case.title': 'Material da Caixa',
    'tab.case.desc': 'Seleciono caixas em aço inoxidável, titânio grau 5, PVD preto, bronze ou ouro 18k junto a fornecedores especializados, conforme sua preferência de estilo, peso e resistência. Cada caixa passa por inspeção, limpeza e polimento antes da montagem final.',
    'tab.case.opt1': 'Aço Inoxidável', 'tab.case.opt2': 'Titânio Grau 5', 'tab.case.opt3': 'PVD Preto',
    'tab.case.opt4': 'Bronze', 'tab.case.opt5': 'Bicolor (Aço/Ouro)', 'tab.case.opt6': 'Ouro 18k',

    'tab.dial.title': 'Mostrador',
    'tab.dial.desc': 'O mostrador é a alma do relógio. Seleciono entre acabamentos sunburst, guilloché, texturas fumé e foscas, ou madrepérola e índices aplicados — sempre com o mesmo critério de qualidade que aplico a cada fornecedor.',
    'tab.dial.opt1': 'Sunburst', 'tab.dial.opt2': 'Guilloché', 'tab.dial.opt3': 'Fumé',
    'tab.dial.opt4': 'Fosco', 'tab.dial.opt5': 'Madrepérola', 'tab.dial.opt6': 'Índices Aplicados',

    'tab.strap.title': 'Pulseira &amp; Bracelete',
    'tab.strap.desc': 'Trabalho com fornecedores especializados em couro (jacaré, avestruz, bezerro), borracha de alta performance e braceletes metálicas no mesmo material da caixa. Fivela deployant ou tradicional, no acabamento que você preferir.',
    'tab.strap.opt1': 'Jacaré', 'tab.strap.opt2': 'Avestruz', 'tab.strap.opt3': 'Couro de Bezerro',
    'tab.strap.opt4': 'Borracha Esportiva', 'tab.strap.opt5': 'Bracelete Metálica', 'tab.strap.opt6': 'Milanesa',

    'tab.movement.title': 'Movimento',
    'tab.movement.desc': 'Seleciono movimentos automáticos e de quartzo de fabricantes reconhecidos, escolhidos por precisão, confiabilidade e reserva de marcha — sempre testados e calibrados por mim antes da entrega.',
    'tab.movement.opt1': 'Automático Três Ponteiros', 'tab.movement.opt2': 'Cronógrafo', 'tab.movement.opt3': 'GMT',
    'tab.movement.opt4': 'Data', 'tab.movement.opt5': 'Reserva de Marcha 72h', 'tab.movement.opt6': 'Quartzo de Alta Precisão',

    'testimonials.label': 'Depoimento de Cliente',
    'testimonials.title': 'O Que Dizem Meus Clientes',
    'testimonials.subtitle': 'Minha base de clientes está crescendo — em breve, mais histórias como esta.',
    'testimonials.prev': 'Anterior',
    'testimonials.next': 'Próximo',
    'testimonials.goTo': 'Ir para o depoimento {n}',
    'testimonial1.text': 'O trabalho foi impecável — um automático pensado exatamente para o meu dia a dia, com 72 horas de reserva de marcha. Recomendo de olhos fechados.',
    'testimonial1.author': 'Sr. Costa',
    'testimonial1.location': 'Cliente Constellation Watches',

    'contact.label': 'Inicie a Conversa',
    'contact.title': 'Comissione Seu Relógio',
    'contact.body': 'Todo grande relógio começa com uma conversa. Conte um pouco sobre você, o estilo que procura e o uso que pretende dar à peça. Retorno em até 48 horas para conversarmos sobre os detalhes e possibilidades.',
    'contact.location': 'Recife, Brasil — atendimento remoto, mediante agendamento',

    'form.nameLabel': 'Nome Completo <span class="required">*</span>',
    'form.namePlaceholder': 'Seu nome',
    'form.emailLabel': 'E-mail <span class="required">*</span>',
    'form.emailPlaceholder': 'seu@email.com',
    'form.phoneLabel': 'Telefone',
    'form.watchTypeLabel': 'Tipo de Relógio <span class="required">*</span>',
    'form.watchType.select': 'Selecione um tipo…',
    'form.watchType.dress': 'Clássico / Dress Watch',
    'form.watchType.sport': 'Esportivo / Piloto',
    'form.watchType.chrono': 'Cronógrafo',
    'form.watchType.skeleton': 'Esqueleto',
    'form.watchType.gmt': 'GMT',
    'form.watchType.other': 'Outro / Não sei ainda',
    'form.messageLabel': 'Sua Visão <span class="required">*</span>',
    'form.messagePlaceholder': 'Conte a história por trás do relógio que você imagina, a ocasião, materiais, estilo e tudo o que te inspira…',
    'form.submit': 'Enviar Minha Solicitação',
    'form.success': 'Seu aplicativo de e-mail deve abrir com a mensagem pronta — revise e clique em enviar. Assim que eu receber, respondo em até 48 horas.',
    'form.mailSubject': 'Solicitação de Comissão — {name}',
    'mail.name': 'Nome', 'mail.email': 'E-mail', 'mail.phone': 'Telefone',
    'mail.watchType': 'Tipo de relógio', 'mail.message': 'Visão do cliente',

    'validation.required': '{label} é obrigatório.',
    'validation.minLength': '{label} deve ter pelo menos {min} caracteres.',
    'validation.email': 'Insira um endereço de e-mail válido.',
    'validation.phone': 'Insira um número de telefone válido.',
    'validation.labels.name': 'Nome',
    'validation.labels.email': 'E-mail',
    'validation.labels.phone': 'Telefone',
    'validation.labels.watchType': 'Tipo de relógio',
    'validation.labels.message': 'Mensagem',

    'footer.tagline': 'Tempo, sob medida para você.<br/>Recife, desde 2025.',
    'footer.navHeading': 'Navegar',
    'footer.navAbout': 'Sobre', 'footer.navProcess': 'Processo', 'footer.navCollection': 'Coleção',
    'footer.navAcervo': 'Acervo',
    'footer.navComplementos': 'Complementos',
    'footer.navCustomize': 'Personalização', 'footer.navTestimonials': 'Depoimentos', 'footer.navContact': 'Contato',
    'footer.contactHeading': 'Contato',
    'footer.contactLocation': 'Recife, Brasil',
    'footer.hours': 'Atendimento remoto, mediante agendamento.',
    'footer.responseTime': 'Resposta em até 48 horas.',
    'footer.copyright': '&copy; 2026 Constellation Watches. Todos os direitos reservados.',
  },
  en: {
    'meta.title': 'Constellation Watches — Time, Crafted for You',
    'meta.description': 'Handcrafted curation and assembly of made-to-order watches. International sourcing, in-house inspection and calibration — one piece, made for you.',
    'meta.ogDescription': 'Handcrafted curation and assembly of made-to-order watches, made for you.',

    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.collection': 'Collection',
    'nav.acervo': 'Archive',
    'nav.complementos': 'Accessories',
    'nav.customize': 'Customize',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.langToggleLabel': 'Switch language',
    'nav.themeToggleLabel': 'Toggle theme',
    'nav.menuToggleLabel': 'Toggle menu',

    'acervo.metaTitle': 'Constellation Watches — Archive',
    'acervo.metaDescription': 'Pieces already sourced and available — Constellation Watches’ growing archive.',
    'acervo.label': 'The Archive',
    'acervo.title': 'Pieces Already in Hand',
    'acervo.subtitle': 'A catalog in the making — pieces already sourced and inspected, available on a first-come basis.',
    'acervo.empty': 'The archive is being built — new pieces coming soon.',
    'acervo.cardLink': 'Ask About This Piece',
    'acervo.noImage': 'Photo coming soon',

    'complementos.metaTitle': 'Constellation Watches — Accessories',
    'complementos.metaDescription': 'Straps, watch stands, boxes, and other standalone accessories from Constellation Watches.',
    'complementos.label': 'Accessories',
    'complementos.title': 'Beyond the Watch',
    'complementos.subtitle': 'Standalone straps, watch stands, boxes, and other accessories — sold separately, no full commission required.',
    'complementos.empty': "Accessories are being curated — new additions coming soon.",
    'complementos.cardLink': 'Ask About This Item',
    'complementos.noImage': 'Photo coming soon',

    '404.metaTitle': 'Constellation Watches — Page Not Found',
    '404.metaDescription': 'This page doesn\'t exist or has moved.',
    '404.eyebrow': 'Off Orbit',
    '404.title': 'This star hasn\'t<br/><em>been charted yet.</em>',
    '404.subtitle': "The page you're looking for doesn't exist or has moved. Let's guide you back.",
    '404.cta': 'Back to Home',
    '404.exploreLabel': 'Or explore',

    'hero.eyebrow': 'Est. 2025 · Recife, Brazil',
    'hero.title': 'Time,<br /><em>Crafted for You</em>',
    'hero.subtitle': 'Every Constellation watch begins with a conversation and takes shape through international sourcing, rigorous inspection, and careful assembly — made for you, one piece at a time.',
    'hero.ctaPrimary': 'Start Your Commission',
    'hero.ctaSecondary': 'Explore Collection',
    'hero.scroll': 'Scroll',

    'about.label': 'Our Story',
    'about.title': 'Where Curation Meets Precision',
    'about.body1': "Constellation Watches was born from a passion for horology and the belief that a great watch doesn't need to be mass-produced to be extraordinary. Every piece starts with a careful search: I comb the international market for components that combine aesthetics, authenticity, and quality — no shortcuts.",
    'about.body2': "From inspection to calibration, every watch passes through my hands before it reaches you. It's a deliberately small, hands-on process, made for those who value attention to detail over a brand name.",
    'about.pillar1': 'International Suppliers',
    'about.pillar2': 'In-House Assembly &amp; Calibration',
    'about.pillar3': 'Made-to-Order Pieces',

    'how.label': 'The Process',
    'how.title': 'From Idea to Wrist',
    'how.step1Title': 'Consultation',
    'how.step1Desc': "A direct conversation to understand your style, budget, and the watch's purpose — daily wear, a special occasion, or a collector's piece.",
    'how.step2Title': 'Sourcing &amp; Curation',
    'how.step2Desc': 'I research international suppliers, evaluating the aesthetics, authenticity, and value of each component before importing it.',
    'how.step3Title': 'Inspection &amp; Assembly',
    'how.step3Desc': 'Every part is inspected, assembled, and calibrated in-house, with thorough cleaning to ensure lasting quality and durability.',
    'how.step4Title': 'Presentation &amp; Delivery',
    'how.step4Desc': 'Your watch arrives in a dedicated, hand-chosen package, together with a letter explaining the piece and the details of its assembly.',

    'watches.label': 'The Collection',
    'watches.title': 'Assembly Examples',
    'watches.subtitle': 'Each piece results from a careful selection of components and a bespoke assembly — examples of what can be created for you.',
    'watches.card1Badge': 'Automatic Classic',
    'watches.card1Detail': 'Stainless steel · Sunburst dial · Automatic · 72h power reserve',
    'watches.card1Desc': 'A timeless automatic, built for everyday wear. Brushed steel case, sunburst dial, and a movement with a 72-hour power reserve — sourced and calibrated to last.',
    'watches.card2Badge': 'Pilot',
    'watches.card2Detail': 'Grade-5 titanium · Matte black dial · Chronograph · Leather strap',
    'watches.card2Desc': 'Inspired by aviation instruments — a lightweight titanium case and a highly legible chronograph, for those who want ruggedness without sacrificing elegance.',
    'watches.card3Badge': 'Dress Watch',
    'watches.card3Detail': 'Polished steel · Guilloché dial · Ultra-thin · Alligator strap',
    'watches.card3Desc': 'A discreet, refined piece for formal occasions — ultra-thin case, guilloché dial, and a handcrafted leather strap.',
    'watches.cardLink': 'Request a Similar Piece',

    'customization.label': 'Made to Order',
    'customization.title': 'Every Detail, Decided by You',
    'customization.cta': 'Start Your Commission',
    'tabnav.case': 'Case',
    'tabnav.dial': 'Dial',
    'tabnav.strap': 'Strap',
    'tabnav.movement': 'Movement',

    'tab.case.title': 'Case Material',
    'tab.case.desc': 'I source cases in stainless steel, grade-5 titanium, black PVD, bronze, or 18k gold from specialist suppliers, matched to your preference for style, weight, and durability. Every case is inspected, cleaned, and polished before final assembly.',
    'tab.case.opt1': 'Stainless Steel', 'tab.case.opt2': 'Grade-5 Titanium', 'tab.case.opt3': 'Black PVD',
    'tab.case.opt4': 'Bronze', 'tab.case.opt5': 'Two-Tone (Steel/Gold)', 'tab.case.opt6': '18k Gold',

    'tab.dial.title': 'Dial',
    'tab.dial.desc': 'The dial is the soul of the watch. I select between sunburst finishes, guilloché, fumé and matte textures, or mother-of-pearl and applied indices — always with the same quality criteria I apply to every supplier.',
    'tab.dial.opt1': 'Sunburst', 'tab.dial.opt2': 'Guilloché', 'tab.dial.opt3': 'Fumé',
    'tab.dial.opt4': 'Matte', 'tab.dial.opt5': 'Mother-of-Pearl', 'tab.dial.opt6': 'Applied Indices',

    'tab.strap.title': 'Strap &amp; Bracelet',
    'tab.strap.desc': 'I work with specialist suppliers in leather (alligator, ostrich, calf), high-performance rubber, and metal bracelets matched to the case material. Deployant or pin buckle, in the finish you prefer.',
    'tab.strap.opt1': 'Alligator', 'tab.strap.opt2': 'Ostrich', 'tab.strap.opt3': 'Calf Leather',
    'tab.strap.opt4': 'Rubber Sport', 'tab.strap.opt5': 'Metal Bracelet', 'tab.strap.opt6': 'Milanese Mesh',

    'tab.movement.title': 'Movement',
    'tab.movement.desc': 'I select automatic and quartz movements from recognized manufacturers, chosen for precision, reliability, and power reserve — always tested and calibrated by me before delivery.',
    'tab.movement.opt1': 'Three-Hand Automatic', 'tab.movement.opt2': 'Chronograph', 'tab.movement.opt3': 'GMT',
    'tab.movement.opt4': 'Date', 'tab.movement.opt5': '72h Power Reserve', 'tab.movement.opt6': 'High-Precision Quartz',

    'testimonials.label': 'Client Testimonial',
    'testimonials.title': 'What My Clients Say',
    'testimonials.subtitle': 'My client base is growing — more stories like this one are on the way.',
    'testimonials.prev': 'Previous',
    'testimonials.next': 'Next',
    'testimonials.goTo': 'Go to testimonial {n}',
    'testimonial1.text': 'The work was impeccable — an automatic built exactly for my everyday life, with a 72-hour power reserve. I recommend it with complete confidence.',
    'testimonial1.author': 'Mr. Costa',
    'testimonial1.location': 'Constellation Watches Client',

    'contact.label': 'Begin the Conversation',
    'contact.title': 'Commission Your Watch',
    'contact.body': "Every great watch starts with a conversation. Tell me a bit about yourself, the style you're after, and how you plan to use the piece. I'll get back to you within 48 hours to discuss the details and possibilities.",
    'contact.location': 'Recife, Brazil — remote consultations, by appointment',

    'form.nameLabel': 'Full Name <span class="required">*</span>',
    'form.namePlaceholder': 'Your name',
    'form.emailLabel': 'Email Address <span class="required">*</span>',
    'form.emailPlaceholder': 'your@email.com',
    'form.phoneLabel': 'Phone Number',
    'form.watchTypeLabel': 'Watch Type <span class="required">*</span>',
    'form.watchType.select': 'Select a type…',
    'form.watchType.dress': 'Dress Watch',
    'form.watchType.sport': 'Sport / Pilot',
    'form.watchType.chrono': 'Chronograph',
    'form.watchType.skeleton': 'Skeleton',
    'form.watchType.gmt': 'GMT',
    'form.watchType.other': 'Other / Not Sure Yet',
    'form.messageLabel': 'Your Vision <span class="required">*</span>',
    'form.messagePlaceholder': 'Tell me the story behind the watch you imagine, the occasion, materials, style, and anything else that inspires you…',
    'form.submit': 'Send My Commission Request',
    'form.success': "Your email app should open with the message ready — review it and hit send. Once I receive it, I'll respond within 48 hours.",
    'form.mailSubject': 'Commission Request — {name}',
    'mail.name': 'Name', 'mail.email': 'Email', 'mail.phone': 'Phone',
    'mail.watchType': 'Watch type', 'mail.message': "Client's vision",

    'validation.required': '{label} is required.',
    'validation.minLength': '{label} must be at least {min} characters.',
    'validation.email': 'Please enter a valid email address.',
    'validation.phone': 'Please enter a valid phone number.',
    'validation.labels.name': 'Name',
    'validation.labels.email': 'Email',
    'validation.labels.phone': 'Phone',
    'validation.labels.watchType': 'Watch type',
    'validation.labels.message': 'Message',

    'footer.tagline': 'Time, crafted for you.<br/>Recife, since 2025.',
    'footer.navHeading': 'Navigate',
    'footer.navAbout': 'About', 'footer.navProcess': 'Process', 'footer.navCollection': 'Collection',
    'footer.navAcervo': 'Archive',
    'footer.navComplementos': 'Accessories',
    'footer.navCustomize': 'Customization', 'footer.navTestimonials': 'Testimonials', 'footer.navContact': 'Contact',
    'footer.contactHeading': 'Contact',
    'footer.contactLocation': 'Recife, Brazil',
    'footer.hours': 'Remote consultations, by appointment.',
    'footer.responseTime': 'Response within 48 hours.',
    'footer.copyright': '&copy; 2026 Constellation Watches. All rights reserved.',
  },
};

let currentLang = 'pt';

function t(key, vars) {
  let str = translations[currentLang][key] || translations.pt[key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
  }
  return str;
}

function applyI18n() {
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });

  const titleKey = document.body.dataset.titleKey || 'meta.title';
  const descKey  = document.body.dataset.descKey  || 'meta.description';
  document.title = t(titleKey);
  const metaDesc = document.getElementById('metaDescription');
  if (metaDesc) metaDesc.setAttribute('content', t(descKey));
  const metaOg = document.getElementById('metaOgDescription');
  if (metaOg) metaOg.setAttribute('content', t('meta.ogDescription'));

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.setAttribute('aria-label', t('testimonials.goTo', { n: i + 1 }));
  });

  if (typeof renderAcervoGrid === 'function' && document.getElementById('acervoGrid')) {
    renderAcervoGrid();
  }
  if (typeof renderComplementosGrid === 'function' && document.getElementById('complementosGrid')) {
    renderComplementosGrid();
  }
}

function initLanguage() {
  const toggle = document.getElementById('langToggle');
  const stored = localStorage.getItem('cw-lang');
  currentLang = stored === 'en' ? 'en' : 'pt';
  applyI18n();

  toggle.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    const next = option ? option.dataset.lang : (currentLang === 'pt' ? 'en' : 'pt');
    if (next === currentLang) return;
    currentLang = next;
    localStorage.setItem('cw-lang', currentLang);
    applyI18n();
  });
}

function initTheme() {
  const html   = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('cw-theme');

  const apply = (theme) => {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
  };

  apply(stored || 'light');

  toggle.addEventListener('click', () => {
    const isDark = html.hasAttribute('data-theme');
    const next   = isDark ? 'light' : 'dark';
    apply(next);
    localStorage.setItem('cw-theme', next);
    initParticles();
  });
}

function initNavbar() {
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const siblings = entry.target.parentElement
            ? [...entry.target.parentElement.querySelectorAll('.reveal')]
            : [];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initTestimonials() {
  const track    = document.getElementById('carouselTrack');
  const controls = document.getElementById('carouselControls');
  const dotsWrap = document.getElementById('carouselDots');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');

  if (!track) return;

  const slides = track.querySelectorAll('.testimonial-slide');
  const total  = slides.length;

  if (total <= 1) {
    if (controls) controls.style.display = 'none';
    return;
  }

  let current = 0;
  let timer   = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', t('testimonials.goTo', { n: i + 1 }));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll('.carousel-dot');

  const goTo = (idx) => {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  };

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
  track.parentElement.addEventListener('mouseleave', resetTimer);

  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goTo(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  resetTimer();
}

function initTabSection() {
  const btns   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      btns.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => {
        const match = p.id === `tab-${target}`;
        p.classList.toggle('active', match);
      });
    });
  });
}

const ACERVO_PLACEHOLDER_ICON = `
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.4">
    <circle cx="32" cy="32" r="26" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <line x1="32" y1="10" x2="32" y2="18" stroke="currentColor" stroke-width="2"/>
    <line x1="32" y1="32" x2="44" y2="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="32" y1="32" x2="40" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <rect x="24" y="4" width="16" height="6" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <rect x="24" y="54" width="16" height="6" rx="2" stroke="currentColor" stroke-width="1.5"/>
  </svg>`;

function renderAcervoGrid() {
  const grid = document.getElementById('acervoGrid');
  const empty = document.getElementById('acervoEmpty');
  if (!grid) return;

  const pieces = Array.isArray(window.ACERVO_PIECES) ? window.ACERVO_PIECES : [];

  if (!pieces.length) {
    grid.style.display = 'none';
    if (empty) { empty.style.display = 'block'; empty.textContent = t('acervo.empty'); }
    return;
  }

  grid.style.display = '';
  if (empty) empty.style.display = 'none';

  grid.innerHTML = pieces.map(piece => `
    <div class="watch-card reveal visible">
      <div class="watch-card-image">
        ${piece.image
          ? `<img src="${piece.image}" alt="${piece.name || ''}" loading="lazy" style="width:100%;height:100%;object-fit:cover" />`
          : `<div class="watch-placeholder">${ACERVO_PLACEHOLDER_ICON}</div><span class="acervo-no-image">${t('acervo.noImage')}</span>`}
        ${piece.tag ? `<div class="watch-card-badge">${piece.tag}</div>` : ''}
      </div>
      <div class="watch-card-body">
        <h3 class="watch-card-name">${piece.name || ''}</h3>
        ${piece.detail ? `<p class="watch-card-detail">${piece.detail}</p>` : ''}
        ${piece.desc ? `<p class="watch-card-desc">${piece.desc}</p>` : ''}
        <a href="index.html#contact" class="watch-card-link">${t('acervo.cardLink')}</a>
      </div>
    </div>
  `).join('');
}

function initAcervoGrid() {
  if (!document.getElementById('acervoGrid')) return;
  renderAcervoGrid();
}

const COMPLEMENTOS_PLACEHOLDER_ICON = `
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.4">
    <rect x="10" y="26" width="44" height="30" rx="2" stroke="currentColor" stroke-width="2"/>
    <line x1="10" y1="38" x2="54" y2="38" stroke="currentColor" stroke-width="2"/>
    <line x1="32" y1="26" x2="32" y2="56" stroke="currentColor" stroke-width="2"/>
    <path d="M20 26c0-6 5.4-10 12-10s12 4 12 10" stroke="currentColor" stroke-width="2"/>
  </svg>`;

function renderComplementosGrid() {
  const grid = document.getElementById('complementosGrid');
  const empty = document.getElementById('complementosEmpty');
  if (!grid) return;

  const items = Array.isArray(window.COMPLEMENTOS_ITEMS) ? window.COMPLEMENTOS_ITEMS : [];

  if (!items.length) {
    grid.style.display = 'none';
    if (empty) { empty.style.display = 'block'; empty.textContent = t('complementos.empty'); }
    return;
  }

  grid.style.display = '';
  if (empty) empty.style.display = 'none';

  grid.innerHTML = items.map(item => `
    <div class="watch-card reveal visible">
      <div class="watch-card-image">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name || ''}" loading="lazy" style="width:100%;height:100%;object-fit:cover" />`
          : `<div class="watch-placeholder">${COMPLEMENTOS_PLACEHOLDER_ICON}</div><span class="acervo-no-image">${t('complementos.noImage')}</span>`}
        ${item.tag ? `<div class="watch-card-badge">${item.tag}</div>` : ''}
      </div>
      <div class="watch-card-body">
        <h3 class="watch-card-name">${item.name || ''}</h3>
        ${item.detail ? `<p class="watch-card-detail">${item.detail}</p>` : ''}
        ${item.desc ? `<p class="watch-card-desc">${item.desc}</p>` : ''}
        <a href="index.html#contact" class="watch-card-link">${t('complementos.cardLink')}</a>
      </div>
    </div>
  `).join('');
}

function initComplementosGrid() {
  if (!document.getElementById('complementosGrid')) return;
  renderComplementosGrid();
}

function initFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const rules = {
    name:      { required: true, minLength: 2, labelKey: 'validation.labels.name' },
    email:     { required: true, email: true,  labelKey: 'validation.labels.email' },
    phone:     { required: false, phone: true, labelKey: 'validation.labels.phone' },
    watchType: { required: true, labelKey: 'validation.labels.watchType' },
    message:   { required: true, minLength: 20, labelKey: 'validation.labels.message' },
  };

  const getField  = (id) => document.getElementById(id);
  const getError  = (id) => document.getElementById(`${id}Error`);

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = (v) => !v || /^[\d\s\+\-\(\)\.]{7,20}$/.test(v);

  const validate = (id) => {
    const rule  = rules[id];
    const field = getField(id);
    const error = getError(id);
    const val   = field.value.trim();
    const label = t(rule.labelKey);
    let msg     = '';

    if (rule.required && !val) {
      msg = t('validation.required', { label });
    } else if (val && rule.minLength && val.length < rule.minLength) {
      msg = t('validation.minLength', { label, min: rule.minLength });
    } else if (val && rule.email && !isEmail(val)) {
      msg = t('validation.email');
    } else if (rule.phone && !isPhone(val)) {
      msg = t('validation.phone');
    }

    error.textContent = msg;
    field.classList.toggle('error', !!msg);
    return !msg;
  };

  Object.keys(rules).forEach(id => {
    const field = getField(id);
    if (field) {
      field.addEventListener('blur', () => validate(id));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) validate(id);
      });
    }
  });

  const CONTACT_EMAIL = 'comercial.constellationwatches@gmail.com';

  const buildMailto = () => {
    const data = {
      name: getField('name').value.trim(),
      email: getField('email').value.trim(),
      phone: getField('phone').value.trim(),
      watchType: getField('watchType').selectedOptions[0]?.textContent || '',
      message: getField('message').value.trim(),
    };

    const subject = t('form.mailSubject', { name: data.name });
    const lines = [
      `${t('mail.name')}: ${data.name}`,
      `${t('mail.email')}: ${data.email}`,
    ];
    if (data.phone) lines.push(`${t('mail.phone')}: ${data.phone}`);
    lines.push(`${t('mail.watchType')}: ${data.watchType}`);
    lines.push('');
    lines.push(`${t('mail.message')}:`);
    lines.push(data.message);

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const allValid = Object.keys(rules).map(validate).every(Boolean);
    if (!allValid) return;

    const btn     = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');

    window.location.href = buildMailto();

    form.querySelectorAll('input, select, textarea').forEach(f => f.value = '');
    form.querySelectorAll('.field-error').forEach(err => err.textContent = '');
    form.querySelectorAll('.error').forEach(f => f.classList.remove('error'));
    success.classList.add('show');
    btn.style.display = 'none';
  });
}

function initParticles() {
  const canvas = document.getElementById('starCanvas');
  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ctx  = canvas.getContext('2d');
  let stars  = [];
  let raf    = null;
  let W, H;

  const CRUX_POINTS = [
    { x: 0.50, y: 0.20 },
    { x: 0.50, y: 0.62 },
    { x: 0.62, y: 0.34 },
    { x: 0.38, y: 0.30 },
    { x: 0.47, y: 0.34 },
  ];
  const CRUX_LINES    = [[0, 1], [2, 3]];
  const CRUX_POINTERS = [{ x: 0.86, y: 0.46 }, { x: 0.92, y: 0.40 }];

  let anchorCx, anchorCy, anchorScale;

  const calcAnchor = () => {
    const el = document.querySelector('.hero-content');
    const MIN_MARGIN = 90;
    if (el) {
      const cr = canvas.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      if (er.width > 0 && cr.width > 0) {
        const margins = {
          right:  cr.right - er.right,
          left:   er.left - cr.left,
          top:    er.top - cr.top,
          bottom: cr.bottom - er.bottom,
        };
        const side = Object.keys(margins).reduce((a, b) => margins[a] >= margins[b] ? a : b);
        const room = margins[side];
        if (room >= MIN_MARGIN) {
          anchorScale = Math.min(room * 0.92, 230);
          if (side === 'right') {
            anchorCx = er.right - cr.left + room * 0.5;
            anchorCy = er.top - cr.top + er.height * 0.32;
          } else if (side === 'left') {
            anchorCx = er.left - cr.left - room * 0.5;
            anchorCy = er.top - cr.top + er.height * 0.32;
          } else if (side === 'top') {
            anchorCx = er.left - cr.left + er.width * 0.5;
            anchorCy = er.top - cr.top - room * 0.5;
          } else {
            anchorCx = er.left - cr.left + er.width * 0.5;
            anchorCy = cr.bottom - cr.top - (cr.bottom - er.bottom) + room * 0.5;
          }
          return;
        }
      }
    }
    anchorCx = anchorCy = anchorScale = undefined;
  };

  const drawConstellation = () => {
    if (anchorCx === undefined) return;
    const pt = (p) => ({
      x: anchorCx + (p.x - 0.5) * anchorScale,
      y: anchorCy + (p.y - 0.5) * anchorScale,
    });
    const pts = CRUX_POINTS.map(pt);

    ctx.save();
    CRUX_POINTERS.forEach(p => {
      const { x, y } = pt(p);
      ctx.beginPath();
      ctx.arc(x, y, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      ctx.fill();
    });

    ctx.strokeStyle = 'rgba(212,175,55,0.4)';
    ctx.lineWidth = 1;
    CRUX_LINES.forEach(([a, b]) => {
      ctx.beginPath();
      ctx.moveTo(pts[a].x, pts[a].y);
      ctx.lineTo(pts[b].x, pts[b].y);
      ctx.stroke();
    });

    pts.forEach((p, i) => {
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 13);
      glow.addColorStop(0,    'rgba(255,255,255,0.85)');
      glow.addColorStop(0.3,  'rgba(210,225,255,0.35)');
      glow.addColorStop(1,    'rgba(210,225,255,0)');
      ctx.beginPath();
      ctx.arc(p.x, p.y, 13, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, i === 4 ? 1.5 : 2.4, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
    });
    ctx.restore();
  };

  const RARE_SLOTS = [
    { x: 0.12, y: 0.18 }, { x: 0.50, y: 0.12 }, { x: 0.88, y: 0.18 },
    { x: 0.10, y: 0.55 }, { x: 0.90, y: 0.55 },
    { x: 0.15, y: 0.85 }, { x: 0.50, y: 0.90 }, { x: 0.85, y: 0.85 },
  ];
  let rareActive = false, rareType = null, rareStart = 0;
  let rareX = 0, rareY = 0, rareRot = 0, rareFlip = 1;

  const maybeTriggerRareEvent = () => {
    if (rareActive || Math.random() >= 0.00035) return;
    const isDarkTheme = document.documentElement.hasAttribute('data-theme');
    rareType   = isDarkTheme ? 'sun' : 'blackhole';
    const slot = RARE_SLOTS[Math.floor(Math.random() * RARE_SLOTS.length)];
    rareX      = slot.x * W;
    rareY      = slot.y * H;
    rareRot    = Math.random() * Math.PI * 2;
    rareFlip   = Math.random() < 0.5 ? -1 : 1;
    rareStart  = performance.now();
    rareActive = true;
  };

  const drawBlackHole = (life) => {
    const grow   = Math.min(life / 1.2, 1);
    const shrink = life > 4 ? Math.max(0, 1 - (life - 4) / 1.6) : 1;
    const scale  = grow * shrink;
    if (scale <= 0) { rareActive = false; return; }
    ctx.save();
    ctx.translate(rareX, rareY);
    ctx.rotate(rareRot + life * 0.4);
    ctx.scale(1, rareFlip);
    const rx = 70 * scale, ry = 22 * scale;
    const grad = ctx.createLinearGradient(-rx, 0, rx, 0);
    grad.addColorStop(0,    'rgba(255,140,60,0)');
    grad.addColorStop(0.5,  `rgba(255,180,90,${0.9 * scale})`);
    grad.addColorStop(1,    'rgba(120,180,255,0)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 5 * scale;
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();
    const core = ctx.createRadialGradient(0, 0, 0, 0, 0, 26 * scale);
    core.addColorStop(0,   'rgba(0,0,0,1)');
    core.addColorStop(0.7, 'rgba(0,0,0,1)');
    core.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.arc(0, 0, 26 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    if (life > 5.6) rareActive = false;
  };

  const drawSun = (life) => {
    const grow   = Math.min(life / 1.0, 1);
    const shrink = life > 3.2 ? Math.max(0, 1 - (life - 3.2) / 1.4) : 1;
    const scale  = grow * shrink;
    if (scale <= 0) { rareActive = false; return; }
    ctx.save();
    ctx.translate(rareX, rareY);
    ctx.rotate(rareRot);
    ctx.scale(1, rareFlip);
    for (let i = 0; i < 12; i++) {
      ctx.rotate(Math.PI / 6);
      ctx.strokeStyle = `rgba(255,220,150,${0.35 * scale})`;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(30 * scale, 0);
      ctx.lineTo(70 * scale, 0);
      ctx.stroke();
    }
    const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, 55 * scale);
    halo.addColorStop(0,   `rgba(255,255,240,${0.95 * scale})`);
    halo.addColorStop(0.4, `rgba(255,210,110,${0.5 * scale})`);
    halo.addColorStop(1,   'rgba(255,180,60,0)');
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(0, 0, 55 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    if (life > 4.6) rareActive = false;
  };

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    buildStars();
    calcAnchor();
  };

  const buildStars = () => {
    const count = Math.floor((W * H) / 4000);
    stars = Array.from({ length: count }, () => ({
      x:            Math.random() * W,
      y:            Math.random() * H,
      r:            Math.random() * 1.4 + 0.2,
      speed:        Math.random() * 0.15 + 0.02,
      opacity:      Math.random() * 0.6 + 0.2,
      twinkle:      Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, W, H);

    stars.forEach(s => {
      s.twinkle += s.twinkleSpeed;
      const alpha = s.opacity * (0.5 + 0.5 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.fill();

      s.y -= s.speed;
      if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }
    });

    drawConstellation();

    maybeTriggerRareEvent();
    if (rareActive) {
      const life = (performance.now() - rareStart) / 1000;
      if (rareType === 'blackhole') drawBlackHole(life); else drawSun(life);
    }

    if (Math.random() < 0.003) drawShootingStar();

    raf = requestAnimationFrame(draw);
  };

  const drawShootingStar = () => {
    const x1    = Math.random() * W * 0.8;
    const y1    = Math.random() * H * 0.3;
    const len   = Math.random() * 80 + 60;
    const angle = Math.PI / 6;
    const x2    = x1 + Math.cos(angle) * len;
    const y2    = y1 + Math.sin(angle) * len;

    const grad = ctx.createLinearGradient(x1, y1, x2, y2);
    grad.addColorStop(0,   'rgba(212, 175, 55, 0)');
    grad.addColorStop(0.3, 'rgba(212, 175, 55, 0.9)');
    grad.addColorStop(1,   'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = grad;
    ctx.lineWidth   = 1.5;
    ctx.stroke();
  };

  if (raf) cancelAnimationFrame(raf);

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  if (prefersReducedMotion) {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
      ctx.fill();
    });
    drawConstellation();
    return;
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initTestimonials();
  initTabSection();
  initAcervoGrid();
  initComplementosGrid();
  initFormValidation();
  initParticles();
});

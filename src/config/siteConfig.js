// Configurações globais e dados da Landing Page
export const siteConfig = {
  name: "Vittoria's Studio",
  artistName: "Vittoria Amorim",
  subtitle: "Lash Designer & Especialista em Realce do Olhar",
  tagline: "Cílios e sobrancelhas saudáveis, duradouros e feitos sob medida.",
  bio: "Especialista em visagismo ocular, biossegurança rigorosa e retenção prolongada. Mais de 1.200 atendimentos realizados com foco na saúde dos fios naturais.",
  
  // Imagens principais de exibição
  bannerImage: "/studio-banner.jpg",
  avatarImage: "/vittoria-profile.jpg",

  // Links de Ação (limpos de tokens de rastreamento e configuráveis por ambiente)
  bookingUrl: import.meta.env.VITE_BOOKING_URL || "https://online.maapp.com.br/ilopesstudio",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999",
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL || `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'}?text=Ol%C3%A1%2C+Vittoria%21+Vim+pelo+seu+site+e+gostaria+de+tirar+d%C3%BAvidas.`,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/vittorias.studio/",
  instagramHandle: import.meta.env.VITE_INSTAGRAM_HANDLE || "@vittorias.studio",



  
  // Localização
  location: {
    title: "Vittoria's Studio • Santo André",
    address: "Rua General Glicério, 926",
    neighborhood: "Centro",
    city: "Santo André - SP",
    cep: "09015-191",
    reference: "Próximo à estação Santo André e ao Shopping Grand Plaza",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+General+Glicerio+926+Centro+Santo+Andre+SP",
    wazeUrl: "https://waze.com/ul?q=Rua%20General%20Glicerio%20926%20Santo%20Andre",
    hours: "Terça a Sábado: 09h às 19h (Com agendamento prévio)",
  },

  // Frase da animação do Scroll
  manifesto: {
    badge: "EXPERIÊNCIA EXCLUSIVA",
    text: "Pronta pra conquistar a todos com seu novo olhar? Mais do que cílios, uma experiência única de realce, autoestima e elegância feita sob medida para você."
  },

  // Serviços e Técnicas (Os 4 primeiros aparecem no carrossel de destaque)
  services: [
    {
      id: "volume-brasileiro",
      title: "Volume Brasileiro",
      tagline: "O queridinho: densidade, leveza e retenção incrível",
      description: "Utiliza fios tecnológicos em formato de Y que proporcionam um efeito volumoso sem pesar nos fios naturais. Preenchimento equilibrado e marcante.",
      duration: "Aprox. 2h00",
      retention: "Manutenção em 18 a 25 dias",
      badge: "Mais Pedido",
      popular: true,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fio-a-fio",
      title: "Fio a Fio Clássico",
      tagline: "Naturalidade, sofisticação e efeito rímel impecável",
      description: "Aplicação de um fio sintético ultraleve sobre cada fio natural. Perfeito para quem busca elegância discreta e praticidade no dia a dia.",
      duration: "Aprox. 1h45",
      retention: "Manutenção em 15 a 21 dias",
      badge: "Mais Natural",
      popular: false,
      image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "volume-russo",
      title: "Volume Russo",
      tagline: "Fans artesanais para um olhar denso, volumoso e glamouroso",
      description: "Criação de leques manuais ultra finos (de 3 a 6 fios por fio natural). Proporciona acabamento aveludado, denso e super preenchido.",
      duration: "Aprox. 2h15",
      retention: "Manutenção em 20 a 25 dias",
      badge: "Glamour Total",
      popular: false,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lash-lifting",
      title: "Lash Lifting & Nutrição",
      tagline: "Curvatura, hidratação profunda e tingimento dos seus fios",
      description: "Tratamento para os cílios naturais que curva, alonga visualmente e tinge de preto intenso, com aplicação de queratina e vitaminas.",
      duration: "Aprox. 1h15",
      retention: "Duração de 6 a 8 semanas",
      badge: "Zero Manutenção",
      popular: false,
      image: "https://images.unsplash.com/photo-1562887189-e5d078343de4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "volume-hibrido",
      title: "Volume Híbrido",
      tagline: "O melhor dos dois mundos: definição com efeito texturizado",
      description: "Mescla harmônica do Fio a Fio clássico com fans de Volume Russo. Cria um visual despojado, volumoso e com textura 'Kardashian'.",
      duration: "Aprox. 2h00",
      retention: "Manutenção em 18 a 21 dias",
      badge: "Texturizado",
      popular: false,
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "manutencao-remocao",
      title: "Manutenção & Remoção",
      tagline: "Cuidado contínuo e saúde ocular em primeiro lugar",
      description: "Higienização profunda, remoção de fios crescidos e recolocação de novos fios, ou remoção 100% química sem danificar os naturais.",
      duration: "1h a 1h30",
      retention: "Essencial para a saúde dos fios",
      badge: "Saúde dos Cílios",
      popular: false,
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Diferenciais do atendimento
  differentials: [
    {
      title: "Biossegurança Rígida",
      description: "Pinças esterilizadas, materiais descartáveis por atendimento e protocolos rigorosos de higiene ocular.",
      icon: "ShieldCheck"
    },
    {
      title: "Lash Mapping Personalizado",
      description: "Estudo visagista do formato dos seus olhos (Fox Eyes, Doll Eyes, Esquilo) para valorizar sua beleza única.",
      icon: "Sparkles"
    },
    {
      title: "Adesivos & Fios Certificados",
      description: "Utilização exclusiva de produtos hipoalergênicos testados e aprovados pela ANVISA, prevenindo irritações.",
      icon: "HeartHandshake"
    },
    {
      title: "Isolamento Milimétrico",
      description: "Técnica apurada que garante a preservação do ciclo de crescimento natural dos seus cílios, sem quedas precoces.",
      icon: "Eye"
    },
    {
      title: "Ambiente Acolhedor",
      description: "Maca ergonômica acolchoada, manta macia, temperatura agradável e playlist relaxante para o seu momento.",
      icon: "Coffee"
    },
    {
      title: "Kit Pós-Procedimento",
      description: "Orientações completas de cuidados e escovinha especial para manter seu alinhamento impecável até a manutenção.",
      icon: "Gift"
    }
  ],

  // Depoimentos
  testimonials: [
    {
      name: "Mariana S.",
      text: "Fiz o Volume Brasileiro e simplesmente me apaixonei! Já tem 20 dias e a retenção está perfeita. O atendimento no Vittoria's Studio é impecável, super atenciosa e delicada.",
      tag: "Cliente assídua",
      stars: 5,
      technique: "Volume Brasileiro"
    },
    {
      name: "Camila R.",
      text: "Eu tinha muito medo de estragar meus cílios naturais por experiências ruins no passado. A Vitória explicou todo o processo, fez um mapping perfeito e meus cílios continuam super saudáveis!",
      tag: "1ª vez no estúdio",
      stars: 5,
      technique: "Fio a Fio Clássico"
    },
    {
      name: "Beatriz L.",
      text: "Ambiente maravilhoso em Santo André, fácil de chegar e maca super confortável (eu até dormi durante a aplicação rs). Cílios lindos e zero incômodo nos olhos!",
      tag: "Cliente mensal",
      stars: 5,
      technique: "Volume Russo"
    }
  ],

  // FAQ
  faq: [
    {
      question: "O procedimento de extensão de cílios dói?",
      answer: "Não! O procedimento é 100% indolor, relaxante e confortável. Muitas clientes aproveitam o momento para tirar uma soneca. A aplicação é feita com os olhos fechados sobre os fios naturais, sem tocar na pele da pálpebra."
    },
    {
      question: "Quanto tempo dura e com que frequência devo fazer a manutenção?",
      answer: "A extensão dura enquanto o seu ciclo natural de troca dos cílios ocorrer (que varia entre 4 a 6 semanas). Para manter o preenchimento sempre denso e bonito, recomendamos a manutenção entre 15 e 21 dias."
    },
    {
      question: "Extensão de cílios estraga ou faz cair os cílios naturais?",
      answer: "Mito! Quando aplicada por uma profissional habilitada, com isolamento correto de 1 a 1 e peso adequado para a saúde do fio natural, seus cílios continuam nascendo e se renovando normalmente."
    },
    {
      question: "Posso molhar, lavar o rosto e praticar exercícios?",
      answer: "Com certeza! Os adesivos de alta tecnologia atuais permitem molhar os cílios após o período de secagem inicial. A higienização diária com shampoo neutro infantil ou espuma específica é fundamental para a saúde e retenção."
    },
    {
      question: "Posso usar rímel (máscara de cílios)?",
      answer: "Não recomendamos o uso de rímel nas extensões, pois sua remoção pode arrancar os fios e diminuir a retenção. Com as extensões você já acorda pronta com efeito maquiado todos os dias!"
    },
    {
      question: "Como funciona o agendamento?",
      answer: "Basta clicar em qualquer botão de 'Agendar Horário' na página. Você será direcionada diretamente para o nosso sistema/link oficial de agendamentos, onde pode escolher o dia e horário que melhor se encaixam na sua rotina."
    }
  ]
};

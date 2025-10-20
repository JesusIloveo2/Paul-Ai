import { Language } from '../types';

interface KnowledgeBase {
  historical: { [key: string]: string };
  biblical: { [key: string]: string };
  greetings: { [key in Language]: string };
  defaultResponses: { [key in Language]: string };
}

export const knowledgeBase: KnowledgeBase = {
  historical: {
    'world war': 'World War I (1914-1918) and World War II (1939-1945) were two of the most devastating conflicts in human history. WWI began with the assassination of Archduke Franz Ferdinand and reshaped European borders. WWII arose from unresolved tensions and resulted in over 70 million casualties.',
    'roman empire': 'The Roman Empire (27 BC - 476 AD in the West) was one of history\'s greatest civilizations. It began with Augustus Caesar and at its peak controlled most of Europe, North Africa, and the Middle East. Roman law, engineering, and culture profoundly influenced Western civilization.',
    'renaissance': 'The Renaissance (14th-17th centuries) was a cultural rebirth in Europe, beginning in Italy. It marked a renewed interest in classical learning, art, and humanism. Key figures include Leonardo da Vinci, Michelangelo, and Galileo.',
    'industrial revolution': 'The Industrial Revolution (1760-1840) transformed agrarian societies into industrial ones. It began in Britain with innovations in textile manufacturing, steam power, and iron production. This period fundamentally changed how people lived and worked.',
  },
  biblical: {
    'love': 'The Bible teaches that love is central to faith. 1 Corinthians 13:4-7 states: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs." Jesus emphasized loving God and loving your neighbor as the greatest commandments.',
    'forgiveness': 'Forgiveness is a core biblical principle. Ephesians 4:32 says: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you." Matthew 6:14-15 emphasizes that as we forgive others, we too are forgiven.',
    'truth': 'The Bible emphasizes truth as essential. John 8:32 states: "Then you will know the truth, and the truth will set you free." Proverbs 12:22 says: "The LORD detests lying lips, but he delights in people who are trustworthy."',
    'justice': 'Biblical justice involves righteousness and fairness. Micah 6:8 asks: "What does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." Proverbs 21:15 states: "When justice is done, it brings joy to the righteous but terror to evildoers."',
    'wisdom': 'Proverbs 9:10 teaches: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." James 1:5 encourages: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault."',
  },
  greetings: {
    en: 'Hello! I am Paul, your multilingual assistant. I can help you with mathematics, historical questions, and moral guidance based on biblical principles. How may I assist you today?',
    es: 'Hola! Soy Paul, tu asistente multilingue. Puedo ayudarte con matematicas, preguntas historicas y orientacion moral basada en principios biblicos. ¿Como puedo ayudarte hoy?',
    pt: 'Ola! Eu sou Paul, seu assistente multilingue. Posso ajuda-lo com matematica, questoes historicas e orientacao moral baseada em principios biblicos. Como posso ajuda-lo hoje?',
    it: 'Ciao! Sono Paul, il tuo assistente multilingue. Posso aiutarti con la matematica, domande storiche e guida morale basata su principi biblici. Come posso aiutarti oggi?',
    eu: 'Kaixo! Ni Paul naiz, zure laguntzaile eleanitza. Matematika, galdera historikoak eta printzipio biblikoetan oinarritutako gida moralarekin lagun zaitzaket. Nola lagun zaitzaket gaur?',
    ga: 'Dia duit! Is mise Pol, do chuidiu ilteangach. Is feidir liom cuidiú leat le matamaitic, ceisteanna stairiúla, agus treoir moralta bunaithe ar phrionsabail Bhiobla. Conas is feidir liom cuidiú leat inniu?',
    nl: 'Hallo! Ik ben Paul, uw meertalige assistent. Ik kan u helpen met wiskunde, historische vragen en morele begeleiding op basis van bijbelse principes. Hoe kan ik u vandaag helpen?',
    de: 'Hallo! Ich bin Paul, Ihr mehrsprachiger Assistent. Ich kann Ihnen bei Mathematik, historischen Fragen und moralischer Anleitung auf der Grundlage biblischer Prinzipien helfen. Wie kann ich Ihnen heute helfen?',
    el: 'Γεια σας! Είμαι ο Παύλος, ο πολυγλωσσικός σας βοηθός. Μπορώ να σας βοηθήσω με μαθηματικά, ιστορικές ερωτήσεις και ηθική καθοδήγηση με βάση τις βιβλικές αρχές. Πώς μπορώ να σας βοηθήσω σήμερα;',
    no: 'Hei! Jeg er Paul, din flerspraklige assistent. Jeg kan hjelpe deg med matematikk, historiske sporsmål og moralsk veiledning basert pa bibelske prinsipper. Hvordan kan jeg hjelpe deg i dag?',
    fi: 'Hei! Olen Paul, monikielinen avustajasi. Voin auttaa sinua matematiikassa, historiallisissa kysymyksissä ja moraalisessa ohjauksessa raamatullisten periaatteiden perusteella. Miten voin auttaa sinua tanaan?',
    ru: 'Здравствуйте! Я Пол, ваш многоязычный помощник. Я могу помочь вам с математикой, историческими вопросами и моральным руководством на основе библейских принципов. Чем я могу помочь вам сегодня?',
    ko: '안녕하세요! 저는 폴입니다, 당신의 다국어 도우미입니다. 수학, 역사적 질문 및 성경적 원칙에 기반한 도덕적 지침을 도와드릴 수 있습니다. 오늘 어떻게 도와드릴까요?',
    ja: 'こんにちは！私はポールです、あなたの多言語アシスタントです。数学、歴史的な質問、聖書の原則に基づく道徳的指導をお手伝いできます。今日はどのようにお手伝いできますか？',
    he: 'שלום! אני פול, העוזר הרב-לשוני שלך. אני יכול לעזור לך עם מתמטיקה, שאלות היסטוריות והדרכה מוסרית המבוססת על עקרונות תנ"כיים. איך אוכל לעזור לך היום?',
    ar: 'مرحبا! أنا بول، مساعدك متعدد اللغات. يمكنني مساعدتك في الرياضيات والأسئلة التاريخية والإرشاد الأخلاقي بناءً على المبادئ الكتابية. كيف يمكنني مساعدتك اليوم؟',
  },
  defaultResponses: {
    en: 'I understand your question. Based on biblical principles and historical understanding, I can offer guidance. Could you provide more specific details about what you would like to know?',
    es: 'Entiendo tu pregunta. Basandome en principios biblicos y comprension historica, puedo ofrecer orientacion. ¿Podrias proporcionar mas detalles especificos sobre lo que te gustaria saber?',
    pt: 'Eu entendo sua pergunta. Com base em principios biblicos e compreensao historica, posso oferecer orientacao. Voce poderia fornecer mais detalhes especificos sobre o que gostaria de saber?',
    it: 'Capisco la tua domanda. Basandomi su principi biblici e comprensione storica, posso offrire orientamento. Potresti fornire maggiori dettagli specifici su cio che vorresti sapere?',
    eu: 'Zure galdera ulertzen dut. Printzipio biblikoak eta ulermen historikoan oinarrituta, gida eman dezaket. Jakin nahi duzunari buruzko xehetasun zehatzagoak eman ditzakezu?',
    ga: 'Tuigim do cheist. Bunaithe ar phrionsabail Bhiobla agus tuiscint stairiúil, is feidir liom treoir a thabhairt. An feidir leat sonrai nios sonraithe a sholáthar faoi cad ba mhaith leat a fháil amach?',
    nl: 'Ik begrijp uw vraag. Op basis van bijbelse principes en historisch begrip kan ik begeleiding bieden. Kunt u meer specifieke details geven over wat u zou willen weten?',
    de: 'Ich verstehe Ihre Frage. Basierend auf biblischen Prinzipien und historischem Verständnis kann ich Anleitung bieten. Könnten Sie spezifischere Details darüber angeben, was Sie wissen möchten?',
    el: 'Καταλαβαίνω την ερώτησή σας. Με βάση τις βιβλικές αρχές και την ιστορική κατανόηση, μπορώ να προσφέρω καθοδήγηση. Θα μπορούσατε να δώσετε πιο συγκεκριμένες λεπτομέρειες σχετικά με αυτό που θα θέλατε να μάθετε;',
    no: 'Jeg forstår sporsmalet ditt. Basert pa bibelske prinsipper og historisk forstaelse, kan jeg tilby veiledning. Kan du gi mer spesifikke detaljer om hva du vil vite?',
    fi: 'Ymmärrän kysymyksesi. Raamatullisten periaatteiden ja historiallisen ymmärryksen perusteella voin tarjota ohjausta. Voisitko antaa tarkempia yksityiskohtia siitä, mitä haluaisit tietää?',
    ru: 'Я понимаю ваш вопрос. Основываясь на библейских принципах и историческом понимании, я могу предложить руководство. Не могли бы вы предоставить более конкретные детали о том, что вы хотели бы узнать?',
    ko: '당신의 질문을 이해합니다. 성경적 원칙과 역사적 이해를 바탕으로 지침을 제공할 수 있습니다. 알고 싶은 내용에 대해 더 구체적인 세부 정보를 제공해 주시겠습니까?',
    ja: 'あなたの質問を理解しています。聖書の原則と歴史的理解に基づいて、指導を提供できます。知りたいことについてより具体的な詳細を提供していただけますか？',
    he: 'אני מבין את השאלה שלך. בהתבסס על עקרונות תנ"כיים והבנה היסטורית, אני יכול להציע הדרכה. האם תוכל לספק פרטים ספציפיים יותר על מה שתרצה לדעת?',
    ar: 'أفهم سؤالك. استنادًا إلى المبادئ الكتابية والفهم التاريخي، يمكنني تقديم التوجيه. هل يمكنك تقديم تفاصيل أكثر تحديدًا حول ما تريد معرفته؟',
  },
};

export function getGreeting(language: Language): string {
  return knowledgeBase.greetings[language];
}

export function getDefaultResponse(language: Language): string {
  return knowledgeBase.defaultResponses[language];
}

export function searchHistorical(query: string): string | null {
  const lowerQuery = query.toLowerCase();

  for (const [key, value] of Object.entries(knowledgeBase.historical)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }

  return null;
}

export function searchBiblical(query: string): string | null {
  const lowerQuery = query.toLowerCase();

  for (const [key, value] of Object.entries(knowledgeBase.biblical)) {
    if (lowerQuery.includes(key)) {
      return value;
    }
  }

  return null;
}

export function detectMoralQuery(text: string): boolean {
  const moralKeywords = [
    'moral', 'ethics', 'right', 'wrong', 'should', 'good', 'bad',
    'virtue', 'sin', 'righteousness', 'biblical', 'bible', 'scripture',
    'god', 'jesus', 'faith', 'christian'
  ];

  const lowerText = text.toLowerCase();
  return moralKeywords.some(keyword => lowerText.includes(keyword));
}

export function detectHistoricalQuery(text: string): boolean {
  const historicalKeywords = [
    'history', 'historical', 'when did', 'who was', 'what happened',
    'war', 'ancient', 'empire', 'century', 'revolution', 'era'
  ];

  const lowerText = text.toLowerCase();
  return historicalKeywords.some(keyword => lowerText.includes(keyword));
}

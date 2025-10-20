import { Language } from '../types';
import { evaluateMath, detectMathQuery } from './mathService';
import {
  getGreeting,
  getDefaultResponse,
  searchHistorical,
  searchBiblical,
  detectMoralQuery,
  detectHistoricalQuery,
} from './knowledgeService';

export function generateResponse(userMessage: string, language: Language, isFirstMessage: boolean): string {
  if (isFirstMessage) {
    return getGreeting(language);
  }

  const lowerMessage = userMessage.toLowerCase().trim();

  if (detectMathQuery(lowerMessage)) {
    const mathResult = evaluateMath(lowerMessage);
    if (mathResult) {
      return getResponseInLanguage(`The answer is ${mathResult}`, language);
    }
  }

  if (detectMoralQuery(lowerMessage)) {
    const biblicalAnswer = searchBiblical(lowerMessage);
    if (biblicalAnswer) {
      return biblicalAnswer;
    }
  }

  if (detectHistoricalQuery(lowerMessage)) {
    const historicalAnswer = searchHistorical(lowerMessage);
    if (historicalAnswer) {
      return historicalAnswer;
    }
  }

  return getDefaultResponse(language);
}

function getResponseInLanguage(text: string, language: Language): string {
  const translations: { [key in Language]: { [key: string]: string } } = {
    en: { 'The answer is': 'The answer is' },
    es: { 'The answer is': 'La respuesta es' },
    pt: { 'The answer is': 'A resposta e' },
    it: { 'The answer is': 'La risposta e' },
    eu: { 'The answer is': 'Erantzuna da' },
    ga: { 'The answer is': 'Is e an freagra' },
    nl: { 'The answer is': 'Het antwoord is' },
    de: { 'The answer is': 'Die Antwort ist' },
    el: { 'The answer is': 'Η απάντηση είναι' },
    no: { 'The answer is': 'Svaret er' },
    fi: { 'The answer is': 'Vastaus on' },
    ru: { 'The answer is': 'Ответ' },
    ko: { 'The answer is': '답은' },
    ja: { 'The answer is': '答えは' },
    he: { 'The answer is': 'התשובה היא' },
    ar: { 'The answer is': 'الجواب هو' },
  };

  for (const [key, value] of Object.entries(translations[language])) {
    text = text.replace(key, value);
  }

  return text;
}

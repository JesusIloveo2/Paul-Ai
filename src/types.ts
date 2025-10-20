export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type Language =
  | 'en' | 'es' | 'pt' | 'it' | 'eu' | 'ga'
  | 'nl' | 'de' | 'el' | 'no' | 'fi' | 'ru'
  | 'ko' | 'ja' | 'he' | 'ar';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

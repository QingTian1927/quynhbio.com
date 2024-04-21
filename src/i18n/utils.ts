import { ui, defaultLang, wordOrder } from './ui';

export function getLangFromUrl(url: URL) {
    const [_, lang] = url.pathname.split('/');

    if (lang in ui) { return lang as keyof typeof ui; }
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function translate(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function getWordOrder(lang: keyof typeof wordOrder) {
    return wordOrder[lang] || wordOrder[defaultLang];
}

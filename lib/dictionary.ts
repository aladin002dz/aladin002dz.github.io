import 'server-only';

const dictionaries = {
    en: () => import('../dictionaries/en').then((module) => module.en),
    fr: () => import('../dictionaries/fr').then((module) => module.fr),
    ar: () => import('../dictionaries/ar').then((module) => module.ar),
};

export const getDictionary = async (locale: string) => {
    if (locale in dictionaries) {
        // @ts-ignore
        return dictionaries[locale]();
    }
    return dictionaries.en();
};

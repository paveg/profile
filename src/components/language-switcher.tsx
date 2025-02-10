import { useTranslation } from 'react-i18next';

import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="fixed top-4 right-4"
    >
      {t('language.title')}: {t(`language.${i18n.language}`)}
    </Button>
  );
};

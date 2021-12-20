import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
    const { t } = useTranslation();
    return(
        <>
          
          <h4 className= "my-3" >{t('pagenotfound')}</h4>
        </>
    )
}

export default PageNotFound;
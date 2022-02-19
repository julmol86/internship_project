import { useTranslation } from 'react-i18next';

const RegistrationSuccess = () => {
    const { t } = useTranslation();
    return(
        <>
          
          <h4 className= "my-3" >{t('user.registrationsuccess')}</h4>
        </>
    )
}

export default RegistrationSuccess;

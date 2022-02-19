import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const HomePageAdmin = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return(
      <>
        
        <Button variant="primary" onClick={() => navigate("/organization/regeventlist")}>
          {t('organization.homepage.button.registrationlist')}
        </Button>{' '}
        
      </>
  )
}

export default HomePageAdmin;

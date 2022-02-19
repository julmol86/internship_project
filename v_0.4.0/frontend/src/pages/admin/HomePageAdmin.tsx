import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const HomePageAdmin = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return(
        <>
          
          <Button variant="primary" onClick={() => navigate("/admin/createorganization")}>
            {t('admin.homepage.button.createorganization')}
          </Button>{' '}
          
          <Button variant="primary" onClick={() => navigate("/admin/createevent")}>
            {t('admin.homepage.button.createevent')}
          </Button>{' '}
          
          <Button variant="primary" onClick={() => navigate("/admin/regeventlist")}>
            {t('admin.homepage.button.registrationlist')}
          </Button>{' '}

          <Button variant="primary" onClick={() => navigate("/admin/userslist")}>
            {t('admin.homepage.button.userlist')}
          </Button>{' '}

          <Button variant="primary" onClick={() => navigate("/admin/eventlist")}>
            {t('admin.homepage.button.eventlist')}
          </Button>{' '}
          
        </>
    )
}

export default HomePageAdmin;

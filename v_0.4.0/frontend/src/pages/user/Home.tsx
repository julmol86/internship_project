import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { getAllEvents } from '../../rest'
import Button from 'react-bootstrap/Button';
import { formatDateToString } from '../../utils'

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
      // fetch data from backend
      const fetchAllEvents = async () => {
          const response = await getAllEvents()
          setEvents(response.data)
      }
      // call function
      fetchAllEvents();
  }, []);

  // UI form visible to user in browser
  return (
    <>
      {events.map(x => <div key={x.id}>
        <Card border="secondary">
          <Card.Header>{formatDateToString(x.startDate)} {x.endDate ? '- ' + formatDateToString(x.endDate) : undefined}</Card.Header>
          <Card.Body>
            <Card.Title>{i18n.language === 'en' ? x.nameEn : x.nameFi}</Card.Title>
            <Card.Text>
              {t('user.home.event.city')}: {x.city}
              {x.address && (
                <>
                  <br/>
                  {t('user.home.event.address')}: {x.address}
                </>
              )}
              <br/>
              {t('user.home.event.registrationDueDate')}: {formatDateToString(x.registrationDueDate)}
              {x.infoText && (
                <>
                  <br/>
                  {t('user.home.event.infoText')}: {x.infoText}
                </>
              )}
            </Card.Text>
            <Button onClick={() => navigate(`/event/${x.id}/register`)}>{t('user.home.event.register')}</Button>
            <Button onClick={() => navigate(`/event/${x.id}/registrationlist`)}>{t('user.home.event.registrationlist')}</Button>
          </Card.Body>
        </Card>
      </div>
      )}
    </>
  );
}

export default Home;

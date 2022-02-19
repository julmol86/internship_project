// import library for backend queries
import axios from 'axios';
import { EventType } from './schema/eventSchema';
import { RegisterType } from './schema/registerSchema';
import { OrganizationType } from './schema/organizationSchema';
import { SignInType } from './schema/signinSchema';

// get
export const getRegistrationList = (eventId: string, showOnlyPublic = false) => axios.get(`http://localhost:8090/event/${eventId}/registrationlist${showOnlyPublic ? '?showOnlyPublic=true' : ''}`)
export const getOrganizations = () => axios.get('http://localhost:8090/organizations')
export const getAllOrganizations = () => axios.get('http://localhost:8090/organizationsall')
export const getAllEvents = () => axios.get('http://localhost:8090/eventsall')
export const getAllEventsAndCategories = (organizationId?: string) => axios.get(`http://localhost:8090/alleventsandcategories?organization=${organizationId ?? ''}`)
export const getEventCategories = (eventId: string) => axios.get(`http://localhost:8090/event/${eventId}/categories`)

// post
export const registerCompetitor = (data: RegisterType) => axios.post(
  'http://localhost:8090/register', // check URL on the backend
  data,
)
export const signInUser = (data: SignInType) => axios.post(
  'http://localhost:8090/signin', // check URL on the backend
  data,
)
export const createOrganization = (data: OrganizationType) => axios.post(
  'http://localhost:8090/createorganization', // check URL on the backend
  data,
)
export const createEvent = (data: EventType) => axios.post(
  'http://localhost:8090/createevent', // check URL on the backend
  data,
)
export const registrationPayment = (regId: number, paymentReceived: boolean) => axios.post(
  'http://localhost:8090/registrationpayment', // check URL on the backend
  { regId, paymentReceived },
)
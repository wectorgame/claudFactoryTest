import {API_URL} from '../utils/constants';
import {GET, sendHttpRequest} from './sendHttpRequest';

export const getQuotations = async () => {
  const endPoint = 'command=returnTicker';
  try {
    const response = await sendHttpRequest(GET, `?command=returnTicker`, {});

    return {success: true, quotations: response};
  } catch (error) {
    console.log(error);
    return {success: false, error};
  }
};

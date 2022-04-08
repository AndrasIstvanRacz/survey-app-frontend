import axios from "axios";

const baseURL = 'https://survey-app-backend-deik.herokuapp.com'

export async function getSurveysDataByUser(token) {
  return await axios.get(baseURL + '/survey/findAllByUsername',
    {
    headers:
      {
        Authorization: "Bearer " + token
      }
    })
}
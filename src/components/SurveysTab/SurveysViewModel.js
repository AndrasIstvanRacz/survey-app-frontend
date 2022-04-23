import axios from "axios";


const baseURL = 'https://survey-app-backend-deik.herokuapp.com'

export async function getSurveysData() {
  return await axios.get(baseURL + '/survey/findAllVisible',);
}


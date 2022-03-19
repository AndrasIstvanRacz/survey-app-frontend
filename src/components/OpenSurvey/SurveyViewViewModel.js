import axios from "axios";

const baseURL = 'https://survey-app-backend-deik.herokuapp.com'

export async function getSurveyById(id){
  return await axios.get(baseURL + '/survey/getByIdWithoutAuth?surveyId=' + id)
}

export async function saveAnswers(answers){
  return await axios.post(baseURL + '/survey/saveAnswers',  {pickedAnswers: answers})
}
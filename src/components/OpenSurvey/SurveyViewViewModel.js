import axios from "axios";

const baseURL = 'https://survey-app-backend-deik.herokuapp.com'

export async function getSurveyById(id){
  return await axios.get(baseURL + '/survey/getByIdWithoutAuth?surveyId=' + id)
}

export async function saveAnswers(answers){
  return await axios.post(baseURL + '/survey/saveAnswers',  {pickedAnswers: answers})
}

export async function getSurveyByIdWithAuth(token, id) {
  return await axios.get(baseURL + '/survey/getByIdWithAuth',
    {
      headers:
        {
          Authorization: "Bearer " + token
        },
      params:
        {
          surveyId: id
        }
    })
}

export async function getSurveyByIdShared(id) {
  return await axios.get(baseURL + '/survey/getByIdFormShare',
    {
      params:
        {
          surveyId: id
        }
    })
}

export async function deleteSurvey(token, id) {
  return await axios.delete(baseURL + '/survey/deleteById',
    {
      headers:
        {
          Authorization: "Bearer " + token
        },
      params:
        {
          surveyId: id
        }
    })
}


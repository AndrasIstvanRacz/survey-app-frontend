import axios from "axios";

const baseURL = 'https://survey-app-backend-deik.herokuapp.com'
export async function addNewSurvey(title, description, visibility, questions, token){
  return await axios.post(baseURL + '/survey/addNew',
    {
      newTitle: title,
      newDescription: description,
      newVisibility: visibility,
      questions: questions
    }, {
      headers:
        {
          Authorization: "Bearer " + token
        }
    })
}

export async function updateSurvey(id, title, description, visibility, questions, token){
  return await axios.post(baseURL + '/survey/update',
    {
      id: id,
      newTitle: title,
      newDescription: description,
      newVisibility: visibility,
      questions: questions
    }, {
      headers:
        {
          Authorization: "Bearer " + token
        }
    })
}
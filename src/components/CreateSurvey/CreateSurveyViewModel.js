import axios from "axios";

const baseURL = 'https://survey-app-backend-deik.herokuapp.com'
export async function addNewSurvey(title, description, visibility, questions, token){
  console.log(questions)
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
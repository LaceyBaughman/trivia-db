import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";



//Private

function _drawTrivia() {
  let template = ''
  ProxyState.trivia.forEach(t => template += `<li>${t.question}</li>`)
  document.getElementById('trivia').innerHTML = template
}

//Public
export class QuestionsController {
  constructor() {
    ProxyState.on('trivia', _drawTrivia);
    this.getTrivia()

  }

  async getTrivia() {
    try {
      console.log('Con: finding Trivia')
      await questionsService.getTrivia()
      console.log('Con: finished retrieving trivia')
    } catch (error) {
      console.log('No Trivia!')
      Pop.toast(error.message, 'Error')
    }
  }
}
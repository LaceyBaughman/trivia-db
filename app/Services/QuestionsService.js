import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { Pop } from "../Utils/Pop.js"

class QuestionsService {
  async getTrivia() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean')
    console.log('response data', response.data)
    let trivia = response.data.results.map(t => new Trivia(t))
    ProxyState.trivia = trivia
  }

  triviaAnswer(id, answer) {
    const trivia = ProxyState.trivia
    const found = trivia.find(trivia => id == trivia.id)
    found.correct_answer.true = !found.answer
    ProxyState.trivia = ProxyState.trivia
    saveState()
    Pop.toast('Great Job!')
  } else {
  Pop.toast('Too bad!')
}
  }



export const questionsService = new QuestionsService()


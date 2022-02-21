import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";

class QuestionsService {
  async getTrivia() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=boolean')
    console.log('response data', response.data)
    let trivia = response.data.results.map(t => new Trivia(t))
    ProxyState.trivia = trivia


  }
}


export const questionsService = new QuestionsService()


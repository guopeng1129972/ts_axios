// this在回调参数里面
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  // 指定this的类型
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      }
    }
  },
}

let cardPiacker = deck.createCardPicker()
let pickedCard = cardPiacker()
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

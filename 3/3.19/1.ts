// 1.定义一个 扑克牌对象 deck
// 2.有字符串数组花色 suits 4种 hearts spades clubs diamonds
// 3.存在卡牌数组 cards 52张
// 4.存在方法 createCardPicker 返回一个方法 随机生成一个卡牌数字 pickedCard 从52张中
// 5.根据 pickedCard 求出卡牌索引花色 pickedSuit

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    // 1.这里用箭头函数 可以不保留this指向，让它指到他的父级去
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return {
        // 这里this.suits的类型是any ，因为无法确定this的类型
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      }
    }
  },
}

let cardPiacker = deck.createCardPicker()
let pickedCard = cardPiacker()
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

'use strict';

{
  const  question = document.getElementById('question');
  const  choices = document.getElementById('choices');
  const   btn = document.getElementById('btn');

  const quizSet = [
    {q: 'What is A?', c: ['A0', 'A1', 'A2']},
    {q: 'What is B?', c: ['B0', 'B1', 'B2']},
    {q: 'What is C?', c: ['C0', 'C1', 'C2']},
  ];

  let currentNum = 0;

  question.textContent = quizSet[currentNum].q;

  function shuffle(arr){
    
    // iを１ずつ減らしながら処理するfor文
    for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random()* (i + 1)); // ランダムに選択する整数値
    [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);  //スプレッド演算子を使って配列のコピーを作成
  console.log(quizSet[currentNum].c)
  shuffledChoices.forEach(choice =>{
      const li = document.createElement('li');
      li.textContent = choice;
      choices.appendChild(li);
  });
}
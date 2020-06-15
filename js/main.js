'use strict';

{
  const  question = document.getElementById('question');
  const  choices = document.getElementById('choices');
  const   btn = document.getElementById('btn');
  const   result = document.getElementById('result');
  const   scoreLabel = document.querySelector('#result > p');

  const quizSet = [
    {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']},
    {q: '2の8乗は？', c: ['256', '64', '1024']},
    {q: '次のうち、最初にリリースされた言語は？', c: ['Python', 'JavaScript', 'HTML']},
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

 

  function shuffle(arr){
     
    // iを１ずつ減らしながら処理するfor文
    for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random()* (i + 1)); // ランダムに選択する整数値
    [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li){
    if (isAnswered === true) {
        return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct')
      score++; // スコアを１プラス
    } else{
      li.classList.add('wrong')
    }

    btn.classList.remove('disabled')
  }



  function setQuiz(){
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;
      // 問題文を消去する処理
    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);  //スプレッド演算子を使って配列のコピーを作成
    shuffledChoices.forEach(choice =>{
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => {
      checkAnswer(li)
    });
    choices.appendChild(li);
  });
  // 最後の問題を解答し終わった後の処理
  if (currentNum === quizSet.length-1){    //currentNumは０から始まっているため1を引く
    btn.textContent = 'Show Score';
  }
  }

  setQuiz();
  
  // ボタンをクリックしたら次の問題へ遷移する処理
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')){
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1){
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
      result.classList.remove('hidden');
    } else{
      currentNum++;
      setQuiz();
    }
  });
}


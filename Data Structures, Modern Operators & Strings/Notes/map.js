const question = new Map([
    ["question", 'What is the best programming language ?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct', 3],
    [true, 'Correct Answer 💥'],
    [false, 'Wrong Answer']
 ]);

const wrongAnswer =  question.get(false);
console.log(wrongAnswer)

console.log(question.get("question"));
for(const [i,a] of question){
    if(typeof(i) === 'number'){
        console.log(a);
    }
}

const answer = Number(prompt('Please enter your answer'));
console.log(answer)

console.log(question.get(question.get('correct') === answer));


//Convert map to array

console.log(...question)
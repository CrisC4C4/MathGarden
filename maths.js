var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

async function checkAnswer() {
    const prediction = predictImage();
    console.log(`answer: ${answer}, prediction : ${prediction}`);
    
    if (score < 6) {  
        if (prediction == answer){
            score++;
            console.log(`Correct. Score ${score}`);

            // if(score<7){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
            // }

        } else {
            if (score != 0) {score--};
            // if (score > 0){
            //     score--;
            // } else {
            //     score = 0;
            // }
            console.log(`Wrong. Score ${score}`);
            alert("Ooops! Check your maths, and write neater next time!");
            backgroundImages.pop(`url('images/background${score}.svg')`);

            const myTimeout = setTimeout(removeImage, 1000);
            function removeImage() {
                document.body.style.backgroundImage = backgroundImages;
            }

        }
    } else {
        alert("Congratulations, your garden is full! You want to try again?");
        score = 0;
        backgroundImages = [];
        document.body.style.backgroundImage = backgroundImages;
    }
}



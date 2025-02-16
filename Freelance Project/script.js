
const questions = [
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
      correctAnswer: 1
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: 3
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1900", "1912", "1920", "1930"],
      correctAnswer: 2
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Pluto"],
      correctAnswer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswer: 3
    },
    {
      question: "Which country is the largest by land area?",
      options: ["Canada", "Russia", "United States", "China"],
      correctAnswer: 2
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: 2
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Osmium", "Ozone", "Opium"],
      correctAnswer: 1
    },
    {
      question: "In which year did World War II end?",
      options: ["1940", "1941", "1945", "1950"],
      correctAnswer: 3
    },
    {
      question: "What is the currency of the United Kingdom?",
      options: ["Euro", "Pound", "Dollar", "Yen"],
      correctAnswer: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    // Hide the start button and show the quiz container
    document.getElementById('start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    
    displayQuestion(); // Show the first question
  }
  
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
  
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';  // Clear previous answers
  
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('answer-btn');
      button.onclick = () => checkAnswer(index + 1, button);  // Adding +1 to match correctAnswer with 1-based index
      answersContainer.appendChild(button);
    });
  
    // Disable the Next button initially
    document.getElementById('next-btn').disabled = true;
  }
  
  function checkAnswer(selectedIndex, button) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
  
    // Check if the answer is correct and apply styling
    if (selectedIndex === correctIndex) {
      score++;
      button.classList.add('correct'); // Add green background to correct answer
    } else {
      button.classList.add('incorrect'); // Add red background to incorrect answer
    }
  
    const answers = document.querySelectorAll('.answer-btn');
    answers.forEach(btn => btn.disabled = true);  // Disable all answers after selection
  
    // Enable Next button after selecting an answer
    document.getElementById('next-btn').disabled = false;
  
    // Update the score display
    document.getElementById('score').textContent = `Score: ${score}`;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion(); // Show the next question
    } else {
      showResults(); // Show the results after the last question
    }
  }
  
  function showResults() {
    // Hide the quiz container and show the result container
    document.querySelector('.quiz-container').style.display = 'none';
    
    const resultMessage = score >= questions.length / 2 ? 'Great job!' : 'Try again!';
    document.getElementById('final-message').textContent = resultMessage;
    document.getElementById('final-score').textContent = `Your score: ${score} / ${questions.length}`;
  
    // Show the result container
    document.getElementById('result-container').style.display = 'block';
  }
  
  function restartQuiz() {
    // Reset the quiz
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
  
    // Hide the result container and show the start container
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('start-container').style.display = 'block';
  }
  
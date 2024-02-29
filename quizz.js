const quizz = [
    {
      "number": 0,
      "question": "Quel appareil est souvent considéré comme le premier téléphone portable commercial ?",
      "answers": [
        " Motorola DynaTAC 8000X",
        " Nokia 9000 Communicator",
        " BlackBerry",
        
      ],
      "correct": " Motorola DynaTAC 8000X",
      "tip": "Le Motorola DynaTAC 8000X, bien que volumineux et coûteux, a été un jalon important dans le développement des téléphones portables."
    },
    {
      "number": 1,
      "question": "Quel système d'exploitation mobile est devenu un concurrent majeur d'iOS après son lancement ?",
      "answers": [
        " BlackBerry OS",
        " Android",
        " Windows Mobile",
        
      ],
      "correct": " Android",
      "tip": "Android, développé par Google, est devenu un rival majeur d'iOS grâce à son modèle open-source et à sa disponibilité sur une large gamme d'appareils."
    },
    {
      "number": 2,
      "question": "Quel événement a révolutionné l'industrie des télécommunications en introduisant un écran tactile capacitif et un accès à l'App Store ?",
      "answers": [
        " Le lancement du BlackBerry",
        " L'introduction du Nokia 9000 Communicator",
        " Le lancement de l'iPhone",
        
      ],
      "correct": " Le lancement de l'iPhone",
      "tip": "L'iPhone d'Apple a été un tournant majeur dans l'histoire des smartphones, introduisant de nombreuses fonctionnalités novatrices."
    },
    // Ajout des questions suivantes
    {
      "number": 3,
      "question": "Quel est le nom du système d'exploitation mobile développé par Apple ?",
      "answers": [
        " Android",
        " iOS",
        " Windows Mobile",
        
      ],
      "correct": " iOS",
      "tip": "iOS est le système d'exploitation mobile développé par Apple, utilisé sur les iPhones, iPads et iPod Touch."
    },
    {
      "number": 4,
      "question": "Quelle entreprise a lancé le premier smartphone en 2007 ?",
      "answers": [
        " Samsung",
        " Apple",
        " Nokia",
        
      ],
      "correct": " Apple",
      "tip": "Apple a été l'entreprise à l'origine du premier iPhone, qui a été lancé en 2007 et a marqué le début de l'ère des smartphones modernes."
    },
    {
      "number": 5,
      "question": "Quelle est la principale fonctionnalité d'un GPS sur un smartphone ?",
      "answers": [
        " Envoyer des messages texte",
        " Jouer à des jeux",
        " Navigation et cartographie",
        
      ],
      "correct": " Navigation et cartographie",
      "tip": "La principale fonctionnalité d'un GPS sur un smartphone est la navigation et la cartographie, permettant aux utilisateurs de trouver des directions et des informations sur les lieux."
    },
    {
        "number": 6,
        "question": "Sur quel écran principal de votre smartphone trouvez-vous généralement les icônes des applications ?",
        "answers": [
          " Écran de verrouillage",
          " Écran d'accueil",
          " Écran de réglages",
          
        ],
        "correct": " Écran d'accueil",
        "tip": "L'écran d'accueil est le premier écran que vous voyez lorsque vous déverrouillez votre smartphone. Il contient généralement des icônes d'applications et des widgets."
      },
      {
        "number": 7,
        "question": "À quoi sert le bouton d'alimentation sur un smartphone ?",
        "answers": [
          " Prendre des photos",
          " Allumer ou éteindre l'appareil",
          " Régler le volume",
          
        ],
        "correct": " Allumer ou éteindre l'appareil",
        "tip": "Le bouton d'alimentation, également appelé bouton marche/arrêt, permet d'allumer ou d'éteindre votre smartphone."
      },
      {
        "number": 8,
        "question": "Qu'est-ce qu'un smartphone ?",
        "answers": [
          " Un appareil électronique pour faire du café",
          " Un téléphone portable avec des fonctionnalités avancées",
          " Un dispositif pour regarder la télévision",
          
        ],
        "correct": " Un téléphone portable avec des fonctionnalités avancées",
        "tip": "Un smartphone est un téléphone portable qui offre des fonctionnalités avancées telles que la navigation sur Internet, la prise de photos, l'accès aux applications, etc."
      },
      {
        "number": 9,
        "question": "Quelle est la principale caractéristique d'un smartphone ?",
        "answers": [
          " Capacité à voler",
          " Capacité à cuisiner des repas",
          " Capacité à se connecter à Internet",
          
        ],
        "correct": " Capacité à se connecter à Internet",
        "tip": "L'une des principales caractéristiques d'un smartphone est sa capacité à se connecter à Internet, ce qui permet aux utilisateurs d'accéder à une multitude de services en ligne."
      },
      {
        "number": 10,
        "question": "Quelle fonctionnalité permet aux utilisateurs de prendre des photos avec un smartphone ?",
        "answers": [
          " Enregistrement audio",
          " Appareil photo intégré",
          " GPS",
          
        ],
        "correct": " Appareil photo intégré",
        "tip": "Les smartphones sont équipés d'un appareil photo intégré qui permet aux utilisateurs de prendre des photos et des vidéos avec leur téléphone."
      }
];

  

  var score = 0;
  // initialisation J'affiche toutes mes questions
  const initialize = () => {
    const myQuizz = document.querySelector("#quizz");
    let quizzRender = '';

    quizz.map((question, id) => {
      console.log(id)
      quizzRender += `
      <h3 class="question">${question.question}</h3>

      <ul>
        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[0]}">
        <label class="letter">A</label><span class="question">${question.answers[0]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[1]}">
        <label class="letter">B</label><span class="question">${question.answers[1]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[2]}">
        <label class="letter">C</label><span class="question">${question.answers[2]}</span><span class="verif${question.number}"> </span>
        </label></br>
      </ul>

      <span class="tip">${question.tip}</span>
    `
    })


    myQuizz.innerHTML = quizzRender;
  }
  initialize();

  // J'appelle mes éléments
  const submit = document.querySelector("button");
  const answers = [];
  const allInput = document.querySelectorAll('input');
  const renderScore = document.querySelector("#score");
  const tips = document.querySelectorAll(".tip");
  let count = 0;
  let test = 0;
  submit.disabled = true;


  // Verification que le nombre de radio checked soit égal aux nombres de questions que j'ai dans mon Quiz
  allInput.forEach(input => {
    input.addEventListener("change", () => {

      const allInputChecked = document.querySelectorAll('input[type="radio"]:checked').length;

      if (allInputChecked === quizz.length) {
        submit.disabled = false;
      }
    })
  });

  // Lorsqu'on clique sur notre bouton Valider mes réponses
  submit.addEventListener("click", (e) => {
    logic();

    //affichage tooltip
    tips.forEach(tip => {
      tip.style.display = "inline";
    });

    // Je remonte au top de la page
    window.scrollTo(0, 0);

    //J'affiche mon score
    renderScore.innerHTML += `Vous avez obtenu un score de ${score} sur ${quizz.length}`;

    //reset score
    score = 0;
    e.preventDefault();
  })

  // sert uniquement à calculer le score
  function logic() {
    const allInputChecked = document.querySelectorAll('input[type="radio"]:checked');

    // Je récupère les radios checked et les insèrent dans un tableau.
    for (input of allInput) {
      if (input.checked == true) {
        answers.push(input.value);
      }
    }
    // Vérifie que le tableau avec les radios checked contienne les bonnes réponses prédéfinis.
    for (quiz of quizz) {
      if (answers.includes(quiz.correct)) {
        score++;
      }
    }

// Vérification des valeurs des inputs checked avec le Quiz
    allInputChecked.forEach((inputValue, index) => {
      if (inputValue.value === quizz[index].correct) {
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Juste :)";
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
        inputValue.nextElementSibling.nextElementSibling.style.color = "green";
        console.log(`Réponse ${index} : Juste`);

      } else {

        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Faux :(";
        inputValue.nextElementSibling.nextElementSibling.style.color = "red";
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
        inputValue.nextElementSibling.nextElementSibling.style.textDecoration = "line-through";
        console.log(`Réponse ${index} : Faux`);
      }

    })


  }


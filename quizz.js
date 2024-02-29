const quizz = [
    {
        "number": 0,
        "question": "Quelle est la première étape pour créer un compte LinkedIn ?",
        "answers": [
            " Télécharger l'application mobile",
            " Entrer votre nom et prénom, puis votre adresse email et un mot de passe",
            " Choisir un nom d'utilisateur et une photo de profil"
        ],
        "correct": " Entrer votre nom et prénom, puis votre adresse email et un mot de passe",
        "tip": "Assurez-vous de fournir des informations correctes pour créer votre compte LinkedIn."
    },
    {
        "number": 1,
        "question": "Quelle est la dimension recommandée pour une photo de profil sur LinkedIn ?",
        "answers": [
            " 800x800 pixels",
            " 500x500 pixels",
            " 1200x1200 pixels"
        ],
        "correct": " 500x500 pixels",
        "tip": "Une photo de profil de taille adéquate garantit une meilleure visibilité et qualité sur LinkedIn."
    },
    {
        "number": 2,
        "question": "Qu'est-ce que le réseau sur LinkedIn ?",
        "answers": [
            " Les personnes avec lesquelles vous êtes en relation sur LinkedIn",
            " La couverture réseau pour les communications sans fil",
            " Les données de trafic Internet"
        ],
        "correct": " Les personnes avec lesquelles vous êtes en relation sur LinkedIn",
        "tip": "Votre réseau sur LinkedIn est composé de vos contacts professionnels et peut vous aider dans votre carrière."
    },
    {
        "number": 3,
        "question": "Que sont les publications sur LinkedIn ?",
        "answers": [
            " Des annonces publicitaires",
            " Des contenus partagés pour développer sa visibilité et notoriété",
            " Des recommandations de produits"
        ],
        "correct": " Des contenus partagés pour développer sa visibilité et notoriété",
        "tip": "Les publications sur LinkedIn sont un moyen de partager des idées, des connaissances et d'interagir avec d'autres professionnels."
    },
    {
        "number": 4,
        "question": "Qu'est-ce que l'outil de messagerie sur LinkedIn ?",
        "answers": [
            " Un outil pour écrire des articles",
            " Un outil pour échanger des messages privés avec d'autres membres",
            " Un outil pour créer des événements professionnels"
        ],
        "correct": " Un outil pour échanger des messages privés avec d'autres membres",
        "tip": "La messagerie sur LinkedIn est utile pour établir des connexions et communiquer avec d'autres professionnels."
    },
    {
        "number": 5,
        "question": "Que devrait contenir une photo de profil professionnelle sur LinkedIn ?",
        "answers": [
            " Un arrière-plan chargé et coloré",
            " Un selfie avec des amis",
            " Un visage clair et net sur un fond neutre"
        ],
        "correct": " Un visage clair et net sur un fond neutre",
        "tip": "Votre photo de profil est importante car elle donne une première impression professionnelle."
    },
    {
        "number": 6,
        "question": "Comment finalisez-vous votre inscription sur LinkedIn ?",
        "answers": [
            " En payant des frais d'inscription",
            " En validant votre adresse email",
            " En envoyant une demande de confirmation à LinkedIn"
        ],
        "correct": " En validant votre adresse email",
        "tip": "Assurez-vous de vérifier votre boîte de réception pour le lien de validation après votre inscription."
    },
    {
        "number": 7,
        "question": "Que sont les emplois suggérés sur LinkedIn ?",
        "answers": [
            " Des offres d'emploi recommandées en fonction de votre profil",
            " Des recommandations d'emplois pour vos amis",
            " Des emplois que vous avez postulés précédemment"
        ],
        "correct": " Des offres d'emploi recommandées en fonction de votre profil",
        "tip": "Explorez les emplois suggérés pour trouver des opportunités correspondant à votre parcours professionnel."
    },
    {
        "number": 8,
        "question": "Quelle est la caractéristique d'une photo de profil professionnelle recommandée sur LinkedIn ?",
        "answers": [
            " Être accompagné de plusieurs personnes",
            " Avoir un arrière-plan coloré et animé",
            " Être seul sur la photo sur un fond neutre"
        ],
        "correct": " Être seul sur la photo sur un fond neutre",
        "tip": "Une photo de profil professionnelle doit mettre en avant votre visage de manière claire et nette, sans distractions."
    },
    {
        "number": 9,
        "question": "Quelle est l'utilité d'un compte LinkedIn ?",
        "answers": [
            " Trouver des recettes de cuisine",
            " Échanger avec des amis",
            " Développer son réseau professionnel et sa carrière"
        ],
        "correct": " Développer son réseau professionnel et sa carrière",
        "tip": "LinkedIn est une plateforme centrée sur le monde professionnel et offre de nombreuses opportunités pour développer votre carrière."
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


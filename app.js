let flashCard = card[Math.floor(Math.random() * card.length)];

const clearCard = () => {
   let cardElement = document.getElementById('card');
   while (cardElement.firstChild) {
      cardElement.removeChild(cardElement.firstChild);
   };
};

const getScenario = () => {
   let cardElement = document.getElementById('card');
   if (cardElement.childElementCount === 1) {
      return 'front of card';
   } else {
      return 'back of card';
   };
};

const showFrontOfCard = (currCard) => {
   let methodName = document.createElement('h3');
   methodName.setAttribute('id','flashcard-word');
   methodName.setAttribute('class','flashcard-word');
   methodName.innerHTML = `${currCard.methodName}`;
   document.getElementById('card').appendChild(methodName);
};

const showBackOfCard = (currCard) => {
   let methodName = document.createElement('p');
   methodName.setAttribute('id','flashcard-info');
   methodName.setAttribute('class','flashcard-info');
   methodName.innerHTML = `Method name: ${currCard.methodName}`;
   document.getElementById('card').appendChild(methodName);

   let objectType = document.createElement('p');
   objectType.setAttribute('id','flashcard-info');
   objectType.setAttribute('class','flashcard-info');
   objectType.innerHTML = `Object type: ${currCard.objectType}`;
   document.getElementById('card').appendChild(objectType);

   let purpose = document.createElement('p');
   purpose.setAttribute('id','flashcard-info');
   purpose.setAttribute('class','flashcard-info');
   purpose.innerHTML = `Purpose: ${currCard.purpose}`;
   document.getElementById('card').appendChild(purpose);

   let parameters = document.createElement('p');
   parameters.setAttribute('id','flashcard-info');
   parameters.setAttribute('class','flashcard-info');
   parameters.innerHTML = `Parameters: ${currCard.parameters}`;
   document.getElementById('card').appendChild(parameters);

   let impactsObject = document.createElement('p');
   impactsObject.setAttribute('id','flashcard-info');
   impactsObject.setAttribute('class','flashcard-info');
   impactsObject.innerHTML = `Impacts object: ${currCard.impactsObject}`;
   document.getElementById('card').appendChild(impactsObject);
};

const flipCard = () => {
   switch (getScenario()) {
      case 'front of card':
         clearCard();
         showBackOfCard(flashCard);
         break;
      case 'back of card':
         clearCard();
         flashCard = card[Math.floor(Math.random() * card.length)];
         showFrontOfCard(flashCard);
         break;
   };
};

const showInitialCard = () => {
   showFrontOfCard(flashCard);
   let cardElement = document.getElementById('card');
   cardElement.addEventListener('click',flipCard);
};

showInitialCard();
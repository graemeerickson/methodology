let flashCard = card[Math.floor(Math.random() * card.length)];
let flashCardHistory = [];

const clearCard = (cardElement) => {
   while (cardElement.firstChild) {
      cardElement.removeChild(cardElement.firstChild);
   };
};

const getScenario = (cardElement) => {
   if (cardElement.childElementCount === 1) {
      return 'front of card';
   } else {
      return 'back of card';
   };
};

const showCardFront = (cardElement) => {
   let methodName = document.createElement('h3');
   methodName.setAttribute('id','flashcard-word');
   methodName.setAttribute('class','flashcard-word');
   methodName.innerHTML = `${flashCard.methodName}`;
   cardElement.appendChild(methodName);
};

const showCardBack = (cardElement) => {
   let methodName = document.createElement('p');
   methodName.setAttribute('id','flashcard-info');
   methodName.setAttribute('class','flashcard-info');
   methodName.innerHTML = `<b>Method name:</b> ${flashCard.methodName}`;
   cardElement.appendChild(methodName);

   let objectType = document.createElement('p');
   objectType.setAttribute('id','flashcard-info');
   objectType.setAttribute('class','flashcard-info');
   objectType.innerHTML = `<b>Object type:</b> ${flashCard.objectType}`;
   cardElement.appendChild(objectType);

   let purpose = document.createElement('p');
   purpose.setAttribute('id','flashcard-info');
   purpose.setAttribute('class','flashcard-info');
   purpose.innerHTML = `<b>Purpose:</b> ${flashCard.purpose}`;
   cardElement.appendChild(purpose);

   let parameters = document.createElement('p');
   parameters.setAttribute('id','flashcard-info');
   parameters.setAttribute('class','flashcard-info');
   parameters.innerHTML = `<b>Parameters:</b> ${flashCard.parameters}`;
   cardElement.appendChild(parameters);

   let impactsObject = document.createElement('p');
   impactsObject.setAttribute('id','flashcard-info');
   impactsObject.setAttribute('class','flashcard-info');
   impactsObject.innerHTML = `<b>Impacts original object:</b> ${flashCard.impactsObject}`;
   cardElement.appendChild(impactsObject);
};

const checkForRepeat = (cardHistory) => {
   let prevCard = flashCard;
   while (prevCard === flashCard) {
      flashCard = card[Math.floor(Math.random() * card.length)];
   };
   cardHistory.push(flashCard);
};

const flipCard = (cardElement, cardHistory) => {
   switch (getScenario(cardElement)) {
      case 'front of card':
         clearCard(cardElement);
         showCardBack(cardElement);
         break;
      case 'back of card':
         clearCard(cardElement);
         checkForRepeat(cardHistory);
         showCardFront(cardElement);
         break;
   };
};

const showInitialCard = () => {
   flashCardHistory.push(flashCard);
   let cardElement = document.getElementById('card');
   showCardFront(cardElement);
   cardElement.addEventListener('click', () => {
      flipCard(cardElement, flashCardHistory);
   });
};

showInitialCard();
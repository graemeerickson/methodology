const card = [
   {
      methodName: "replace()",
      objectType: "array",
      purpose: "sample purpose",
      parameters: "sample parameter",
      impactsObject: "yes"
   },
   {
      methodName: "map()",
      objectType: "array",
      purpose: "sample purpose",
      parameters: "sample parameter",
      impactsObject: "no"
   }
];

// const cardInPlay = [];

const clearCard = (currCard) => {
   while (currCard.firstChild) {
      currCard.removeChild(currCard.firstChild);
   };
};

const scenario = (currCard) => {
   if (currCard.childElementCount === 1) {
      return 'front of card';
   } else {
      return 'back of card';
   };
};

const showFrontOfCard = (currCard) => {
   let methodName = document.createElement('h3');
   
   methodName.setAttribute('id','flashcard-word');
   methodName.setAttribute('class','flashcard-word');
   methodName.innerHTML = 'splice()';
   currCard.appendChild(methodName);
}

const showBackOfCard = (currCard) => {
   let methodName = document.createElement('p');
   methodName.setAttribute('id','flashcard-info');
   methodName.setAttribute('class','flashcard-info');
   methodName.innerHTML = 'Method name: splice()';
   currCard.appendChild(methodName);

   let objectType = document.createElement('p');
   objectType.setAttribute('id','flashcard-info');
   objectType.setAttribute('class','flashcard-info');
   objectType.innerHTML = 'Object type: array';
   currCard.appendChild(objectType);

   let purpose = document.createElement('p');
   purpose.setAttribute('id','flashcard-info');
   purpose.setAttribute('class','flashcard-info');
   purpose.innerHTML = 'Purpose: Change the contents of an array by removing existing elements and/or adding new elements.';
   currCard.appendChild(purpose);

   let parameters = document.createElement('p');
   parameters.setAttribute('id','flashcard-info');
   parameters.setAttribute('class','flashcard-info');
   parameters.innerHTML = 'Parameters: ';
   currCard.appendChild(parameters);

   let impactsObject = document.createElement('p');
   impactsObject.setAttribute('id','flashcard-info');
   impactsObject.setAttribute('class','flashcard-info');
   impactsObject.innerHTML = 'Impacts object: Yes';
   currCard.appendChild(impactsObject);
}

const flipCard = () => {
   let flashCard = document.getElementById('card');
   let methodName;
   switch (scenario(flashCard)) {
      case 'front of card':
         clearCard(flashCard);
         showBackOfCard(flashCard);
         break;
      case 'back of card':
         clearCard(flashCard);
         showFrontOfCard(flashCard);
         break;
   };
};

const showInitialCard = () => {
   let flashCard = document.getElementById('card');

   showFrontOfCard(flashCard);

   flashCard.addEventListener('click',flipCard);
};

showInitialCard();
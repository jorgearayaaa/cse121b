/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Jorge Araya",
    photo: "images/IMG_6439 (1).jpg",
    favoriteFoods: [
        'Pizza',
        'Hamburguers',
        'Sushi',
        'Pastas'
    ],
    hobbies: [
        'Skateboarding',
        'Make music',
        'hiking'
    ],
    placeLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placeLived.push(
    {
        place: '📍Santiago, Chile📍',
        length: '24 years'
    }
);

/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imagesElement = document.getElementById('photo');
imagesElement.setAttribute('src', myProfile.photo);
imagesElement.setAttribute('alt', "Placeholder Image");

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach( hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

const listPlace = document.getElementById("places-lived");

for (let i = 0; i < myProfile.placeLived.length; i++) {
  const thePlace = myProfile.placeLived[i];

  const elementDt = document.createElement("dt");
  elementDt.textContent = thePlace.place; 

  const elementDd = document.createElement("dd");
  elementDd.textContent = thePlace.length;

  listPlace.appendChild(elementDt);
  listPlace.appendChild(elementDd);
}

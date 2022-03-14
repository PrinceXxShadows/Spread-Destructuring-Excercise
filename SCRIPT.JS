

const mcuShows = ["loki", "Moon Knight"];



const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"];



const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles: Get Back"];



console.log(disneyPlusShows);



const netFlixMovies = {
    action: "Extraction",
    crime: "The Irishman" 
}



const amazonPrimeMovies = {
    action: "The Tomorrow War ",
    drama: "One Night in Miami"
}



const streamingMovies = { ...amazonPrimeMovies,...netFlixMovies, musical:"Hamilton"};



console.log(streamingMovies);



const disneyJunior = ["Mickey Mouse Clubhouse", "Spidey and His Amazing Friends"];



const [mickey, ...spidey] = disneyJunior;
console.log(disneyJunior);



console.log(mickey, spidey);



const avengers = {
    warMachine: 'James Rhodes',
    theHulk: 'Bruce Banner'
}



const {warMachine, theHulk} = avengers;



console.log(warMachine, theHulk);



const moreAvengers = {

    blackWidow: 'Natasha Romanoff',
    hawkEye: 'Clint Barton',
    ironMan: 'Tony Stark'
};


const {blackWidow:nat, ...others} = moreAvengers;


console.log(nat, others);


const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };

  
  const {first, second, third}= bonus 
  const all = [...first, ...second, ...third];  
  console.log(all);


  const [one, two, three, four, five, six, seven, eight, nine] = all; 
  
  
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
  console.log(five);
  console.log(six);
  console.log(seven);
  console.log(eight);
  console.log(nine);

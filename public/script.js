/*document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  try{
    const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    fetch(url)
  .then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
let results = "";
results += '<img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + json.id +'.png" width = "80" heigth = "80" class = "center">';
results += '<h2>Pokemon name: ' + json.name + "</h2>";
results += '<p> Type(s): ';
for (let i=0; i < json.types.length; i++) {
results += json.types[i].type.name
if (i !== json.types.length - 1)
results += ", "
}
results += '<p> Moves: ';""
for (let i=0; i < json.moves.length; i++) {
results += json.moves[i].move.name
if (i !== json.moves.length - 1)
results += ", "
}
results += '<p> Abilities: ';
for (let i=0; i < json.abilities.length; i++) {
results += json.abilities[i].ability.name
if (i !== json.abilities.length - 1)
results += ", "
}
/*for (let i=0; i < json.weather.length; i++) {
results += '<img src="https://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/ class = "center">';
}
results += '<h2>' + json.main.temp + " &deg;F</h2>"
results += "<p>"
for (let i=0; i < json.weather.length; i++) {
results += json.weather[i].description
if (i !== json.weather.length - 1)
results += ", "
   }
 results += "</p>";
document.getElementById("pokeStats").innerHTML = results;
})
}
    catch(err){};
});*/
Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
  el: '#app',
  data: {
    number: 25,
    max: '',
    current: {
      name: '',
      types: '',
      img: '',
      alt: ''
    },
     loading: true,
     addedName: '',
    addedComment: '',
    comments: {},
    ratings: {},
  },
  created() {
    this.xkcd();
  },
  computed: {
    typesList() {
      var string = '';
      if (this.current.types === undefined)
      return string;
      else{
        for (let i = 0; i < this.current.types[0].length; i++)
      {
        string += this.current.types[i].type.name;
        string += ', '

      }
      console.log(this.current.types[0].length);
      return string;
    }
    },
   average() {
     if (this.ratings[this.current.id] === undefined)
    return 0;
      var average = this.ratings[this.current.id].sum / this.ratings[this.current.id].total;
     return average;
   }
 },

 watch: {
   number(value, oldvalue) {
     if (oldvalue === '') {
       this.max = 807;
     } else {
       this.xkcd();
     }
   },
 },
  methods: {
    async xkcd() {
     try {
       this.loading = true;
       const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.number);
       console.log(this.number);
       this.current = response.data;
       console.log(response.data);
       this.loading = false;
       this.number = response.data.id;
     } catch (error) {
       console.log(error);
     }
   },
   firstPokemon() {
        this.number = 1;
    },
   previousPokemon() {
      this.number = this.current.id - 1;
      if (this.number < 1)
        this.number = 1;
    },
    nextPokemon() {
      this.number = this.current.id + 1;
      if (this.number > this.max)
       this.number = this.max
    },
    lastPokemon() {
         this.number = this.max;
     },
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    randomPokemon() {
      this.number = this.getRandom(1, this.max);
    },
    addComment() {
       Vue.set(app.comments, this.number, new Array);
     this.comments[this.number].push({
       author: this.addedName,
       text: this.addedComment,
       date: moment().format('LLL')
  });
     this.addedName = '';
     this.addedComment = '';
   },
   setRating(rating){
     if (!(this.number in this.ratings))
       Vue.set(this.ratings, this.number, {
         sum: 0,
         total: 0
       });
     this.ratings[this.number].sum += rating;
     this.ratings[this.number].total += 1;
      // Handle the rating
    }
  }
});

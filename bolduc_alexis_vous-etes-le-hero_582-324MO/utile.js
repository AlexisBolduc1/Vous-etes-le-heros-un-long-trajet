const chaptersObj = {
   reveil : {subtitle :"Le début d'une longue journée",
    text: "Vous venez de vous réveiller. " + 
    "Vous êtes sur le bord d'une route quelconque. " + 
    "Aucune importance,vous vagabondez de ville en ville afin de remplir des missions. " +
    "Votre rôle de mercenaire aujourd'hui sera de tuer le dirigeant du parti au pouvoir. " +
    "L'homme qui cause tout les troubles de cette ville et de cette planète. " +
    "Vous devez partir maintenant.",
    image:"assets/images/intro.jpg",
    audio:"assets/videos/transition.mp3",
    options:[pause = {
      text: "Prendre une pause cigarette",
      action: "goToChapter('fumer')"},
      partir = {
        text: "Partir en mission",
        action: "goToChapter('mission')"},
        prendre = {
          text: "Prendre une gorgée",
          action: "goToChapter('gorgee')"},]
        },
    fumer : {subtitle :"Pourquoi faire ce choix?",
    text: "Vous préférez vous détruire la santé plutôt que d'aller sauver votre patrie. " +
    "Vous n'avez même pas commencé votre travail que vous avez déja besoin d'une pause. " +
    "Votre incompétence m'éblouie. " +
    "Vous n'êtes clairement pas fait pour cet emploi.",
    image:"assets/images/fumer.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    gorgee : {subtitle :"N'avez-vous pas oublié un détail?",
    text: "Vous êtes un humanoïde. " +
    "Vous attrapez un court-circuit. " +
    "Vous allez devoir retourner voir votre mécano. " +
    "Vous n'êtes clairement pas fait pour cet emploi. ",
    image:"assets/images/gorgee.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    mission : {subtitle :"En route vers la victoire",
    text: "Vous êtes en route vers votre mission. " +
    "Vous marchez tranquillement. " +
    "Vous entendez quelques bruits au loin mais rien d'anormal. " +
    "Vous passsez à travers un marché. "+
    "Il serait judicieux de prendre son temps est d'analyser ce qui vous entoure.",
    image:"assets/images/mission.jpg",
    audio:"assets/son/transition.mp3",
    options:[perdre = {
      text: "Perdre son temps",
      action: "goToChapter('marchand')"},
      partir = {
        text: "Intervenir dans une bagarre",
        action: "goToChapter('bagarre')"},
        prendre = {
          text: "Aller parler à l'inconnue",
          action: "goToChapter('inconnue')"},]
  },
    marchand : {subtitle :"Tu perds ton temps",
    text: "Moi  qui croyait que vous êtiez un mercenaire surentrainé. " +
    "Vous préfèrez perdre votre temps à magasiner deux-trois ricoles inutiles. " +
    "Passez au moins au magasin de fusil. " +
    "Bla bla bla vous avez déjà un sniper. "+
    "Faites-moi confiance chaque décision est importante. "+
    "On ne sait jamais ce que le futur nous réserve.",
    image:"assets/images/marchand.jpg",
    video:"assets/videos/marchand.mp4",
    audio:"assets/son/transition.mp3",
    options:[perdre = {
      text: "Revenir sur le droit chemin",
      action: "cle()"},]
  },
    bagarre : {subtitle :"En voilà une bonne idée!",
    text: "Vous comprenez finalement votre devoir. " +
    "Un sage citoyen. " +
    "Votre nouveau bras bionique sera finalement utile. " +
    "Vous intervenez en tant que grand héro. "+
    "Bon, vous avez surestimé votre force face à 5 rugbymans. " +
    "Au moins, la personne a réussi à se sauver.",
    image:"assets/images/bagarre.jpg",
    video:"assets/videos/karate.mp4",
    audio:"assets/son/transition.mp3",
    options:[intervenir = {
      text: "Avancer malgré tout",
      action: "affaible()"},]
  },
    inconnue : {subtitle :"Qui êtes-vous?",
    text: "Vous allez voir cette étrange inconnue. " +
    "- Bonjour... " +
    "- Vous devez suivre le chemin qu'indique la lumière. " +
    "Ces paroles seront les seules que cette étrange femme vous dira. "+
    "Suit ton instinct.",
    image:"assets/images/inconnue.jpg",
    audio:"assets/son/transition.mp3",
    options:[wayone = {
      text: "Suivre ses directions",
      action: "goToChapter('wrongway')"},
      waytwo = {
        text: "Suivre son chemin",
        action: "goToChapter('goodway')"},]
  },
    wrongway : {subtitle :"Tu n'as pas suivi mon conseil",
    text: "Tes parents ne t'ont jamais appris à ne pas écouter les inconnus " +
    "N'écoute jamais ce que les autres te diront. " +
    "Suit que ton propre chemin",
    image:"assets/images/wrongway.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "clereset()"},]
  },
    goodway : {subtitle :"Merci, de m'avoir écouté",
    text: "Continuez votre route. " +
    "Soudainement, une ombre apparait derrière vous. " +
    "Il vous menace de l'avoir suivi toute sa vie. " +
    "Un peu contradictoire pour quelqu'un qui vous as suivi jusqu'ici. "+
    "Bref, on a autre chose a géré maintenant. " +
    "Qu'avez vous pour vous défendre?",
    image:"assets/images/goodway.jpg",
    audio:"assets/son/transition.mp3",
    options:[non = {
      text: "???",
      action: "choix()"},]
  },
    rien : {subtitle :"Vous croyez être fort?",
    text: "Vous essayez d'argumenter. " +
    "Cela ne sert à rien contre un fou. " +
    "Allez le désarmez c'est votre dernière chance. " +
    "Bravo, maintenant plus que vos bras contre les siens. "+
    "Oh non, il sort une lame. " +
    "Adieu.",
    image:"assets/images/rien.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "clereset()"},]
  },
    affaibli : {subtitle :"Avez-vous réellement fait ça?",
    text: "Vous le suppliez de vous laissez en paix. " +
    "Un fou ne change jamais d'idée. " +
    "Votre fin est déjà écrite. " +
    "À bientôt mon ami.",
    image:"assets/images/affaibli.jpg",
    video:"assets/videos/tirer.mp4",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "clereset()"},]
  },
    fusil : {subtitle :"Un fusil peut toujours être utile",
    text: "Vous avez récupéré un fusil. " +
    "Vous n'avez pas le temps d'écouter ce qu'il dit. " +
    "Vous avez une mission. " +
    "Une balle directement entre ses deux yeux. "+
    "Mettez-vous en place! Fait ta mission!! " +
    "En auras-tu le courage? "+
    "Après tout rien ne t'oblige à faire ça...",
    image:"assets/images/fusil.jpg",
    audio:"assets/son/transition.mp3",
    options:[sauter = {
      text: "Sauter dans le vide",
      action: "goToChapter('flashback')"},
      partir = {
        text: "Ne pas tirer",
        action: "goToChapter('xtirer')"},
        prendre = {
          text: "Tirer",
          action: "goToChapter('tirer')"},]
  },
    flashback : {subtitle :"Quel est le sens de votre vie?",
    text: "Rien n'est réel. " +
    "Même pas votre propre vie. " +
    "Tout ce que vous pensez être votre vie est faux. " +
    "Qu'est ce que cela change que vous sautez dans le vide? "+
    "Tout finit d'un coup. " +
    "Plus de problèmes ou de missions dont vous n'êtes pas d'accord. "+
    "Après tout, vous renaîtrez peut-être dans une autre vie.",
    image:"assets/images/flashback.jpg",
    video:"assets/videos/reflexion.mp4",
    audio:"assets/son/transition.mp3",
    options:[flash = {
      text: "*halo de lumière*",
      action: "haloreset()"},]
    },
    xtirer : {subtitle :"La violence n'est pas toujours la solution",
    text: "Vous ne voulez pas tirer? " +
    "Je comprends votre choix. " +
    "Peut-être que personne mérite la mort. " +
    "Il y a d'autres moyens de renverser un gouvernement. "+
    "Mais en êtes vous capable? " +
    "Surtout, à quel prix?",
    image:"assets/images/xtirer.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "clereset()"},]
    },
    tirer : {subtitle :"Vous avez un but",
    text: "Après tout ce chemin, il faut bien agir. " +
    "Vous n'êtes pas venu ici pour rien. " +
    "Après tout, vous devez bien arrêter ce massacre. " +
    "*tire* "+
    "Vous avez tiré sans même me prévenir. " +
    "Vous êtes maintenant rechercher par tout le pays. "+
    "Vous allez encore déménager et fuir. "+
    "Votre vie n'est elle pas une boucle?",
    image:"assets/images/tirer.jpg",
    audio:"assets/son/transition.mp3",
    options:[debut = {
      text: "Revenir au début",
      action: "clereset()"},]
    },
  };

let keyFounded = false;
let faible = false; 

function cle() {
  keyFounded = true;
  goToChapter('inconnue');
    localStorage.setItem("key",cle());
};

function affaible() {
  faible = true;
  goToChapter('inconnue');
    localStorage.setItem("faible",affaible());
};

function choix(){
  if (keyFounded === true) {
    goToChapter('fusil');
    }else if (faible === true){ 
      goToChapter('affaibli');
    }else{
      goToChapter('rien');
    }
    };

  function clereset(){
    keyFounded = false;
    faible = false; 
    goToChapter("reveil")
    }

    function haloreset(){
      keyFounded = false;
      faible = false; 
      goToChapter("mission")
      }


function goToChapter(chapter) {


let chaptersubtitle = chaptersObj[chapter]["subtitle"];
let chaptertexte = chaptersObj[chapter]["text"];
let chapterimage = chaptersObj[chapter]["image"];
let chapteroptions = chaptersObj[chapter]["options"];
let videooptions = chaptersObj[chapter]["video"];
let audiooptions = chaptersObj[chapter]["audio"];

let HTMLsubtitle = document.querySelector(".subtitle");
let HTMLtexte = document.querySelector(".paragraphe");
let HTMLimage = document.getElementById("images");
let HTMLvideo = document.getElementById("video");
let HTMLaudio = document.getElementById("audio");

HTMLsubtitle.innerHTML = chaptersubtitle;
HTMLtexte.innerHTML = chaptertexte;
HTMLvideo.src = videooptions;
HTMLimage.src = chapterimage;
HTMLaudio.src = audiooptions;

if ('video' in chaptersObj[chapter]) {
  HTMLvideo.classList.remove("video");
  HTMLimage.classList.add("images");
  }else{
  HTMLvideo.classList.add("video");
  HTMLimage.classList.remove("images");
  };

let button = document.querySelectorAll(".btn")
for (let index = 0; index <= 4; index++) {
 if (chapteroptions[index] != undefined) {
button[index].innerHTML = ((chapteroptions[index].text));
button[index].setAttribute ("onclick", chapteroptions[index].action);
button[index].classList.remove("none");
}else{
button[index].classList.add("none");
}
};

    localStorage.setItem("goToChapter",chaptersObj[chapter]);

};

function storage () {
  

if (goToChapter() === true) {
  localStorage.getItem("goToChapter");;
  }else{
  goToChapter("reveil");
  };

  if (keyFounded === true) {
    localStorage.getItem("key");
    }else if(faible === true){
      localStorage.getItem("faible")
    }else{
      localStorage.removeItem("key"); 
      localStorage.removeItem("faible"); 
    };
}


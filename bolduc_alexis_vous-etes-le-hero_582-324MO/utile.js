const chaptersObj = {
    reveil : {subtitle :"Le début d'une longue journée",
    text: "Vous venez de vous réveiller." + 
    "Vous êtes sur le bord d'une route quelconque." + 
    "Aucune importance,vous vagabondez de ville en ville afin de remplir des missions." +
    "Votre rôle de mercenaire aujourd'hui sera de tuer le dirigeant du parti au pouvoir." +
    "L'homme qui cause tout les troubles de cette ville et de cette planète." +
    "Vous devez partir maintenant.",
    image:"intro.jpg",
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
    text: "Vous préférez vous détruire la santé plutôt que d'aller sauver votre patrie." +
    "Vous n'avez même pas commencé votre travail que vous avez déja besoin d'une pause." +
    "Votre incompétence m'éblouie." +
    "Vous n'êtes clairement pas fait pour cet emploi.",
    image:"fumer.jpg",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    gorgee : {subtitle :"N'avez-vous pas oublié un détail?",
    text: "Vous êtes un humanoïde." +
    "Vous attrapez un court-circuit." +
    "Vous allez devoir retourner voir votre mécano." +
    "Vous n'êtes clairement pas fait pour cet emploi.",
    image:"gorgee.jpg",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    mission : {subtitle :"En route vers la victoire",
    text: "Vous êtes en route vers votre mission." +
    "Vous marchez tranquillement." +
    "Vous entendez quelques bruits au loin mais rien d'anormal. " +
    "Vous passsez à travers un marché."+
    "Il serait judicieux de prendre son temps est d'analyser ce qui vous entoure.",
    image:"mission.jpg",
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
    text: "Moi  qui croyait que vous êtiez un mercenaire surentrainé." +
    "Vous préfèrez perdre votre temps à magasiner deux-trois ricoles inutiles." +
    "Passez au moins au magasin de fusil." +
    "Bla bla bla vous avez déjà un sniper."+
    "Faites-moi confiance chaque décision est importante."+
    "On ne sait jamais ce que le futur nous réserve.",
    image:"marchand.jpg",
    options:[perdre = {
      text: "Revenir sur le droit chemin",
      action: "goToChapter('inconnue')"},]
  },
    bagarre : {subtitle :"En voilà une bonne idée!",
    text: "Vous comprenez finalement votre devoir." +
    "Un sage citoyen." +
    "Votre nouveau bras bionique sera finalement utile." +
    "Vous intervenez en tant que grand héro."+
    "Bon, vous avez surestimé votre force face à 5 rugbymans." +
    "Au moins, la personne a réussi à se sauver.",
    image:"bagarre.jpg",
    options:[intervenir = {
      text: "Avancer malgré tout",
      action: "goToChapter('inconnue')"},]
  },
    inconnue : {subtitle :"Qui êtes-vous?",
    text: "Vous allez voir cette étrange inconnue." +
    "- Bonjour..." +
    "-Vous devez suivre le chemin qu'indique la lumière." +
    "Ces paroles seront les seules que cette étrange femme vous dira."+
    "Suit ton instinct.",
    image:"inconnue.jpg",
    options:[wayone = {
      text: "Suivre ses directions",
      action: "goToChapter('wrongway')"},
      waytwo = {
        text: "Suivre son chemin",
        action: "goToChapter('goodway')"},]
  },
    wrongway : {subtitle :"Tu n'as pas suivi mon conseil",
    text: "Tes parents ne t'ont jamais appris à ne pas écouter les inconnus" +
    "N'écoute jamais ce que les autres te diront." +
    "Suit que ton propre chemin",
    image:"wrongway.jpg",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    goodway : {subtitle :"Merci, de m'avoir écouté",
    text: "Continuez votre route." +
    "Soudainement, une ombre apparait derrière vous." +
    "Il vous menace de l'avoir suivi toute sa vie." +
    "Un peu contradictoire pour quelqu'un qui vous as suivi jusqu'ici."+
    "Bref, on a autre chose a géré maintenant." +
    "Qu'avez vous pour vous défendre?",
    image:"goodway.jpg",
    options:[non = {
      text: "Rien",
      action: "goToChapter('rien')"},
      faible = {
        text: "Affaibli",
        action: "goToChapter('affaibli')"},
        oui = {
          text: "Fusil",
          action: "goToChapter('fusil')"},]
  },
    rien : {subtitle :"Vous croyez être fort?",
    text: "Vous essayez d'argumenter." +
    "Cela ne sert à rien contre un fou." +
    "Allez le désarmez c'est votre dernière chance" +
    "Bravo, maintenant plus que vos bras contre les siens"+
    "Oh non, il sort une lame." +
    "Adieu.",
    image:"rien.jpg",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    affaibli : {subtitle :"Avez-vous réellement fait ça?",
    text: "Vous le suppliez de vous laissez en paix" +
    "Un fou ne change jamais d'idée." +
    "Votre fin est déjà écrite." +
    "À bientôt mon ami.",
    image:"affaibli.jpg",
    options:[debut = {
      text: "Revenir au début",
      action: "goToChapter('reveil')"},]
  },
    fusil : {subtitle :"Un fusil peut toujours être utile",
    text: "Vous avez récupéré un fusil." +
    "Vous n'avez pas le temps d'écouter ce qu'il dit." +
    "Vous avez une mission." +
    "Une balle directement entre ses deux yeux."+
    "Mettez-vous en place! Fait ta mission!!" +
    "En auras-tu le courage?"+
    "Après tout rien ne t'oblige à faire ça...",
    image:"fusil.jpg",
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
    flashack : {subtitle :"Quel est le sens de votre vie?",
    text: "Rien n'est réel." +
    "Même pas votre propre vie." +
    "Tout ce que vous pensez être votre vie est faux." +
    "Qu'est ce que cela change que vous sautez dans le vide?"+
    "Tout finit d'un coup." +
    "Plus de problèmes ou de missions dont vous n'êtes pas d'accord."+
    "Après tout, vous renaîtrez peut-être dans une autre vie.",
    image:"flashback.jpg",
    options:[flash = {
      text: "*halo de lumière*",
      action: "goToChapter('mission')"},]
    },
    xtirer : {subtitle :"La violence n'est pas toujours la solution",
    text: "Vous ne voulez pas tirer?" +
    "Je comprends votre choix." +
    "Peut-être que personne mérite la mort." +
    "Il y a d'autres moyens de renverser un gouvernement."+
    "Mais en êtes vous capable?" +
    "Surtout, à quel prix?",
    image:"xtirer.jpg"},
    tirer : {subtitle :"Vous avez un but",
    text: "Après tout ce chemin, il faut bien agir." +
    "Vous n'êtes pas venu ici pour rien." +
    "Après tout, vous devez bien arrêter ce massacre." +
    "*tire*"+
    "Vous avez tiré sans même me prévenir." +
    "Vous êtes maintenant rechercher par tout le pays."+
    "Vous allez encore déménager et fuir."+
    "Votre vie n'est pas une boucle?",
    image:"tirer.jpg"},

  };
  

function goToChapter(chapter) {
console.log(chaptersObj[chapter]["subtitle"]);
console.log(chaptersObj[chapter]["text"]);
}
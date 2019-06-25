import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 

  posts = [
    {
      title: 'Mon premier post',
      content: 'je vous conseille d utiliser Bootstrap pour cet exercice.  Si vous créez des list-group-item dans un list-group, vous avez les classes list-group-item-success et list-group-item-danger pour colorer les item'
    },
    {
      title: 'Mon deuxième post',
      content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".'
    },
    {
      title: 'Encore un post',
      content: 'Bonus : créez un type pour les post, appelé Post, afin de rendre votre code plus lisible.  Vous pouvez même y intégrer un constructeur qui attribue automatiquement la date !'
    }
  ];
   
  
}

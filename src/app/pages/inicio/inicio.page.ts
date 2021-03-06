import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirecTo: '/action-sheet' 
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirecTo: '/alert' 
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirecTo: '/avatar' 
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirecTo: '/botones' 
    },
    {
      icon: 'card',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirecTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid - Rows',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'INFINITE',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input - forms',
      redirecTo: '/input'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string,
  name: string,
  redirecTo: string
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string
  constructor(public alertController: AlertController) { 
    this.titulo = 'App header'
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Esto es un mensaje de alerta',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Rellene un titulo'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blash) => {
          console.log('Confirm cancel:');
        }
      },{
        text: 'Ok',
        handler: ({titulo}) => {
          console.log('Boton ok');
          if (titulo !== '') {
            this.titulo = titulo
          }
        }
      }]
    })
    console.log(alert);

    await alert.present()
  }

}

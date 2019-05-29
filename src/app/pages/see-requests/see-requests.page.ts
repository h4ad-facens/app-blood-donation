//#region Imports

import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

import { BloodType } from '../../models/enums/blood.type';
import { DonorProxy } from '../../models/proxys/donor.proxy';

//#endregion

//#region Components

@Component({
  selector: 'app-see-requests',
  templateUrl: './see-requests.page.html',
  styleUrls: ['./see-requests.page.scss'],
})

//#endregion

/**
 * A classe que representa a página para visualizar as requisições por sangue
 */
export class SeeRequestsPage {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    private router: NavController,
  ) {}

  //#endregion

  //#region Public Properties

  /**
   * As informações de um doador de sangue
   */
  public donors: DonorProxy[] = [
    {
      place: 'Sorocaba',
      image: 'https://media.licdn.com/dms/image/C4D03AQFiexdun7-uZw/profile-displayphoto-shrink_100_100/0?e=1564012800&v=beta&t=6GFIJ7MqGRsQgi-29Dwyv3TEP-1c5euP9sn6dkZ6xwg',
      cellphone: '+15 98811-6119',
      name: 'Vinícius Lourenço',
      bloodType: BloodType.A_MINUS,
      isRequest: true
    },
    {
      place: 'Sorocaba',
      image: 'https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/49462940_2441695969236334_1000030457099714560_n.jpg?_nc_cat=103&_nc_ht=scontent.faep3-1.fna&oh=012132a09d578240a42759060703ea20&oe=5D8F1C81',
      cellphone: '+15 98800-3662',
      name: 'Vinícius Ibanez',
      bloodType: BloodType.A_MINUS,
      isRequest: true
    },
    {
      place: 'Sorocaba',
      image: 'https://scontent.faep3-1.fna.fbcdn.net/v/t31.0-8/28061666_1039275686213096_5590526372369788552_o.jpg?_nc_cat=107&_nc_ht=scontent.faep3-1.fna&oh=706efac08f85fc1af56212acd26cce77&oe=5D9DFA22',
      cellphone: '+15 98811-6119',
      name: 'Irapua D P Costa',
      bloodType: BloodType.A_MINUS,
      isRequest: true
    },
    {
      place: 'Sorocaba',
      image: 'https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/19598587_1976286592603747_4208176907490967005_n.jpg?_nc_cat=111&_nc_ht=scontent.faep3-1.fna&oh=4ec2b239f6f2705c21bdeb5c0046ddb8&oe=5D591760',
      cellphone: '+15 98815-9658',
      name: 'Vitor Marques',
      bloodType: BloodType.A_MINUS,
      isRequest: true
    },
    {
      place: 'Sorocaba',
      image: 'https://scontent.faep3-1.fna.fbcdn.net/v/t1.0-1/p160x160/17457909_168146933704474_6527627927619102389_n.jpg?_nc_cat=104&_nc_ht=scontent.faep3-1.fna&oh=b9f5515e7633c66a5de388ff626fcfdc&oe=5D51F1AC',
      cellphone: '+15 99718-3080',
      name: 'Vinícius Bonatti',
      bloodType: BloodType.A_MINUS,
      isRequest: true
    },
  ];

  //#endregion

  //#region Public Methods

  /**
   * Método que abre a página para requisitar sangue
   */
  public async addRequestBlood(): Promise<void> {
    await this.router.navigateForward('/request-blood');
  }

  //#endregion


}

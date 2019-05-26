//#region Imports

import { Component } from '@angular/core';
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
  constructor() { }

  //#endregion

  //#region Public Properties

  /**
   * As informações de um doador de sangue
   */
  public donor: DonorProxy = {
    place: 'Sorocaba',
    image: 'https://media.licdn.com/dms/image/C4D03AQFiexdun7-uZw/profile-displayphoto-shrink_100_100/0?e=1564012800&v=beta&t=6GFIJ7MqGRsQgi-29Dwyv3TEP-1c5euP9sn6dkZ6xwg',
    cellphone: '+15 98811-6119',
    name: 'Vinícius Lourenço',
    bloodType: BloodType.A_MINUS,
    isRequest: true
  };

  //#endregion

}

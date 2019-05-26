//#region Imports

import { BloodType } from '../enums/blood.type';

//#endregion

/**
 * A interface que representa os tipos sanguineos
 */
export interface BloodGroupType {

  /**
   * O texto do tipo de sangue
   */
  bloodTypeText: string;

  /**
   * O tipo de sangue
   */
  bloodType: BloodType;

}

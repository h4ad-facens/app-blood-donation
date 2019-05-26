/**
 * A interface que representa as informações de um doador de sangue
 */
import { BloodType } from '../enums/blood.type';

export interface DonorProxy {

  /**
   * O nome do doador
   */
  name: string;

  /**
   * A imagem do doador
   */
  image: string;

  /**
   * O local em que o doador mora
   */
  place: string;

  /**
   * O número de telefone do doador
   */
  cellphone: string;

  /**
   * O tipo sanguíneo do doador
   */
  bloodType: BloodType;

  /**
   * Diz se é uma requisição por sangue, ou se é apenas para listar um doador
   */
  isRequest: boolean;

}

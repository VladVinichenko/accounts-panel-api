import { Injectable } from '@nestjs/common';

@Injectable()
export class CurrencyService {




  async getAccessible(): Promise<object> {

  const accessible = ['USD', 'EUR']
const resCurrency = {}

    const getAllCurrency : {} = await this.getAll()
    
    accessible.forEach(el => {
      resCurrency[el] = getAllCurrency[el]
    })

    return resCurrency
  }


  async getAll(): Promise<object> {
    let res = []
    await fetch('https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json')
      .then((response) => response.json())
      .then((data) => res = data);

    return res
  }




}

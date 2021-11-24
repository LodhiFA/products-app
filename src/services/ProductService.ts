import Papa from 'papaparse'
import { IProductModel } from '../models/IProductModel'

export const readCSVData = async (): Promise<IProductModel[]> => {
    try {
      const response = await fetch('data/products.csv')
        .then((response) => response.text())
        .then((text) => {
          var res = Papa.parse(text)
          return res.data
        })
      return await parseData(response)
    } catch (err) {
      console.error(err)
      return [] as IProductModel[]
    }
  }
  
  const parseData = async (res: any): Promise<IProductModel[]> => {
    try {
      let keys = res[0] as Array<string>
  
      let values = res.slice(1)
      let objects = values.map((array: any) => {
        let object: {[key: string]: string} = {
          title: '',
          gtin: '',
          gender: '',
          sale_price: '',
          price: '',
          image_link: '',
          additional_image_link: '',
        }
        keys.forEach((key, i) => (object[key] = array[i]))
        return object
      })
      return objects
    } catch (err) {
      console.error(err)
      return []
    }
  }
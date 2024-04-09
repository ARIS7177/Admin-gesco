import { Admin } from "./Admin";

interface FecthService {
  fetch: (url: string, method: string, param?: any) => false | Promise<any>
}

// const baseUrl = 'http://localhost:3333/api' ;
const baseUrl = 'http://localhost:63829/api' ;

export const  fecthService: FecthService = {

  async fetch(url, method, param) {
    const storedToken = Admin.getToken();
    if(!storedToken) return false ;

    const { token } = storedToken ;

    const options: RequestInit = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },

      method,
      body: JSON.stringify(param)
    }

    if(method == 'get') delete options.body ;

    let dataToSend 

    try {
      const response: Response = await fetch(baseUrl + url, options) ;
      dataToSend = response.json() ;
    } catch (e) {
      dataToSend = false ;
    } finally {
      return dataToSend
    }
  }
}
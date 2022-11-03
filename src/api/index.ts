import QueryParams from '@/types'
import axios from 'axios'

const baseUrl = 'https://newsapi.org/v2/'
const apiKey = '099148be22804e849a0c6fe022b7cf5e'

async function fetchData(url: string, params?: QueryParams): Promise<any> {
  let paramsStr = '';
  if(params){
    const paramsArr = [];
    for(const [key, value] of Object.entries(params)){
      paramsArr.push(`${key}=${value}`);
    }
    paramsStr = paramsArr.join('&');
    paramsStr += '&'
  }
  const fetchUrl = `${baseUrl}${url}?${paramsStr}apiKey=${apiKey}`
  try{
   let response = await axios.get(fetchUrl)
   return response.data;
  } catch(e){
    throw new Error(fetchUrl);
  }
}

export { fetchData }
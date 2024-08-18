import axios from "axios";
const port = "3000";
const baseUrl = `http://localhost:${port}/`
const getEntries = async () => {
 const data =  await axios.get(baseUrl + 'api/diaries')
return data

}

export default { getEntries }
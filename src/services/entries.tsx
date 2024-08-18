import axios from "axios";
import { NewDiaryEntry } from "../types";
const port = "3000";
const baseUrl = `http://localhost:${port}/`


const getEntries = async () => {
 const data =  await axios.get(baseUrl + 'api/diaries')
return data
}

const addEntry = async (entry: NewDiaryEntry) => {
    const addedEntry =  await axios.post(baseUrl + 'api/diaries', entry)
    return addedEntry
}

export default { getEntries, addEntry }
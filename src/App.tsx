import { useEffect, useState } from "react"
import EntriesService from './services/entries'
import Entries from "./components/entries"
const App = () => {
const [entries, setEntries] = useState([])
 useEffect(() => {
  const getAndSetEntries = async() => {
  const receivedEntries = await EntriesService.getEntries();
  console.log(receivedEntries)
  setEntries(receivedEntries.data);
  }
  getAndSetEntries();
},[])

  return (<><Entries entries={entries} /></>)
}

export default App

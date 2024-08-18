import { useEffect, useState } from "react"
import EntriesService from './services/entries'
import Entries from "./components/entries"
import { NonSensitiveDiaryEntry } from "./types"
import { toNonSensitiveDiaryEntry } from "./utils"
import Form from "./components/Form"
const App = () => {
const [entries, setEntries] = useState<NonSensitiveDiaryEntry[]>([])
const [error, setError] = useState("")
 useEffect(() => {
  const getAndSetEntries = async() => {
  const receivedEntries: unknown[] = (await EntriesService.getEntries()).data;
  const formattedEntries: NonSensitiveDiaryEntry[] = receivedEntries.map(x => toNonSensitiveDiaryEntry(x))
  setEntries(formattedEntries);
  }
  getAndSetEntries();
},[])

  return (<>
  <Form entries={entries} setEntries={setEntries} error={error} setError={setError}/>
  <Entries entries={entries} />
  </>)
}

export default App

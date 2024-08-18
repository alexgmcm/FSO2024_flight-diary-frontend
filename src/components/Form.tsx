import Error from "./Error";
import { useState } from "react";
import EntriesService from "../services/entries";
import { NewDiaryEntry, NonSensitiveDiaryEntry, Visibility, Weather } from "../types";
import { toNewDiaryEntry, toNonSensitiveDiaryEntry } from "../utils";



const Form = ({entries, setEntries, error, setError} : {entries: NonSensitiveDiaryEntry[],
     setEntries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>,
     error:string,
    setError: React.Dispatch<React.SetStateAction<string>>
 }) => {
    const [date, setDate] = useState(""); //should this be string? Yes, it's fine it sends as YYYY-MM-DD
    const [visibility, setVisibility] = useState("");
    const [weather, setWeather] = useState("");
    const [comment, setComment] = useState("");

    const handleSend = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const fields = {date, visibility, weather, comment};
    try {
    const newEntry : NewDiaryEntry = toNewDiaryEntry(fields)
    EntriesService.addEntry(newEntry).then((res) => {
        console.log(res.data)
        const addedEntry = toNonSensitiveDiaryEntry(res.data);
        setEntries(entries.concat(addedEntry))
    })
    setDate("")
    setVisibility("")
    setWeather("")
    setComment("")
} catch{
setError("Invalid fields!")
}

}

    return (
        <div>
            <h1>Add new entry</h1>
            <Error error={error} />
            <form>
            <label htmlFor="date">Date: </label>
            <input name="date" id="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} />

            <label htmlFor="visibility">Visibility: </label>

            <select value={visibility} onChange={(event) => setVisibility(event.target.value)}>
            { Object.values(Visibility).map(v => v.toString()).map(opt => <option value={opt} key={opt}>{opt}</option>)}
             </select>

             <select value={weather} onChange={(event) => setWeather(event.target.value)}>
            { Object.values(Weather).map(v => v.toString()).map(opt => <option value={opt} key={opt}>{opt}</option>)}
             </select>

            <label htmlFor="comment">Comment: </label>
            <input name="comment" id="comment" type="text" value={comment} onChange={(event) => setComment(event.target.value)} />

            <button type="button" onClick={handleSend}>Send</button>

            </form>


        </div>

    );
}

export default Form;
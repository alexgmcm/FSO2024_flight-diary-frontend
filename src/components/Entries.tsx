import { NonSensitiveDiaryEntry } from "../types";

const Entries = ({entries}: {entries: NonSensitiveDiaryEntry[]}) => {
    if (entries){
    return (<>
    <h1>Diary Entries</h1>
    {entries.map(x => {return(<div key={x.id}><h2>{x.date}</h2><p> visibility: {x.visibility} <br/> weather: {x.weather}</p></div>)})}
    </>)}
    else {
        return <></>
    }
}

export default Entries;
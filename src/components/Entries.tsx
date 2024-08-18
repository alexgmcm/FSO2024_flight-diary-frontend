

const Entries = ({entries}) => {
    if (entries){
    return (<>
    <h1>Diary Entries</h1>
    {entries.map(x => <><p key={x.id}><h2>{x.date}</h2></p><p> visibility: {x.visibility} <br/> weather: {x.weather}</p></>)}
    </>)}
    else {
        return <></>
    }
}

export default Entries;
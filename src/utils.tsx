import { Weather, Visibility, NonSensitiveDiaryEntry, SharedDiaryFields} from "./types"

const isWeather = (text:string): text is Weather => {
    return Object.values(Weather).map(v => v.toString()).includes(text);
}

const isVisibility = (text:string): text is Visibility => {
    return Object.values(Visibility).map(v => v.toString()).includes(text);
}

const isDate = (text:string): boolean => {
    return Boolean(Date.parse(text));
}

const isNumber = (obj:unknown): obj is number => {
    return typeof obj === 'number' || obj instanceof Number
}

const isString = (obj:unknown): obj is string => {
    return typeof obj==='string' || obj instanceof String
}

const isObject = (unk:unknown): unk is object => {
    if ( !unk || typeof unk !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }
      else {return true}
}

const hasSharedDiaryFields = (obj:unknown): obj is SharedDiaryFields  => {
    if (isObject(obj)){
        if ('weather' in obj && 'date' in obj  && 'visibility' in obj ){
            if( (isString(obj.weather) && isWeather(obj.weather))
                && (isString(obj.date) && isDate(obj.date))
                && (isString(obj.visibility) && isVisibility(obj.visibility))
            ){
                return true
            }      
        }
        return false
    }
    return false
}



export const toNonSensitiveDiaryEntry = (obj:unknown): NonSensitiveDiaryEntry => {
    if (hasSharedDiaryFields(obj) && 'id' in obj && isNumber(obj.id)){
        const newNonSensitiveDiaryEntry: NonSensitiveDiaryEntry = {...obj, id: obj.id};
        return newNonSensitiveDiaryEntry
        }
        else {
            throw new Error("Could not convert to non-sensitive diary entry:" + obj)
        }
    }






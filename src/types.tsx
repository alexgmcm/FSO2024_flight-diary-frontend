export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy',
  }
  
  export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
  }

  export interface SharedDiaryFields {
    date: string;
    weather: Weather;
    visibility: Visibility;
   }
  
  export interface DiaryEntry extends SharedDiaryFields{
    id: number;
    comment: string;
  }
  
  export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
  
  export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
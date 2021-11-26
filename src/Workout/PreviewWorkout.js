//Omars Code
import "./PreviewWorkout.css";
import react from "react";

import WorkoutCard from "./WorkoutCard";
import data from './test.json';

export default function PreviewWorkout() {
  return (
    <div className="workout-page">
      {data.map((info) => { //mapping the data from database (every preview of workout)
        return <WorkoutCard data={info} />;
      })}
    </div>
  );
}
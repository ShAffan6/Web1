import "./Blog.css";
import react from "react";

import WorkoutCard from "./BlogCards";
import data from './blog.json';

export default function Blog() {
  return (
    <div className="blog-page">
      {data.map((info) => {
        return <WorkoutCard data={info} />;
      })}
    </div>
  );
}
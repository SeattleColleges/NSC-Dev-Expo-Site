
import React from "react";
import FacultyCard from "../components/FacultyCard";
import { facultyList } from "../data/facultyData";

export default {
  title: "Components/FacultyCard",
  component: FacultyCard,
};

export const Jeff = () => (
  <FacultyCard faculty={facultyList[0]} />
);

export const BC = () => (
    <FacultyCard faculty={facultyList[1]} />
  );

  export const Issac = () => (
    <FacultyCard faculty={facultyList[2]} />
  );

  
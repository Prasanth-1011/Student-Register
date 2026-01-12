import picture from "./Assets/Profile Avatar.png";
import male_avatar from "./Assets/Man Avatar.png";
import female_avatar from "./Assets/Woman Avatar.png";

export const studentRecord = {
  name: "John Doe",
  age: 25,
  gender: "Male",
  course: "Computer Science",
  grade: "A",
  favourite: false,
  profile: picture,
};

export const studentList = [
  {
    name: "Sam",
    roll: 1001,
    age: 25,
    gender: "Male",
    course: "Information Technology",
    grade: "B",
    favourite: false,
    profile: male_avatar,
  },

  {
    name: "Grace",
    roll: 1002,
    age: 25,
    gender: "Female",
    course: "Computer Science",
    grade: "A",
    favourite: false,
    profile: female_avatar,
  },

  {
    name: "Jane",
    roll: 1003,
    age: 25,
    gender: "Female",
    course: "Computer Science",
    grade: "B",
    favourite: true,
    profile: female_avatar,
  },

  {
    name: "Jim",
    roll: 1004,
    age: 25,
    gender: "Male",
    course: "Computer Science",
    grade: "A",
    favourite: true,
    profile: male_avatar,
  },
];

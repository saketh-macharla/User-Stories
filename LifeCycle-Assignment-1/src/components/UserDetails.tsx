import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const Gender = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];
const UserDetails = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [gender, setGender] = useState<string>("");

  const handleAge = (e: any) => {
    setAge(e.target.value);
  };
  const handleGender = (e: any) => {
    setGender(e.target.value);
  };
  const getImage = () => {
    if (age <= 0) {
      return <img alt="" />;
    } else if (age <= 19 && age > 0) {
      return <img src="/images/teenager.jpeg" alt="teenager" />;
    } else if (age >= 20 && age < 40) {
      return <img src="/images/youngage.png" alt="young ages" />;
    } else {
      return <img src="/images/middleage.jpg" alt="middleage" />;
    }
  };

  const getGenderImage = () => {
    if (gender === "Male") {
      return (
        <img src="/images/male.jpg" alt="male" height="30px" width="30px" />
      );
    }
    if (gender === "Female") {
      return (
        <img src="/images/female.png" alt="female" width="30px" height="30px" />
      );
    }
  };
  return (
    <Box
      sx={{
        margin: "1% auto",
        display: "flex",
        flexDirection: "column",
        width: "25%",
        gap: "3rem",
      }}
    >
      <TextField label="Name" onChange={(e: any) => setName(e.target.value)} />
      {name && (
        <TextField
          label="Age"
          value={age}
          onChange={handleAge}
          type="number"
        />
      )}
      {getImage()}
      {name && (
        <TextField select label="Gender" value={gender} onChange={handleGender}>
          {Gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <option>{option.label}</option>
            </MenuItem>
          ))}
        </TextField>
      )}
      {getGenderImage()}
    </Box>
  );
};

export default UserDetails;

import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";

const Car = (props) => {
  const { id } = useParams();
  console.log(id);
  // this is how to find an object inside of an arra
  //using an id, extracted from the use params hook
  const foundCar = cars.find((car) => car.id === Number(id));
  console.log(foundCar);
  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 5 }}>
        <h1>{foundCar.Name}</h1>
        {Object.keys(foundCar).map((key,index)=>(
            <Chip key={index} label={`${key}: ${foundCar[key]}`} />

        ))}
      </Paper>
    </Container>
  );
};

export default Car;

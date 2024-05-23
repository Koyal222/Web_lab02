let car={
  brand : "Toyota",
  model : "Camry",
  year : 2022
};

function carInfo(car){
  let carInfo ="The "+car.brand+ " "+car.model+ " was manufactured in " +car.year
  return carInfo;
}

console.log(carInfo(car));
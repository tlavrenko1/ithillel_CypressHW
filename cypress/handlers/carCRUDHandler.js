export function findCarInCarsList(cars, id) {
    return cars.find((car) => car.id === id);
}
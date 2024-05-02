
 class Utils{

    validateStatusCode(response, statusCode){
        expect(response.status).to.eq(statusCode);
    }

    validateCreatedCar(response, car){
        expect(response.body.data[0].brand).to.eq(car.brand);
        expect(response.body.data[0].model).to.eq(car.model);
        expect(response.body.data[0].mileage).to.eq(car.mileage);
    }
}

export const utils = new Utils();
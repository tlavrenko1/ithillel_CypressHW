
 class Utils{

    validateStatusCodeCreated(response){
        expect(response.status).to.eq(201);
    }

    validateStatusCodeReceivedData(response){
        expect(response.status).to.eq(200);
    }

    validateCreatedCar(response, car){
        expect(response.body.data[0].brand).to.eq(car.brand);
        expect(response.body.data[0].model).to.eq(car.model);
        expect(response.body.data[0].mileage).to.eq(car.mileage);
    }
}

export const utils = new Utils();
import { faker } from '@faker-js/faker';

export class DataGenerator {
    static getUser() {
        return {
            // Basic User Info
            // FIX: In Faker v9+, use 'username()' instead of 'userName()'
            userName: faker.internet.username(), 
            email: faker.internet.email(),
            password: faker.internet.password({ length: 10 }) + '!', // Ensuring complexity
            
            // Address Info
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobile: faker.phone.number()
        };
    }
}
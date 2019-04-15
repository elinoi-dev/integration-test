import Faker from 'faker'

const users = [
  {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    image: Faker.internet.avatar(),
    email: Faker.internet.email(),
    roles: "ROLE_ADMIN",
  },
  {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    image: Faker.internet.avatar(),
    email: Faker.internet.email(),
    roles: "ROLE_ADMIN",
  },
  {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    image: Faker.internet.avatar(),
    email: Faker.internet.email(),
    roles: "ROLE_ADMIN",
  },
  {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    image: Faker.internet.avatar(),
    email: Faker.internet.email(),
    roles: "ROLE_ADMIN",
  },
  {
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    image: Faker.internet.avatar(),
    email: Faker.internet.email(),
    roles: "ROLE_ADMIN",
  },
];

export default users;

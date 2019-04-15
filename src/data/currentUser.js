import Faker from 'faker'

const currentUser = {
  firstname: Faker.name.firstName(),
  lastname: Faker.name.lastName(),
  image: Faker.internet.avatar(),
  email: Faker.internet.email(),
};

export default currentUser;

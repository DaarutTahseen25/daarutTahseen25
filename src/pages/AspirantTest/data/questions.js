import { faker } from "@faker-js/faker";

const questions = Array.from({ length: 30 }, (_, index) => {
  const options = [
    faker.lorem.words(2),
    faker.lorem.words(2),
    faker.lorem.words(2),
    faker.lorem.words(2),
  ];

  return {
    id: index + 1,
    question: faker.lorem.sentence(),
    options,
    answer: null,
  };
});

export default questions;

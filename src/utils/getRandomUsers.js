import { build, fake, sequence } from 'test-data-bot';

const userBuilder = build('User').fields({
  id: sequence(x => x + 1),
  firstName: fake(f => f.name.firstName()),
  lastName: fake(f => f.name.lastName()),
  job: fake(f => f.name.jobTitle()),
  age: fake(f =>
    f.random.number({
      min: 18,
      max: 65,
    })
  ),
});

export default length => Array.from({ length }, userBuilder);

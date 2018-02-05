const skillsToFind = [
  {
    name: 'react',
    matches: ['react', 'reactjs'],
  },
  {
    name: 'redux',
    matches: ['redux', 'flux'],
  },
  {
    name: 'Modern JS',
    matches: [
      'modern JS',
      'es6',
      'es7',
      'es2015',
      'es2016',
      'es2017',
      'esnext',
      'es next',
      'es6+',
    ],
  },
  {
    name: 'node',
    matches: ['node', 'nodejs', 'node js'],
  },
  {
    name: 'Functional Programming',
    matches: ['fp', 'functional programming'],
  },
  {
    name: 'Java',
    matches: ['java'],
  },
  {
    name: 'Spring',
    matches: ['spring', 'springmvc', 'spring boot', 'springboot'],
  },
  {
    name: 'Android',
    matches: ['Android'],
  },
  {
    name: 'iOS',
    matches: ['ios', 'swift', 'objective c', 'objective-c', 'objectivec'],
  },
];

const cmdLineOptions = [
  { name: 'only-matches', alias: 'o', type: Boolean },
  { name: 'src', type: String, multiple: true, defaultOption: true },
];

module.exports = {
  skillsToFind,
  cmdLineOptions,
};

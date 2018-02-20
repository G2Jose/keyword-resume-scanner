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
      'ecma',
      'javascript',
    ],
  },
  {
    name: 'node',
    matches: ['node', 'nodejs', 'node js', 'node.js'],
  },
  {
    name: 'Functional Programming',
    matches: ['fp', 'functional programming'],
  },
  {
    name: 'Java',
    matches: ['java', 'java 8', 'java 9'],
  },
  {
    name: 'Spring',
    matches: ['spring', 'spring boot', 'springboot', 'java 9'],
  },
  {
    name: 'Android',
    matches: ['Android', 'kotlin', 'realm', 'dagger2', 'dagger 2'],
  },
  {
    name: 'Rx',
    matches: [
      'observables',
      'rx',
      'rxjs',
      'rxswift',
      'rxjava',
      'rxcocoa',
      'akka',
      'rxandroid',
      'rx android',
      'rx java',
    ],
  },
  {
    name: 'iOS',
    matches: ['ios', 'swift'],
  },
  {
    name: 'hybris',
    matches: ['hybris'],
  },
  {
    name: 'dagger',
    matches: ['dagger'],
  },
  {
    name: 'firebase',
    matches: ['firebase'],
  },
  {
    name: 'realm',
    matches: ['realm'],
  },
  {
    name: 'mvvm',
    matches: ['mv-vm', 'mvvm'],
  },
  {
    name: 'retrofit',
    matches: ['retrofit'],
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

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://dilloncleaver.com',
  title: 'DC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Dillon Cleaver',
  role: 'Software Engineer',
  description:
    'Software Engineer specializing in TypeScript for React web and React Native mobile application projects.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/dillon-cleaver/',
    github: 'https://github.com/dilloncleaver',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BioCoach',
    description:
      'Joined Secret Lab LLC and immediately began work on the BioCoach iOS/Android app.',
    stack: ['Firebase', 'TypeScript', 'React Native', 'Redux'],
    livePreview: 'https://biocoach.io/',
    // sourceCode: 'https://github.com',
  },
  {
    name: 'Unicorn Books',
    description:
      'Led wireframe designs and assisted with UX/UI design and Handlebars. Built out back-end routes using JavaScript, jQuery, Node.js, and Express.js',
    stack: ['jQuery', 'Node', 'SQL', 'Express', 'Handlebars'],
    sourceCode: 'https://github.com/Cygnet717/UnicornBooks',
    livePreview: 'https://unicornbooks.herokuapp.com/',
  },
  {
    name: 'Nextflix',
    description:
      'Led UX/UI design and wireframe designs for home page and favorites page. Responsible for HTML, CSS, Bootstrap, and implementing anime.js code.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/cleadi/nextflix',
    livePreview: 'https://cleadi.github.io/nextflix/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Redux',
  'Node',
  'Git',
  'Firebase',
  'MongoDB',
  'VS Code',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cleadi@fastmail.com',
}

export { header, about, projects, skills, contact }

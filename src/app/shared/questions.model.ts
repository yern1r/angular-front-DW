export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}
export const grammaticaQuestions: Question[] = [
    {
      id: 1,
      text: 'What are the specific sounds classified as special in Kazakh language?',
      options: [
        'a) ә, ө, і, ұ, ү',
        'b) а, ө, о, е',
        'c) б, в, г, ғ, д',
        'd) қ, ғ, ң, һ',
      ],
      correctAnswer: 'a) ә, ө, і, ұ, ү',
    },
    {
      id: 2,
      text: 'What is the definition of a syllable?',
      options: [
        'a) A combination of consonant sounds in a word.',
        'b) A single vowel sound in a word.',
        'c) A combination of vowel and consonant sounds in a word.',
        'd) A combination of sounds that make up a word.',
      ],
      correctAnswer: 'd) A combination of sounds that make up a word.',
    },
    {
      id: 3,
      text: 'In syllable division, if there are two consonants at the syllable boundary, which syllable does the first consonant belong to?',
      options: [
        'a) The next syllable',
        'b) The previous syllable',
        'c) It belongs to both syllables equally',
        'd) None of the above',
      ],
      correctAnswer: 'b) The previous syllable',
    },
    {
      id: 4,
      text: 'What is the primary rule of syllable division in Kazakh language?',
      options: [
        'a) The first consonant belongs to the next syllable',
        'b) The first consonant belongs to the previous syllable',
        'c) The first vowel belongs to the next syllable',
        'd) The first vowel belongs to the previous syllable',
      ],
      correctAnswer: 'b) The first consonant belongs to the previous syllable',
    },
    {
      id: 5,
      text: 'What determines the position of stress in Kazakh words?',
      options: [
        'a) It always falls on the first syllable',
        'b) It is determined randomly',
        'c) It falls on the last syllable',
        'd) It falls on a specific syllable based on word structure and pronunciation',
      ],
      correctAnswer:
        'd) It falls on a specific syllable based on word structure and pronunciation',
    },
  ];
  
export const sozdikaQuestions: Question[] = [
    {
      id: 1,
      text: "What does 'Ауа райы' mean in Kazakh language?",
      options: ['a) Temperature', 'b) Weather', 'c) Wind', 'd) Climate'],
      correctAnswer: 'b) Weather',
    },
    {
      id: 2,
      text: "What is the word for 'Temperature' in Kazakh?",
      options: ['a) Ауа райы', 'b) Температура', 'c) Қысым', 'd) Жел'],
      correctAnswer: 'b) Температура',
    },
    {
      id: 3,
      text: "What does 'Ылғалдылық' mean in Kazakh language?",
      options: ['a) Humidity', 'b) Wind', 'c) Precipitation', 'd) Cloudiness'],
      correctAnswer: 'a) Humidity',
    },
    {
      id: 4,
      text: "What is the word for 'Wind' in Kazakh?",
      options: ['a) Ауа райы', 'b) Температура', 'c) Қысым', 'd) Жел'],
      correctAnswer: 'd) Жел',
    },
    {
      id: 5,
      text: "What does 'Бұлттылық' refer to in Kazakh language?",
      options: [
        'a) Temperature',
        'b) Humidity',
        'c) Cloudiness',
        'd) Precipitation',
      ],
      correctAnswer: 'c) Cloudiness',
    },
  ];
  
  export const phrazaQuestions: Question[] = [
    {
      id: 1,
      text: "What does 'Сәлем!' mean in Kazakh language?",
      options: [
        'a) Goodbye!',
        'b) Hello!',
        'c) How are you?',
        'd) My name is...',
      ],
      correctAnswer: 'b) Hello!',
    },
    {
      id: 2,
      text: "How do you ask 'What's your name?' in Kazakh?",
      options: [
        'a) Сіз қайда оқисыз?',
        'b) Қалың қалай?',
        'c) Сіздің атыңыз кім?',
        'd) Менің атым ...',
      ],
      correctAnswer: 'c) Сіздің атыңыз кім?',
    },
    {
      id: 3,
      text: "How do you say 'I am from...' in Kazakh?",
      options: [
        'a) Сіз қайда оқисыз?',
        'b) Мен ... келдім.',
        'c) Қалың қалай?',
        'd) Сіздің атыңыз кім?',
      ],
      correctAnswer: 'b) Мен ... келдім.',
    },
    {
      id: 4,
      text: "What does 'Кандай хоббиіңіз бар?' mean in Kazakh language?",
      options: [
        "a) What's your hobby?",
        'b) Where do you live?',
        'c) How old are you?',
        'd) Do you like it?',
      ],
      correctAnswer: "a) What's your hobby?",
    },
    {
      id: 5,
      text: "How do you respond to 'Вам нравится?' (Do you like it?) in Kazakh?",
      options: [
        'a) Да, мне нравится.',
        'b) Сізге ұнайды ма?',
        'c) Нет, мне не нравится.',
        'd) Иә, маған ұнайды.',
      ],
      correctAnswer: 'd) Иә, маған ұнайды.',
    },
  ];
  

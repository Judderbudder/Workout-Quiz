import photo1 from './photos/Gain-musclemass.png';
import photo2 from './photos/SLIM_SHREDDED_BODY.png';
import photo3 from './photos/get-athletic.png';

const questionsData = [
  {
    type: 'radio',
    question: 'What is your fitness goal?',
    options: [
      { text: 'Gain Muscle', photoUrl: photo1 },
      { text: 'Lose Fat', photoUrl: photo2 },
      { text: 'Get more athletic', photoUrl: photo3 }
    ]
  },
  {
    type: 'radio',
    question: 'Do you follow any of these diets?',
    options: [
      { text: 'Vegetarian 🍤', photoUrl: '' },
      { text: 'Vegan 🥕', photoUrl: '' },
      { text: 'Keto 🥑', photoUrl: '' },
      { text: 'Mediterranean 🌾', photoUrl: '' },
      { text: 'None of the above ❌', photoUrl: '' }
    ]
  },
  {
    type: 'checkbox',
    question: 'What are some foods you love eating?',
    options: [
      { text: 'Chicken 🍗', photoUrl: '' },
      { text: 'Beef 🥩', photoUrl: '' },
      { text: 'Bread 🍞', photoUrl: '' },
      { text: 'Bagels 🥯', photoUrl: '' },
      { text: 'Cheese 🧀', photoUrl: '' },
      { text: 'Potatoes 🥔', photoUrl: '' },
      { text: 'Candy 🍬', photoUrl: '' },
      { text: 'Cereal 🥣', photoUrl: '' },
      { text: 'Granola 🥣', photoUrl: '' },
      { text: 'Bacon 🥓', photoUrl: '' },
      { text: 'Sausages 🌭', photoUrl: '' },
      { text: 'Eggs 🥚', photoUrl: '' },
      { text: 'Nuts 🥜', photoUrl: '' },
      { text: 'Milk 🥛', photoUrl: '' },
      { text: 'Seafood 🐟🦐', photoUrl: '' },
      { text: 'Rice 🍚', photoUrl: '' },
      { text: 'Yogurt 🥣🍦', photoUrl: '' },
      { text: 'Protein supplements 🍫💪', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'What is your sex?',
    options: [
      { text: 'Male', photoUrl: '' },
      { text: 'Female', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'How much time do you spend a week working out',
    options: [
      { text: '0 😔', photoUrl: '' },
      { text: 'Less than 1 hour 🫤', photoUrl: '' },
      { text: '2-5 hours 🏋️‍♂️', photoUrl: '' },
      { text: '4-8 hours 💪', photoUrl: '' },
      { text: 'More than 8 hours 💪🏋️‍♀️💉', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'How often do you eat or drink sugary food or beverages?',
    options: [
      { text: 'Not often! 😎', photoUrl: '' },
      { text: '3-5 times a week 🍪', photoUrl: '' },
      { text: 'Pretty much everyday 🫃', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'How much water do you drink daily?',
    options: [
      { text: 'None, just soda ☠️', photoUrl: '' },
      { text: '2-6 glasses 💧', photoUrl: '' },
      { text: '6-10 glasses 💦', photoUrl: '' },
      { text: 'More than 10 glasses 🐳', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: "What's your current and target weight",
    options: [
      { text: '10ft', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: "What's your height?",
    options: [
      { text: 'h3k', photoUrl: '' },
      { text: 'hwj', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: "Let's keep in touch!",
    options: [
      { text: 'h3k', photoUrl: '' },
      { text: 'hwj', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'What is your level of fitness',
    options: [
      { text: 'Am not able to climb', photoUrl: '' },
      { text: 'Running is tough', photoUrl: '' },
      { text: 'I run for cardio', photoUrl: '' },
      { text: 'On fire', photoUrl: '' }
    ]
  },
  {
    type: 'radio',
    question: 'Are there any types of workouts you like',
    options: [
      { text: 'Gym workouts', photoUrl: '' },
      { text: 'Boxing', photoUrl: '' },
      { text: 'Cardio', photoUrl: '' },
      { text: 'Tabata', photoUrl: '' },
      { text: 'Yoga', photoUrl: '' }
    ]
  }
];

export default questionsData;

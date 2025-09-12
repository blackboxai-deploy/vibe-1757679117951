export interface Question {
  id: string;
  type: 'text' | 'multiple-choice' | 'image-prompt';
  prompt: string;
  caregiverHint: string;
  options?: string[]; // For multiple choice
  imageUrl?: string; // For image prompts
  encouragement: string[];
}

export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Emoji for visual appeal
  questions: Question[];
  color: string; // For visual distinction
}

export const activities: Activity[] = [
  {
    id: 'people-loved-ones',
    title: 'People & Loved Ones',
    subtitle: 'Share about family and friends',
    description: 'Talk about the special people in your life',
    icon: '👥',
    color: 'bg-blue-100 hover:bg-blue-200',
    questions: [
      {
        id: 'family-member',
        type: 'text',
        prompt: 'Tell me about someone special in your family. What do you enjoy most about spending time with them?',
        caregiverHint: 'Help them think of a specific family member. Show photos if helpful.',
        encouragement: ['What a lovely memory!', 'That sounds wonderful!', 'Thank you for sharing that with me.']
      },
      {
        id: 'friend-activity',
        type: 'text',
        prompt: 'Think of a good friend. What is something fun you used to do together?',
        caregiverHint: 'Encourage any memory, even from long ago. All answers are wonderful.',
        encouragement: ['That sounds like so much fun!', 'What a great friendship!', 'Beautiful memory to treasure.']
      },
      {
        id: 'celebration',
        type: 'multiple-choice',
        prompt: 'What kind of celebration do you enjoy most with loved ones?',
        caregiverHint: 'Any choice is perfect. Help them think about what brings them joy.',
        options: ['Birthday parties', 'Holiday gatherings', 'Quiet family dinners', 'All celebrations are special'],
        encouragement: ['That sounds delightful!', 'Celebrations with loved ones are so special!', 'What a wonderful way to connect!']
      }
    ]
  },
  {
    id: 'daily-routines',
    title: 'Daily Routines',
    subtitle: 'Think about daily activities',
    description: 'Reflect on familiar everyday tasks',
    icon: '🌅',
    color: 'bg-orange-100 hover:bg-orange-200',
    questions: [
      {
        id: 'morning-routine',
        type: 'text',
        prompt: 'What is the first thing you like to do when you wake up in the morning?',
        caregiverHint: 'Any morning activity is perfect - coffee, stretching, looking outside, etc.',
        encouragement: ['What a nice way to start the day!', 'That sounds peaceful!', 'Great morning habit!']
      },
      {
        id: 'meal-prep',
        type: 'multiple-choice',
        prompt: 'When making a sandwich, what do you put on first?',
        caregiverHint: 'This is just for fun - any order is fine!',
        options: ['Butter or spread', 'The main filling', 'I do it differently', 'I like to ask for help'],
        encouragement: ['Perfect!', 'That works wonderfully!', 'Great choice!', 'Everyone has their own way!']
      },
      {
        id: 'evening-activity',
        type: 'text',
        prompt: 'What is something you enjoy doing in the evening to relax?',
        caregiverHint: 'Any relaxing activity counts - TV, reading, talking, listening to music.',
        encouragement: ['That sounds very relaxing!', 'What a nice way to unwind!', 'Perfect way to end the day!']
      }
    ]
  },
  {
    id: 'simple-thinking',
    title: 'Simple Thinking Games',
    subtitle: 'Gentle mental exercises',
    description: 'Fun, easy thinking activities',
    icon: '🧠',
    color: 'bg-purple-100 hover:bg-purple-200',
    questions: [
      {
        id: 'color-association',
        type: 'multiple-choice',
        prompt: 'What color do you think of when I say "ocean"?',
        caregiverHint: 'Any color they choose is wonderful. There are no wrong answers.',
        options: ['Blue', 'Green', 'Gray', 'All colors are beautiful'],
        encouragement: ['Excellent choice!', 'Perfect!', 'I can picture that!', 'Wonderful thinking!']
      },
      {
        id: 'category-game',
        type: 'text',
        prompt: 'Can you name a fruit that is red?',
        caregiverHint: 'Help them if needed - apple, cherry, strawberry, tomato all count!',
        encouragement: ['Excellent!', 'Perfect choice!', 'That\'s exactly right!', 'Wonderful thinking!']
      },
      {
        id: 'opposites',
        type: 'multiple-choice',
        prompt: 'What is the opposite of "hot"?',
        caregiverHint: 'Help them if they\'re unsure. The goal is to participate, not test.',
        options: ['Cold', 'Warm', 'Cool', 'All of these work'],
        encouragement: ['Exactly right!', 'Perfect!', 'You got it!', 'Wonderful!']
      }
    ]
  },
  {
    id: 'reminiscence',
    title: 'Reminiscence Moments',
    subtitle: 'Share happy memories',
    description: 'Talk about special times from the past',
    icon: '💭',
    color: 'bg-green-100 hover:bg-green-200',
    questions: [
      {
        id: 'childhood-memory',
        type: 'text',
        prompt: 'What is a happy memory from when you were younger?',
        caregiverHint: 'Any memory is precious. Help them share whatever comes to mind.',
        encouragement: ['What a beautiful memory!', 'Thank you for sharing that!', 'That sounds wonderful!']
      },
      {
        id: 'special-place',
        type: 'text',
        prompt: 'Is there a special place you remember visiting? What did you like about it?',
        caregiverHint: 'Could be anywhere - a park, vacation spot, or even a room in their house.',
        encouragement: ['That sounds like a special place!', 'What lovely memories!', 'I can imagine how nice that was!']
      },
      {
        id: 'holiday-memory',
        type: 'multiple-choice',
        prompt: 'What kind of holiday memory makes you smile?',
        caregiverHint: 'Help them think of any celebration or holiday they enjoyed.',
        options: ['Family gatherings', 'Special meals', 'Giving gifts', 'All holiday memories are special'],
        encouragement: ['Holiday memories are so precious!', 'That sounds delightful!', 'What wonderful times!']
      }
    ]
  },
  {
    id: 'sensory-fun',
    title: 'Sensory Fun',
    subtitle: 'Think about smells, tastes, and sounds',
    description: 'Explore memories through your senses',
    icon: '🌸',
    color: 'bg-pink-100 hover:bg-pink-200',
    questions: [
      {
        id: 'favorite-smell',
        type: 'text',
        prompt: 'What is a smell that makes you feel happy or brings back good memories?',
        caregiverHint: 'Could be flowers, cooking, perfume, or anything that evokes positive feelings.',
        encouragement: ['What a lovely scent to remember!', 'That must bring back wonderful feelings!', 'Beautiful memory!']
      },
      {
        id: 'comfort-food',
        type: 'text',
        prompt: 'What food always tastes especially good to you?',
        caregiverHint: 'Any food is perfect - comfort food, treats, or healthy favorites.',
        encouragement: ['That sounds delicious!', 'What a wonderful choice!', 'I can almost taste it too!']
      },
      {
        id: 'peaceful-sound',
        type: 'multiple-choice',
        prompt: 'What sound do you find most peaceful?',
        caregiverHint: 'Help them think of any sound that feels calming to them.',
        options: ['Rain falling', 'Birds singing', 'Ocean waves', 'All sounds can be peaceful'],
        encouragement: ['That does sound very peaceful!', 'What a calming sound!', 'I can imagine how soothing that is!']
      }
    ]
  },
  {
    id: 'word-warmups',
    title: 'Word & Name Warm-Ups',
    subtitle: 'Fun with words and names',
    description: 'Gentle word games and naming exercises',
    icon: '📝',
    color: 'bg-yellow-100 hover:bg-yellow-200',
    questions: [
      {
        id: 'favorite-name',
        type: 'text',
        prompt: 'What is a name you\'ve always thought was beautiful?',
        caregiverHint: 'Any name they mention is wonderful - family names, friends, or just names they like.',
        encouragement: ['That is a beautiful name!', 'Lovely choice!', 'What a wonderful name!']
      },
      {
        id: 'color-preference',
        type: 'multiple-choice',
        prompt: 'Which color makes you feel happiest?',
        caregiverHint: 'Any color they choose is perfect. Help them think about what feels good.',
        options: ['Blue', 'Green', 'Yellow', 'Red', 'All colors are beautiful'],
        encouragement: ['Beautiful color choice!', 'That\'s a wonderful color!', 'Perfect!']
      },
      {
        id: 'letter-word',
        type: 'text',
        prompt: 'Can you think of something nice that starts with the first letter of your name?',
        caregiverHint: 'Help them with the first letter if needed. Any word is wonderful!',
        encouragement: ['Excellent word!', 'Perfect choice!', 'Wonderful thinking!']
      }
    ]
  },
  {
    id: 'object-match',
    title: 'Everyday Object Match',
    subtitle: 'Match objects with their uses',
    description: 'Think about familiar objects and where they belong',
    icon: '🏠',
    color: 'bg-indigo-100 hover:bg-indigo-200',
    questions: [
      {
        id: 'kitchen-item',
        type: 'multiple-choice',
        prompt: 'Where would you usually keep a coffee mug?',
        caregiverHint: 'Help them think about where they keep mugs. Any answer is fine.',
        options: ['Kitchen cupboard', 'On the counter', 'Near the coffee maker', 'Wherever is convenient'],
        encouragement: ['Perfect place for it!', 'That makes sense!', 'Great thinking!']
      },
      {
        id: 'tool-use',
        type: 'multiple-choice',
        prompt: 'What would you use a soft brush for?',
        caregiverHint: 'Many answers work - hair, cleaning, painting, pets, etc.',
        options: ['Brushing hair', 'Cleaning gently', 'Painting', 'Many different things'],
        encouragement: ['Exactly right!', 'Perfect use!', 'Great thinking!']
      },
      {
        id: 'comfort-item',
        type: 'text',
        prompt: 'What is something soft and comfortable you might use when resting?',
        caregiverHint: 'Could be pillow, blanket, soft chair, etc. Any comfortable item counts.',
        encouragement: ['That sounds so comfortable!', 'Perfect for resting!', 'Great choice!']
      }
    ]
  },
  {
    id: 'feelings-check',
    title: 'Feelings & Mood Check-In',
    subtitle: 'Talk about emotions and what helps',
    description: 'Share how you\'re feeling and what brings comfort',
    icon: '💙',
    color: 'bg-teal-100 hover:bg-teal-200',
    questions: [
      {
        id: 'mood-today',
        type: 'multiple-choice',
        prompt: 'How are you feeling right now?',
        caregiverHint: 'Any feeling is okay. Help them express whatever they\'re experiencing.',
        options: ['Happy', 'Calm', 'A little tired', 'Mixed feelings', 'All feelings are okay'],
        encouragement: ['Thank you for sharing!', 'It\'s good to notice how we feel!', 'All feelings are normal!']
      },
      {
        id: 'comfort-activity',
        type: 'text',
        prompt: 'What is something that helps you feel better when you\'re worried or sad?',
        caregiverHint: 'Could be people, activities, places, or objects. Any comfort source is wonderful.',
        encouragement: ['That sounds very comforting!', 'What a good way to feel better!', 'That\'s wonderful self-care!']
      },
      {
        id: 'gratitude',
        type: 'text',
        prompt: 'What is something that made you smile recently?',
        caregiverHint: 'Help them think of anything positive - could be very small or simple.',
        encouragement: ['That\'s so lovely!', 'What a nice thing to remember!', 'Thank you for sharing that smile!']
      }
    ]
  },
  {
    id: 'picture-talk',
    title: 'Picture & Photo Talk',
    subtitle: 'Discuss images and photos',
    description: 'Look at pictures and share what you see',
    icon: '📸',
    color: 'bg-red-100 hover:bg-red-200',
    questions: [
      {
        id: 'nature-scene',
        type: 'image-prompt',
        prompt: 'Look at this peaceful garden scene. What do you notice that you find pleasant?',
        caregiverHint: 'Help them describe anything they see - colors, plants, feelings the image brings.',
        imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e24057e-e32d-4085-8237-4d536001db75.png',
        encouragement: ['Great observation!', 'I see that too!', 'What a nice thing to notice!']
      },
      {
        id: 'family-photo',
        type: 'text',
        prompt: 'If you have a favorite family photo, what makes it special to you?',
        caregiverHint: 'Help them think of any photo they treasure, or describe what makes photos special.',
        encouragement: ['Photos capture such precious moments!', 'What a special memory!', 'Thank you for sharing that!']
      },
      {
        id: 'seasonal-image',
        type: 'image-prompt',
        prompt: 'Here\'s a cozy autumn scene. What feelings does this bring up for you?',
        caregiverHint: 'Any response about the season, colors, or feelings is wonderful.',
        imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7d5a137c-3820-4bcc-a6d7-d64b8f951b5f.png',
        encouragement: ['Autumn can bring such lovely feelings!', 'What a beautiful season!', 'I can feel that too!']
      }
    ]
  },
  {
    id: 'music-rhythm',
    title: 'Music & Rhythm Moments',
    subtitle: 'Share musical memories',
    description: 'Talk about songs and music you enjoy',
    icon: '🎵',
    color: 'bg-amber-100 hover:bg-amber-200',
    questions: [
      {
        id: 'favorite-song',
        type: 'text',
        prompt: 'Is there a song that always makes you feel good when you hear it?',
        caregiverHint: 'Any song from any time period is perfect. Help them hum or sing if they want to.',
        encouragement: ['What a wonderful song choice!', 'Music has such a special way of touching our hearts!', 'That sounds lovely!']
      },
      {
        id: 'music-memory',
        type: 'text',
        prompt: 'Do you remember learning to sing or play any music when you were younger?',
        caregiverHint: 'Could be school, church, family singing, or any musical memory. All experiences count.',
        encouragement: ['What a special musical memory!', 'Music creates such lasting memories!', 'Thank you for sharing that!']
      },
      {
        id: 'rhythm-activity',
        type: 'multiple-choice',
        prompt: 'When you hear music, what do you like to do?',
        caregiverHint: 'Any way of enjoying music is perfect. Help them think about what feels natural.',
        options: ['Tap my foot', 'Hum along', 'Just listen quietly', 'All ways of enjoying music are wonderful'],
        encouragement: ['That\'s a lovely way to enjoy music!', 'Perfect!', 'Music touches everyone differently!']
      }
    ]
  }
];

export const praiseMessages = [
  'You did wonderfully today! 🌼',
  'Thank you for sharing your thoughts with me! 💙',
  'What a lovely time we\'ve had together! ✨',
  'You\'ve been so thoughtful in your responses! 🌷',
  'I\'ve enjoyed our conversation so much! 💕',
  'You have such wonderful memories to share! 🌟',
  'Thank you for spending this time with me! 🤗',
  'Your answers were so thoughtful and meaningful! 💛'
];

export const getActivityById = (id: string): Activity | undefined => {
  return activities.find(activity => activity.id === id);
};

export const getRandomPraise = (): string => {
  return praiseMessages[Math.floor(Math.random() * praiseMessages.length)];
};
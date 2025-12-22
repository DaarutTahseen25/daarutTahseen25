export const examList = [
  {
    id: 1,
    title: "Qur’an Recitation & Tajwid",
    questions: 33,
    duration: "20 mins",
    date: "15th July, 2025",
    time: "4:00PM",
    status: "start",
    dueDate: "18th July, 2025 ; 4:00PM",
    image: "/quran-recitation.png",
    class: "Beginner Class 1",
    courseName: "Qur'an Recitation & Tajwid",
    isClosed: false,
    instructions: [
      "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
      "You must not leave the exam page once started. Doing so may auto-submit your answers",
      "Before starting, ensure your internet connection is stable.",
      'By clicking Start Exam, you agree to the DaarutTahseen exam honor code "I will complete this test truthfully and without assistance."',
    ],
  },
  {
    id: 2,
    title: "Arabic Alphabet Phonetic",
    questions: 10,
    duration: "15 mins",
    date: "15th July, 2025",
    time: "4:00PM",
    status: "submitted",
    image: "/arabic-alphabet.png",
    class: "Beginner Class 1",
    courseName: "Arabic Alphabet Phonetic",
    isClosed: false,
    score: 80,
    dateMarked: "9th July, 2025",
    remark: "Excellent recitation and clear pronunciation. Keep it up!",
    instructions: [
      "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
      "You must not leave the exam page once started. Doing so may auto-submit your answers",
    ],
  },
  {
    id: 3,
    title: "Basic Islamic Manners",
    questions: 10,
    duration: "15 mins",
    date: "15th July, 2025",
    time: "4:00PM",
    status: "submitted",
    image: "/basic-islamic.png",
    class: "Beginner Class 1",
    courseName: "Basic Islamic Manners",
    score: 75,
    dateMarked: "10th July, 2025",
    remark: "Good understanding of the concepts.",
    instructions: [
      "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
      "You must not leave the exam page once started. Doing so may auto-submit your answers",
    ],
  },
  {
    id: 4,
    title: "Stories of the Prophet",
    questions: 10,
    duration: "15 mins",
    date: "15th July, 2025",
    time: "4:00PM",
    status: "submitted",
    image: "/prophets-stories.png",
    class: "Beginner Class 1",
    courseName: "Stories of the Prophet",
    isClosed: false,
    score: 90,
    dateMarked: "11th July, 2025",
    remark: "Outstanding performance!",
    instructions: [
      "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
      "You must not leave the exam page once started. Doing so may auto-submit your answers",
    ],
  },
  {
    id: 5,
    title: "Short Surahs Memorization",
    questions: 5,
    duration: "10 mins",
    date: "20th July, 2025",
    time: "2:00PM",
    status: "start",
    dueDate: "22nd July, 2025 ; 2:00PM",
    image: "/quran-recitation.png",
    class: "Beginner Class 1",
    courseName: "Short Surahs Memorization",
    isClosed: false,
    instructions: [
      "Recite the assigned surahs clearly",
      "Ensure audio quality is clear",
    ],
  },
  {
    id: 6,
    title: "Makharij Practice",
    questions: 20,
    duration: "15 mins",
    date: "10th July, 2025",
    time: "3:00PM",
    status: "missed",
    image: "/arabic-alphabet.png",
    class: "Beginner Class 2",
    courseName: "Qur'an Recitation & Tajwid",
    isClosed: true,
    instructions: ["Practice articulation points", "Record your recitation"],
  },
  {
    id: 7,
    title: "Grammar Rules Quiz",
    questions: 15,
    duration: "12 mins",
    date: "5th July, 2025",
    time: "1:00PM",
    status: "start",
    image: "/basic-islamic.png",
    class: "Beginner Class 2",
    courseName: "Introduction to Nahw (Grammar)",
    isClosed: true,
    instructions: [
      "Answer questions about Arabic grammar",
      "No references allowed",
    ],
  },
  {
    id: 8,
    title: "Islamic Etiquette Assignment",
    questions: 8,
    duration: "20 mins",
    date: "28th July, 2025",
    time: "5:00PM",
    status: "start",
    dueDate: "30th July, 2025 ; 5:00PM",
    image: "/prophets-stories.png",
    class: "Beginner Class 2",
    courseName: "Basic Islamic Manners",
    isClosed: false,
    instructions: [
      "Write about Islamic etiquette in daily life",
      "Provide real-life examples",
    ],
  },
];
export const courses = [
  {
    id: 1,
    name: "Qur'an Recitation & Tajwid",
    chapters: [
      "Introduction to Tajwid",
      "Makharij (Articulation Points)",
      "Rules of Noon & Meem",
      "Madd & Lengthening Rules",
      "Practice & Recitation",
    ],
    progress: 70,
    score: 80,
    status: "In progress",
    numberofchapters: 5,
    lectures: 30,
    image: "/quran-recitation.png",
    class: "Beginner Class 2",
    assignments: [
      {
        id: 1,
        title: "Qur’an Recitation & Tajwid",
        questions: 33,
        duration: "20 mins",
        date: "15th July, 2025",
        time: "4:00PM",
        dueDate: "18th July, 2025 ; 4:00PM",
        image: "/quran-recitation.png",
        class: "Beginner Class 1",
        courseName: "Qur'an Recitation & Tajwid",
        instructions: [
          "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
          "You must not leave the exam page once started. Doing so may auto-submit your answers",
          "Before starting, ensure your internet connection is stable.",
          'By clicking Start Exam, you agree to the DaarutTahseen exam honor code "I will complete this test truthfully and without assistance."',
        ],
        isClosed: false,
        submittedBy: [
          {
            name: "Abdullahi Yusuf",
            date: "2024-10-05",
            time: "3:00PM",
            score: null,
            remarks: null,
            image: "/test4.png",
          },
          {
            name: "Ridwanulloh Fawwaz",
            date: "2024-10-06",
            time: "10:00AM",
            score: null,
            remarks: null,
            image: "/test3.png",
          },
        ],
      },
    ],
    exams: [],
    students: [],
  },
  {
    id: 2,
    name: "Arabic Alphabet Phonetic",
    chapters: [
      "Introduction to Tajwid",
      "Makharij (Articulation Points)",
      "Rules of Noon & Meem",
      "Madd & Lengthening Rules",
      "Practice & Recitation",
    ],
    progress: 70,
    score: 80,
    status: "In progress",
    numberofchapters: 5,
    lectures: 30,
    image: "/arabic-alphabet.png",
    class: "Beginner Class 1",
    assignments: [
      {
        id: 2,
        title: "Arabic Alphabet Phonetic",
        questions: 10,
        duration: "15 mins",
        date: "15th July, 2025",
        time: "4:00PM",
        image: "/arabic-alphabet.png",
        class: "Beginner Class 1",
        courseName: "Arabic Alphabet Phonetic",
        score: 80,
        dateMarked: "9th July, 2025",
        remark: "Excellent recitation and clear pronunciation. Keep it up!",
        instructions: [
          "Ensure your environment is quiet and your microphone works properly (for oral recitation questions)",
          "You must not leave the exam page once started. Doing so may auto-submit your answers",
        ],
        isClosed: true,
        submittedBy: [
          {
            name: "Muhammad Jum'ah",
            date: "2024-10-03",
            time: "2:00PM",
            score: 78,
            remarks: "Good effort, but room for improvement.",
            image: "/test4.png",
          },
          {
            name: "Bello AbdulQuddus",
            date: "2024-10-04",
            time: "1:00PM",
            score: 85,
            remarks: "Well done on the pronunciation.",
            image: "/test1.png",
          },
          {
            name: "Maryam Isiaq",
            date: "2024-10-05",
            time: "11:00AM",
            score: 90,
            remarks: "Excellent work!",
            image: "/test5.png",
          },
        ],
      },
    ],
    exams: [],
    students: ["Muhammad", "Yusuf"],
  },
  {
    id: 3,
    name: "Basic Islamic Manners",
    chapters: [
      "Introduction to Tajwid",
      "Makharij (Articulation Points)",
      "Rules of Noon & Meem",
      "Madd & Lengthening Rules",
    ],
    progress: 70,
    score: 80,
    status: "In progress",
    numberofchapters: 5,
    lectures: 30,
    image: "/basic-islamic.png",
    class: "Beginner Class 3",
    assignments: [
      {
        id: 3,
        title: "Basic Islamic Manners",
        questions: 10,
        duration: "15 mins",
        date: "20th July, 2025",
        time: "10:00AM",
        dueDate: "25th July, 2025 ; 10:00AM",
        image: "/basic-islamic.png",
        class: "Beginner Class 1",
        courseName: "Basic Islamic Manners",
        instructions: [
          "Answer all questions related to Islamic etiquette",
          "Provide examples from daily life where applicable",
        ],
        isClosed: false,
        submittedBy: [
          {
            name: "Maryam Isiaq",
            date: "2024-10-20",
            time: "9:00AM",
            score: null,
            remarks: null,
            image: "/test5.png",
          },
        ],
      },
    ],
    exams: [],
    students: [],
  },
  {
    id: 4,
    name: "Short Surah Memorization",
    chapters: [
      "Introduction to Tajwid",
      "Makharij (Articulation Points)",
      "Rules of Noon & Meem",
      "Madd & Lengthening Rules",
      "Practice & Recitation",
    ],
    progress: 70,
    score: 80,
    status: "In progress",
    numberofchapters: 5,
    lectures: 30,
    image: "/short-surah.png",
    class: "Beginner Class 1",
    assignments: [
      {
        id: 4,
        title: "Short Surah Memorization",
        questions: 5,
        duration: "30 mins",
        date: "22nd July, 2025",
        time: "2:00PM",
        dueDate: "28th July, 2025 ; 2:00PM",
        image: "/short-surah.png",
        class: "Beginner Class 1",
        courseName: "Short Surah Memorization",
        instructions: [
          "Memorize and recite the assigned surahs",
          "Record your recitation for submission",
        ],
        isClosed: false,
        submittedBy: [],
      },
    ],
    exams: [],
    students: [],
  },
  {
    id: 5,
    name: "Stories of the Prophet",
    chapters: [
      "Introduction to Tajwid",
      "Makharij (Articulation Points)",
      "Rules of Noon & Meem",
      "Madd & Lengthening Rules",
    ],
    progress: 100,
    score: 90,
    status: "In progress",
    numberofchapters: 5,
    lectures: 30,
    image: "/prophets-stories.png",
    class: "Beginner Class 1",
    assignments: [
      {
        id: 5,
        title: "Stories of the Prophet",
        questions: 12,
        duration: "20 mins",
        date: "18th July, 2025",
        time: "11:00AM",
        dueDate: "23rd July, 2025 ; 11:00AM",
        image: "/prophets-stories.png",
        class: "Beginner Class 1",
        courseName: "Stories of the Prophet",
        instructions: [
          "Write a summary of the assigned prophetic stories",
          "Include lessons learned from each story",
        ],
        isClosed: true,
        submittedBy: [
          {
            name: "Abdullahi Yusuf",
            date: "2024-10-18",
            time: "10:30AM",
            score: 95,
            remarks: "Excellent understanding and presentation",
            image: "/test4.png",
          },
          {
            name: "Muhammad Jum'ah",
            date: "2024-10-19",
            time: "9:00AM",
            score: 88,
            remarks: "Good work, keep it up",
            image: "/test4.png",
          },
          {
            name: "Bello AbdulQuddus",
            date: "2024-10-19",
            time: "2:00PM",
            score: 92,
            remarks: "Well written and insightful",
            image: "/test1.png",
          },
        ],
      },
    ],
    exams: [],
    students: [],
  },
];

export const levels = [
  {
    id: 1,
    title: "beginner",
    description:
      "Start your Qur’anic journey from the Basics: Perfect for those new to Arabic and Islamic studies, the Beginner Course builds a strong foundation in Qur’an recitation, Arabic letters and grammar, Islamic manners, short surah memorization, and essential beliefs. You'll also explore the life of the Prophet ﷺ, basic hadith, and daily Islamic practices, all at a gentle pace to prepare you for higher levels.",
    color: "cream",
  },
  {
    id: 2,
    title: "intermediate",
    description:
      "Strengthen Your Knowledge & Language Skills: Ideal for students with a basic foundation. The Intermediate Course dives deeper into Qur’anic tafsīr, Arabic grammar and morphology, hadith sciences, and Islamic jurisprudence. You'll refine your Tajwīd, study Aqeedah in depth, practice Arabic conversation, and build confidence for advanced Islamic studies.",
    color: "primary",
  },
  {
    id: 3,
    title: "advanced",
    description:
      "Master the Qur’an and Deepen Your Islamic Knowledge:- Designed for dedicated learners, the Advanced Course focuses on high-level Qur’an memorization and Tajwīd, deep Tafsīr and Hadith analysis, advanced Arabic grammar and writing, as well as Aqeedah refutation and public speaking. It equips students for leadership, da'wah, and advanced Islamic engagement.",
    color: "accent",
  },
];

export const CLASSES_DATA = [
  {
    id: 1,
    thumbnail: "/quran-recitation.png",
    title: "Qur’an Recitation & Tajwid",
    tutor: "By Abdulmalik Ahmad",
    date: "15th July, 2025 ;",
    time: "2:00PM",
    timeLeft: "2 min",
    color: "#D32F2F",
  },
  {
    id: 2,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics",
    tutor: "By Ibrahim Lawal",
    date: "15th July, 2025 ;",
    time: "4:00PM",
    timeLeft: "2 hrs",
    color: "#009688",
  },
];

// Static test management data
export const TEST_TABS = ["Create Test", "View Test"];

export const QUESTION_TYPES = [
  { id: "multiple", label: "Multiple Choice", icon: "CheckSquare" },
  { id: "truefalse", label: "True/False", icon: "CheckSquare" },
  { id: "short", label: "Short Answer", icon: "Type" },
  { id: "essay", label: "Essay", icon: "FileEdit" },
];

export const QUESTION_TYPE_LABELS = {
  multiple: "Multiple Choice",
  truefalse: "True/False",
  short: "Short Answer",
  essay: "Essay",
};

export const QUESTION_TYPE_BADGE_COLORS = {
  multiple: "bg-blue-100 text-blue-700",
  truefalse: "bg-red-100 text-red-700",
  short: "bg-purple-100 text-purple-700",
  essay: "bg-green-100 text-green-700",
};

export const TEST_SUBJECTS = [
  "Arabic Language",
  "English Language",
  "Mathematics",
  "Islamic Studies",
];

export const TEST_LEVELS = [
  "Arabic Language",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const SAMPLE_TESTS = [
  {
    id: 1,
    title: "Arabic Language Proficiency Test",
    tags: [
      { label: "Intermediate", className: "bg-teal-100 text-teal-700" },
      { label: "Arabic", className: "bg-blue-100 text-blue-700" },
      { label: "Active", className: "bg-green-100 text-green-700" },
    ],
    stats: { questions: 25, duration: "45 minutes", attempts: 156, avg: "75%" },
  },
  {
    id: 2,
    title: "Quran Recitation Assessment",
    tags: [
      { label: "Advanced", className: "bg-blue-100 text-blue-700" },
      { label: "Quran", className: "bg-purple-100 text-purple-700" },
      { label: "Active", className: "bg-green-100 text-green-700" },
    ],
    stats: { questions: 15, duration: "55 minutes", attempts: 150, avg: "92%" },
  },
  {
    id: 3,
    title: "Islamic Studies Foundation",
    tags: [
      { label: "Beginner", className: "bg-teal-100 text-teal-700" },
      { label: "Islamic Studies", className: "bg-orange-100 text-orange-700" },
      { label: "Draft", className: "bg-pink-100 text-pink-700" },
    ],
    stats: { questions: 20, duration: "35 minutes", attempts: 256, avg: "88%" },
  },
  {
    id: 4,
    title: "Arabic Language Proficiency Test",
    tags: [
      { label: "Intermediate", className: "bg-teal-100 text-teal-700" },
      { label: "Arabic", className: "bg-blue-100 text-blue-700" },
      { label: "Active", className: "bg-green-100 text-green-700" },
    ],
    stats: { questions: 25, duration: "45 minutes", attempts: 156, avg: "75%" },
  },
  {
    id: 5,
    title: "Quran Recitation Assessment",
    tags: [
      { label: "Advanced", className: "bg-blue-100 text-blue-700" },
      { label: "Quran", className: "bg-purple-100 text-purple-700" },
      { label: "Active", className: "bg-green-100 text-green-700" },
    ],
    stats: { questions: 15, duration: "55 minutes", attempts: 150, avg: "92%" },
  },
];

export const trustedItems = [
  {
    image: "/Verified courses.png",
    name: "verified courses",
    figure: "50+",
  },
  {
    image: "/tutor.png",
    name: "qualified tutors",
    figure: "80+",
  },
  {
    image: "/student.png",
    name: "active students",
    figure: "1200+",
  },
  {
    image: "/authentic.png",
    name: "Based on Authentic Qur’an & Sunnah",
  },
];

export const classesData = [
  {
    id: 1,
    thumbnail: "/quran-recitation.png",
    title: "Qur'an Recitation & Tajwid",
    chapter: "Chapter 1: Introduction to Tajwid",
    Author: "By Abdulmalik Ahmad",
    Date: "15th July, 2025 : 2:00PM",
    time: "2 mins left",
    button: {
      label: "Start",
    },
  },
  {
    id: 2,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics",
    chapter: "Chapter 1: Orientation to Arabic Script",
    Author: "By Ibrahim Lawal",
    Date: "15th July, 2025 : 4:00PM",
    time: "2 hrs left",
    button: {
      label: "Start",
    },
  },
  {
    id: 3,
    thumbnail: "/basic-islamic.png",
    title: "Basic Islamic Manners",
    chapter: "Chapter 1: Personal Manners",
    Author: "By Ismail Mahmud",
    Date: "16th July, 2025 : 8:00AM",
    time: "18 hrs left",
    button: {
      label: "Start",
    },
  },
  {
    id: 4,
    thumbnail: "/short-surah.png",
    title: "Short Surah Memorization",
    chapter: "Chapter 1: Surah Al-Fatihah",
    Author: "By Muhanned Suleiman",
    Date: "16th July, 2025 : 12:00PM",
    time: "22 hrs left",
    button: {
      label: "Start",
    },
  },
  {
    id: 5,
    thumbnail: "/prophets-stories.png",
    title: "Stories of the Prophet",
    chapter: "Chapter 1: Introduction",
    Author: "By Saliu Lukman",
    Date: "17th July, 2025 : 10:00AM",
    time: "1day 20hrs left",
    button: {
      label: "Start",
    },
  },
  {
    id: 6,
    thumbnail: "/quran-recitation.png",
    title: "Qur'an Recitation & Tajwid",
    chapter: "Chapter 2: Makharij (Articulation Points)",
    Author: "By Abdulmalik Ahmad",
    Date: "14th July, 2025 : 4:00PM",
    time: "Completed",
    button: {
      label: "View",
    },
  },
  {
    id: 7,
    thumbnail: "/arabic-alphabet.png",
    title: "Arabic Alphabet & Phonetics",
    chapter: "Chapter 2: Arabic Alphabet Overview",
    Author: "By Ibrahim Lawal",
    Date: "14th July, 2025 : 12:00AM",
    time: "Completed",
    button: {
      label: "View",
    },
  },
  {
    id: 8,
    thumbnail: "/basic-islamic.png",
    title: "Basic Islamic Manners",
    chapter: "Chapter 2: Manners with Family and ",
    Author: "By Ismail Mahmud",
    Date: "13th July, 2025 : 2:00PM",
    time: "Completed",
    button: {
      label: "View",
    },
  },
  {
    id: 9,
    thumbnail: "/short-surah.png",
    title: "Short Surah Memorization",
    chapter: "Chapter 2: Surah Al-Ikhlas",
    Author: "By Muhammed Suleiman",
    Date: "13th July, 2025 : 8:00AM",
    time: "Completed",
    button: {
      label: "View",
    },
  },
];

export const courseClasses = [
  {
    name: "Beginner Class 1",
    code: "B1",
    bgColor: "bg-[#E8F5F1]",
    iconBg: "bg-[#B2DFDB]",
    iconColor: "text-[#009688]",
    borderColor: "border-[#E0E0E0]",
  },
  {
    name: "Beginner Class 2",
    code: "B2",
    bgColor: "bg-[#EFEBE9]", // Light brown/grey
    iconBg: "bg-[#D7CCC8]",
    iconColor: "text-[#5D4037]",
    borderColor: "border-[#D7CCC8]",
  },
  {
    name: "Beginner Class 3",
    code: "B3",
    bgColor: "bg-[#FFEBEE]", // Light pink
    iconBg: "bg-[#FFCDD2]",
    iconColor: "text-[#C62828]",
    borderColor: "border-[#FFCDD2]",
  },
  {
    name: "Beginner Class 4",
    code: "B4",
    bgColor: "bg-[#F3E5F5]", // Light purple
    iconBg: "bg-[#E1BEE7]",
    iconColor: "text-[#8E24AA]",
    borderColor: "border-[#E1BEE7]",
  },
];

export const students = [
  {
    id: 1,
    name: "Abdullahi Yusuf",
    progress: 70,
    score: 80,
    status: "In progress",
    image: "/test4.png",

    exams: [
      { topic: "Makharij Test", date: "2024-09-10", score: 75 },
      { topic: "Tajwid Basics Exam", date: "2024-10-02", score: 82 },
    ],

    assignments: [
      {
        topic: "Noon & Meem Rules Practice",
        date: "2024-09-05",
        score: 78,
        fileName: "file.pdf",
      },
      {
        topic: "Tajwid Recitation Recording",
        date: "2024-10-04",
        score: 85,
        audioFile: "tajwid-recording.mp3",
      },
    ],
    class: "Beginner Class 3",
  },

  {
    id: 2,
    name: "Muhammad Jum'ah",
    progress: 70,
    score: 80,
    status: "In progress",
    image: "/test4.png",

    exams: [
      { topic: "Alphabet Recognition", date: "2024-08-18", score: 72 },
      { topic: "Makharij Basics", date: "2024-09-29", score: 80 },
    ],

    assignments: [
      {
        topic: "Letter Pronunciation Practice",
        date: "2024-08-20",
        score: 70,
        fileName: "letter-pronunciation.pdf",
      },
      {
        topic: "Makharij Worksheet",
        date: "2024-09-10",
        score: 78,
        fileName: "makharij-work.pdf",
      },
    ],
    class: "Beginner Class 1",
  },

  {
    id: 3,
    name: "Maryam Isiaq",
    progress: 70,
    score: 80,
    status: "In progress",
    image: "/test5.png",

    exams: [{ topic: "Manners Test", date: "2024-09-03", score: 90 }],

    assignments: [
      {
        topic: "Islamic Etiquettes Notes",
        date: "2024-08-15",
        score: 95,
        fileName: "manners-notes.pdf",
      },
    ],
    class: "Beginner Class 2",
  },

  {
    id: 4,
    name: "Ridwanulloh Fawwaz",
    progress: 100,
    score: 80,
    status: "In progress",
    image: "/test3.png",

    exams: [
      { topic: "Surah Memorization Test", date: "2024-10-01", score: 88 },
    ],

    assignments: [
      {
        topic: "Surah Al-Falaq Recitation",
        date: "2024-09-15",
        score: 92,
        audioFile: "falaq-recitation.mp3",
      },
    ],
    class: "Beginner Class 3",
  },

  {
    id: 5,
    name: "Bello AbdulQuddus",
    progress: 100,
    score: 90,
    status: "In progress",
    image: "/test2.png",

    exams: [
      { topic: "Surah Memorization Test", date: "2024-10-01", score: 88 },
    ],

    assignments: [
      {
        topic: "Surah Al-Falaq Recitation",
        date: "2024-09-15",
        score: 92,
        audioFile: "falaq-recitation.mp3",
      },
    ],
    class: "Beginner Class 1",
  },

  {
    id: 6,
    name: "Abdullahi AbdulAzeez",
    progress: 100,
    score: 90,
    status: "In progress",
    image: "/test1.png",

    exams: [{ topic: "Seerah Test", date: "2024-09-22", score: 94 }],

    assignments: [
      {
        topic: "Stories Summary",
        date: "2024-09-01",
        score: 96,
        fileName: "prophet-stories-summary.pdf",
      },
    ],
    class: "Beginner Class 4",
  },
];

export const users = [
  {
    name: 'Aristotle',
    department: 'philosophers'
  },
  {
    name: 'Confucius',
    department: 'philosophers'
  },
  {
    name: 'Karl Marx ',
    department: 'philosophers'
  },
  {
    name: 'Plato',
    department: 'philosophers'
  },
]

const getTotalUsers = (id) => users.filter(u => u.department === id).length;

export const departments = [
  {
    id: 'philosophers',
    label: 'Philosopers',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('philosophers')
  },

]

export const finalQuestions = [
  {
    id: 1,
    label: "1) What is the “Goal “stated in our HSE Policy",
    correctAnswers: 12,
    choices: [
      {
        id: 11,
        label: "Safety and environmental responsibility are core values at Linde and integral in all that we do",

      },
      {
        id: 12,
        label: " At Linde we are driven to ensure no harm comes from our actions to people, the environment or the communities in which we operate",

      },
      {
        id: 13,
        label: "Compliance with applicable laws, regulations and Linde policies is a licence to operate for our employees, contractors, suppliers and partners",
      },
      {
        id: 14,
        label: "All above",

      }

    ]
  }
]

import { v4 as uuidv4 } from 'uuid';
export const data = [
  {
    id: '1',
    Code: '#12345',
    Flag: 'Desenvolvimento',
    Task: 'Criar Layout novo',
    Project: 'Company',
    Description: 'Usar a branch master, fazer pull, após isso...',
    Time_Foreseen: '00:30',
    Time_Balance: '+00:30',
    Situation: 'Em dia',
    Team: [
      { member: 'AS'},
      { member: 'PH'},
      { member: 'WC'}
    ],
    Due_Date: '2021-01-30',
  },
  {
    id: '2',
    Code: '#12345',
    Flag: 'Ux',
    Task: 'Criar Layout novo',
    Project: 'Company',
    Description: 'Usar a branch master, fazer pull, após isso',
    Time_Foreseen: '00:30',
    Time_Balance: '+00:30',
    Situation: 'Em dia',
    Team: [
      { member: 'AS'},
      { member: 'PH'},
      { member: 'WC'}
    ],
    Due_Date: '2021-01-30',
  },
  {
    id: '3',
    Code: '#12345',
    Flag: 'Ux',
    Task: 'Criar Layout novo',
    Project: 'Company',
    Description: 'Usar a branch master, fazer pull, após isso',
    Time_Foreseen: '00:30',
    Time_Balance: '+00:30',
    Situation: 'Em dia',
    Team: [
      { member: 'AS'},
      { member: 'PH'},
      { member: 'WC'}
    ],
    Due_Date: '2021-01-30',
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: 'Backlog',
    items: data,
  },
  [uuidv4()]: {
    title: 'Em Desenvolvimento',
    items: [],
  },
  [uuidv4()]: {
    title: 'Pendência',
    items: [],
  },
  [uuidv4()]: {
    title: 'Finalizado',
    items: [],
  },
  [uuidv4()]: {
    title: 'Outros',
    items: [],
  }
};

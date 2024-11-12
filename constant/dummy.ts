export const dummyUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'offline',
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'online',
  },
];

export const dummyGroups = [
  {
    id: '1',
    name: 'Project Team',
    description: 'Team discussion group',
    members: ['1', '2', '3'],
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '2',
    name: 'Family',
    description: 'Family group chat',
    members: ['1', '2'],
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export const dummyChats = [
  {
    id: '1',
    senderId: '1',
    receiverId: '2',
    message: 'Hey, how are you?',
    timestamp: '2023-07-20T10:30:00Z',
    read: true,
  },
  {
    id: '2',
    senderId: '2',
    receiverId: '1',
    message: "I'm good, thanks! How about you?",
    timestamp: '2023-07-20T10:31:00Z',
    read: true,
  },
  {
    id: '3',
    senderId: '1',
    receiverId: '2',
    message: 'Doing great! Want to catch up later?',
    timestamp: '2023-07-20T10:32:00Z',
    read: false,
  },
  {
    id: '4',
    senderId: '3',
    receiverId: '1',
    message: 'Did you check the project updates?',
    timestamp: '2023-07-20T11:00:00Z',
    read: false,
  },
];

export interface MessageData {
  avatar?: string;
  isSender?: boolean;
  isVerified?: boolean;
  fullName?: string;
  id?: string | number;
  lastMessage?: string;
  date?: string;
  unreadCount?: string | number;
  isReceiver?: boolean;
  isVoiceNote?: boolean;
  isPhoto?: boolean;
  isVideo?: boolean;
  firstname?: string;
  lastname?: string;
  nickname?: string;
  ownerId?: string | number;
  receiverId?: string | number;
}

let MessagesData: MessageData[];
MessagesData = [
  {
    id: 1,
    avatar: "images/img15.jpg",
    firstname: "Gabriel",
    lastname: "Delght",
    nickname: "deli_d",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
  {
    id: 2,
    avatar: "images/img13.jpg",
    firstname: "Mike",
    lastname: "Charles",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: false,
    nickname: "petty",
    isPhoto: false,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 0,
  },
  {
    id: 3,
    avatar: "images/img3.jpg",
    firstname: "Sam",
    lastname: "Doe",
    nickname: "deli_d",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 4,
  },
  {
    id: 4,
    avatar: "images/img2.jpg",
    firstname: "Wills",
    lastname: "Cigs",
    nickname: "deli_d",
    date: "01:20",
    isSender: false,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
  {
    id: 5,
    avatar: "images/img11.jpg",
    firstname: "Treyys",
    lastname: "Mutss",
    nickname: "deli_d",
    isSender: true,
    date: "01:20",
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },

  //   &&&&&&&&&&&&7
  {
    id: 6,
    avatar: "images/img15.jpg",
    firstname: "Gabriel",
    lastname: "Delght",
    nickname: "deli_d",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
  {
    id: 7,
    avatar: "images/img13.jpg",
    firstname: "Mike",
    lastname: "Charles",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: false,
    nickname: "petty",
    isPhoto: false,
    isVideo: false,
    isVoiceNote: true,
    unreadCount: 7,
  },
  {
    id: 8,
    avatar: "images/img3.jpg",
    firstname: "Sam",
    lastname: "Doe",
    nickname: "deli_d",
    lastMessage: "Hello this is cool",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
  {
    id: 9,
    avatar: "images/img2.jpg",
    firstname: "Wills",
    lastname: "Cigs",
    nickname: "deli_d",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
  {
    id: 10,
    avatar: "images/img11.jpg",
    firstname: "Treyys",
    lastname: "Mutss",
    nickname: "deli_d",
    date: "01:20",
    isSender: true,
    isVerified: true,
    isPhoto: true,
    isVideo: false,
    isVoiceNote: false,
    ownerId: "sdysuy333",
    receiverId: "3i74387sdhgfdg346",
    unreadCount: 7,
  },
];

export default MessagesData;

import React from "react";
import { ChatDataTypes } from "../types/ChatDataTypes";

const ChatData: ChatDataTypes[] = [
  {
    id: 1,
    chatType: "video",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/img11.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 1,
    poster: "/images/p1.jpg",
    video: "/video/video1.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },
  {
    id: 2,
    chatType: "image",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/p1.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: !true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },
  {
    id: 3,
    chatType: "file",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/p1.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: !false,
    isSender: true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },

  {
    id: 4,
    chatType: "image",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/p1.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 4,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: false,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },

  {
    id: 5,
    chatType: "story",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/p1.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },

  {
    id: 6,
    chatType: "vn",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/img10.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: !true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },

  {
    id: 7,
    chatType: "deleted",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/img10.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: !true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },

  {
    id: 8,
    chatType: "vn",
    senderName: "Winnnii",
    receiverName: "Mike",
    senderId: "w736287",
    ownerAvatar: "/images/img10.jpg",
    receiverId: "w736287",
    caption: "Cv_delight_.zip",
    image1: "/images/img11.jpg",
    image2: "/images/img4.jpg",
    image3: "/images/img10.jpg",
    image4: "/images/img15.jpg",
    image5: "/images/p1.jpg",
    imageLength: 2,
    poster: "/images/p1.jpg",
    video: "/video/video2.mp4",
    audio: "/audios/audio.mp3",
    audioTimer: 33.5,
    isLiked: false,
    hasReply: false,
    isSender: true,
    date: `${new Date().toLocaleDateString()}`,
    storyData: {
      id: "1",
      image: "/images/img10.jpg",
      storyCaption: "Hello I so much love this to be honest you have done well",
      storyType: "image",
    },
  },
];
export default ChatData;
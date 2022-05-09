import { USERS } from './users'

export const POSTS = [
  {
    imageUrl: 'https://assets.telegraphindia.com/telegraph/2020/Dec/1608757890_1601670696_03nbldhr_4.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Bihar. Train Ride to Bihar. Train Ride to Darjeeling. Train Ride to Bihar. Train Ride to Bihar.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'Guddu',
        comment: 'Wow! great to hear. Let us go together next bro. We will have fun'
      },
      {
        user: 'Chiku',
        comment: 'No! do not go there. Let us go together next bro. We will have fun'
      },
    ]
  },
  {
    imageUrl: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/160996258_101233122061076_4303841241648054662_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=7l5V7gwbf2wAX93MdSZ&_nc_ht=scontent-sjc3-1.xx&oh=00_AT9qfOclsbrWE9RC0MCdAbZx3eMAOzbDaNNnvqAcItbAVQ&oe=6299B7D8',
    user: USERS[3].user,
    likes: 7870,
    caption: 'My guru! Jai Shree Ram.',
    profile_picture: USERS[3].image,
    comments: [
      {
        user: 'smitcontractor',
        comment: 'Jai Shree Ram :)'
      },
      {
        user: 'jennypatel',
        comment: 'JSR'
      },
    ]
  }
]

export const POST_FOOTER = [
  {
    footerIcon: 'Like',
    iconUrl: 'https://img.icons8.com/fluency-systems-regular/60/FFFFFF/like--v2.png',
    likedIconUrl: 'https://img.icons8.com/fluency-systems-regular/60/FF0000/like--v2.png'
  },
  {
    footerIcon: 'Comment',
    iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/quote.png'
  },
  {
    footerIcon: 'Share',
    iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/share.png'
  },
  {
    footerIcon: 'Save',
    iconUrl: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/save.png'
  }
]
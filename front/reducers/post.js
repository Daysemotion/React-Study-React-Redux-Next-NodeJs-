export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫  번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://dummyimage.com/600x400/000/0011ff',
        },
        { src: 'https://dummyimage.com/600x400/d950d9/ffffff' },
        { src: 'https://dummyimage.com/600x400/c2c2c2/ffffff' },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '안녕하세요',
        },
        {
          User: {
            nickname: 'hwan',
          },
          content: '하이',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터입니다',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;

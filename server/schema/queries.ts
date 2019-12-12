import commentQueries from './comment/commentQueries';
import meQueries from './me/meQueries';
import postQueries from './post/postQueries';
import userQueries from './user/userQueries';

export default {
  ...commentQueries,
  ...meQueries,
  ...postQueries,
  ...userQueries,
};

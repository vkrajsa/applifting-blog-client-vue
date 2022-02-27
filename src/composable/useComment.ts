import { computed, ref } from 'vue';
import store from '@/store/index';
import { PostComment } from '../types/comment';
import { ArticleList, ArticleDetail } from '../types/article';
import { postComment, postVoteUp, postVoteDown } from '../services/comment';
import { dispatchNotification } from '../utils/notification';

export function useComment() {
  // true voted up, false voted down
  // TODO: how to handle if user refreshes the browser and is not registered ?
  // SOLUTION: tell user he already voted if there is null and commentScore doesnt update

  const upVoted = ref<null | boolean>(null);
  const commentScore = ref();

  async function postVote(value: string, id: string) {
    try {
      if (value === 'up') {
        const response = await postVoteUp(id);
        upVoted.value = true;
        commentScore.value = response.data.score;
      } else {
        const response = await postVoteDown(id);
        upVoted.value = false;
        commentScore.value = response.data.score;
      }
    } catch (error) {
      console.log(error);
      dispatchNotification(error.response.status);
    }
  }

  function initScore(score: number) {
    commentScore.value = score;
  }

  async function addComment(commentData: PostComment) {
    try {
      const response = await postComment(commentData);
      console.log('response: ', response);
    } catch (error) {
      dispatchNotification(error.response.status);
    }
  }

  return { upVoted, postVote, commentScore, initScore, addComment };
}

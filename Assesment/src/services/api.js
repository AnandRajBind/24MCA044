const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/like`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to like post');
    return await response.json();
  } catch (error) {
    console.error('Error liking post:', error);
    throw error;
  }
};

export const fetchComments = async (postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  return response.json();
};

export const getAllData = async () => {
  try {
    const users = await fetchUsers();
    const allPosts = await Promise.all(
      Object.keys(users.users).map(userId => fetchPosts(userId))
    );
    const postsWithComments = await Promise.all(
      allPosts.flat().map(async post => {
        const comments = await fetchComments(post.id);
        return { ...post, commentCount: comments.comments.length };
      })
    );
    return { users: users.users, posts: postsWithComments };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { users: {}, posts: [] };
  }
};

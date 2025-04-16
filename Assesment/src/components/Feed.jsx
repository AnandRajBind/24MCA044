import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  IconButton, 
  Grid,
  CircularProgress,
  Divider
} from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';

const MOCK_POSTS = [
  {
    id: 1,
    username: 'user1',
    content: 'This is a sample post content',
    likes: 15,
    comments: 5,
    timestamp: '2 hours ago',
    userId: 'user1_id',
    imageUrl: 'https://source.unsplash.com/random/400x300'
  },
  {
    id: 2,
    username: 'user2',
    content: 'Another interesting post here',
    likes: 20,
    comments: 8,
    timestamp: '4 hours ago',
    userId: 'user2_id',
    imageUrl: 'https://source.unsplash.com/random/400x300'
  }
];

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // For now using mock data, replace with actual API call
        setPosts(MOCK_POSTS);
        setLoading(false);
      } catch (err) {
        setError('Failed to load posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Social Feed
      </Typography>
      
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2, boxShadow: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                {post.username[0].toUpperCase()}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {post.username}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.timestamp}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="body1" sx={{ mb: 2 }}>
              {post.content}
            </Typography>
            
            <Divider sx={{ my: 1 }} />
            
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <IconButton onClick={() => handleLike(post.id)} color={likedPosts[post.id] ? "primary" : "default"}>
                  {likedPosts[post.id] ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Typography variant="caption" component="span">
                  {post.likes}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <Comment />
                </IconButton>
                <Typography variant="caption" component="span">
                  {post.comments}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton>
                  <Share />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Feed;

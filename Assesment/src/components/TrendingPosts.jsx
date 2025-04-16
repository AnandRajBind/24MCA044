import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrendingPosts = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Trending Posts
      </Typography>
      <Card>
        <CardContent>
          <Typography>Trending posts will go here</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingPosts;

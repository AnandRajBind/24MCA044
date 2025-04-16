import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TopUsers = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Top Users
      </Typography>
      <Card>
        <CardContent>
          <Typography>User content will go here</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopUsers;

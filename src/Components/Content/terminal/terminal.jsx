import React from 'react';
import {
  Card, CardActionArea, CardContent, Typography, CardActions, Button,
} from '@mui/material';
import './terminal.scss';

const Terminal = () => (
  <div style={{ paddingTop: '100px', display: 'flex', justifyContent: 'center' }}>
    <Card
      sx={{
        minWidth: 310, maxWidth: 800, minHeight: 400, maxHeight: 1080,
      }}
    >
      <CardActionArea>
        <div className="top-bar">
          <div className="dots">
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  </div>
);

export default Terminal;

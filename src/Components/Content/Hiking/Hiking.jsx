import React, { useState } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Grid, Typography,
} from '@mui/material';
import {
  ArrowUpward,
  ExpandMore,
  Star,
  Route,
  Whatshot,
  Timer,
} from '@mui/icons-material';
import Rainier from '../../../../public/assets/hiking/rainier.png';

const Hiking = () => {
  const [expanded, setExpanded] = useState();
  const onChange = (option) => {
    if (expanded) setExpanded();
    else setExpanded(option);
  };

  const hikes = [
    {
      name: 'Mount Rainier',
      img: Rainier,
      miles: 10,
      time: '5:17:14',
      elevation: 4465,
      calories: 2827,
      rating: 5.0,
    },
    {
      name: 'Mount Hood',
      img: Rainier,
      miles: 10,
      time: '5:17:14',
      elevation: 4465,
      calories: 2827,
      rating: 5.0,
    },
  ];

  return (
    <div className="hiking">
      <Typography
        className="hiking-title"
        gutterBottom
        variant="h1"
        component="h1"
      >
        Hiking
      </Typography>
      {hikes.map(({
        name, miles, elevation, rating, calories, time, img, title,
      }) => (
        <Accordion
          className="hike"
          key={name}
          expanded={expanded === name}
          onChange={() => onChange(name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className="big-text"
              variant="h1"
              component="h1"
            >
              {name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid className="hike-stats" container spacing={1}>
              <Grid item xs={12} md={6} container spacing={1}>
                <Grid item xs={6}>
                  <div
                    className="hike-square"
                    style={{ flexDirection: 'column' }}
                  >
                    <Typography
                      className="big-text"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Star sx={{ color: 'gold', fontSize: 'inherit' }} />
                      {rating.toFixed(1)}
                    </Typography>
                    <Typography variant="subtitle1" className="small-text">
                      Rating
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="hike-square"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      className="big-text"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <ArrowUpward sx={{ color: 'green', fontSize: 'inherit' }} />
                      {elevation.toLocaleString('en-US')}
                    </Typography>
                    <Typography variant="subtitle1" className="small-text">
                      Feet Gained
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="hike-square"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      className="big-text"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Route sx={{ color: '#338bf8', fontSize: 'inherit' }} />
                      {miles.toFixed(1)}
                    </Typography>
                    <Typography variant="subtitle1" className="small-text">
                      Miles
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div
                    className="hike-square"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      className="big-text"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Whatshot sx={{ color: '#ff9412', fontSize: 'inherit' }} />
                      {calories.toLocaleString('en-US')}
                    </Typography>
                    <Typography variant="subtitle1" className="small-text">
                      Calories Burned
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    className="hike-square"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      className="big-text"
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <Timer sx={{ fontSize: 'inherit' }} />
                      {time}
                    </Typography>
                    <Typography variant="subtitle1" className="small-text">
                      Total Time
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  alt={title}
                  title={title}
                  src={img}
                  style={{
                    borderRadius: '5px',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Grid>

            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Hiking;

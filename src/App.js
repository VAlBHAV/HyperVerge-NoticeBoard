import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Pomodoro from "./component/pomodoro/pomodoro";
import Slides from "./component/slide/slide";
import Player from "./component/player/player";
import Calender from "./component/calender/calender";
import Meet from "./component/meet/meet";
import Poll from "./component/poll/poll";
import Announcement from "./component/announcement/announcement";
import Checklist from "./component/checklist/checklist";
import Time from "./component/time/time";
import IssueTracker from "./component/issuetracker/issuetracker";
import TodoList from "./component/todo/todo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box>
      <Grid xs={12} container spacing={1}>
      <Grid xs={6} container spacing={1}><Announcement /></Grid>
      <Grid xs={3} container spacing={1}><IssueTracker /></Grid>
      <Grid xs={3} container spacing={1}><Meet /></Grid>
      </Grid>
      <Grid xs={12} container spacing={1}>
        <Grid xs={3}><Pomodoro /></Grid>
        <Grid xs={4} container spacing={1}>
          <Grid xs={6}><Time /></Grid>
          <Grid xs={6}><Calender /></Grid>
        </Grid><Slides />
      </Grid>
      <Grid xs={12} container spacing={1}>
      <Grid xs={3} container spacing={1}><TodoList /></Grid>
      <Grid xs={3} container spacing={1}><Poll /></Grid>
      <Grid xs={3} container spacing={1}><Checklist /></Grid>
      <Grid xs={3} container spacing={1}><Player /></Grid>
      </Grid>
    </Box>
  );
}

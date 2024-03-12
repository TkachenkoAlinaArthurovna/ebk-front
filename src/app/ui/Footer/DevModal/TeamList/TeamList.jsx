'use client';

import React from 'react';
import {
  StyledTeamBox,
  TeamBoxTitle,
} from '@/app/ui/Footer/DevModal/TeamList/TeamListStyles';

const TeamList = ({ teamname, members }) => {
  const teamMembers = members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });

  return (
    <StyledTeamBox>
      <TeamBoxTitle variant="h5" teamname={teamname}>
        {teamname} Team
      </TeamBoxTitle>
      <ul>{teamMembers}</ul>
    </StyledTeamBox>
  );
};

export default TeamList;

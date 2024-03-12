'use client';

import { styled, Box, Typography} from '@mui/material';
import getTeamColor from '@/app/lib/getTeamColor';

export const StyledTeamBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 14px;
  padding: 25px;
  background-color: #f4f4f4;

  @media (max-width: 564px) {
    padding: 10px;
  }

  && li {
    margin-left: 15px;
    padding-bottom: 5px;
  }
`;

export const TeamBoxTitle = styled(Typography)(({ teamname }) => ({
  color: getTeamColor(teamname),
  marginBottom: 12,
  fontWeight: 500,
}));
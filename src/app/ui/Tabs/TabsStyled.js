'use client';
import { styled, Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const StyledSection = styled(Box)`
  margin-bottom: 80px;
`;

export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  width: '15%',
  color: theme.palette.primary.main,
  textTransform: 'none',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.main,
  },
}));

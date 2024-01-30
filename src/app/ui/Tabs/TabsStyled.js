'use client';
import { styled, Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { width } from '@mui/system';

export const StyledSection = styled(Box)`
  margin-bottom: 80px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
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
  width: '16%',
  fontSize: '16px',
  color: '#212121',
  textTransform: 'none',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.primary.main,
  },
  '@media (max-width: 1024px)': {
    width: '22%',
  },
  '@media (max-width: 786px)': {
    width: '26%',
  },
  '@media (max-width: 650px)': {
    width: '33.333%',
    fontSize: '14px',
  },
  '@media (max-width: 440px)': {
    padding: '10px',
    fontSize: '12px',
  },
}));

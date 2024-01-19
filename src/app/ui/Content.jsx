import Box from '@mui/system/Box';

const Content = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '1344px',
        height: '100%',
        margin: '0 48px',
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
};

export default Content;

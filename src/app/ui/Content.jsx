import Box from '@mui/system/Box';

const Content = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1344px',
        width: '100%',
        height: '100%',
        padding: '0 48px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default Content;

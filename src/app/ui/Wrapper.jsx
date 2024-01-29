import Box from '@mui/system/Box';

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;

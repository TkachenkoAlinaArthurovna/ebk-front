import Box from '@mui/system/Box';

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;

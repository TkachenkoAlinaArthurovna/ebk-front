import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Content from '@/app/ui/Content';

const Loading = () => {
  return (
    <Content>
      <Skeleton variant="text" sx={{ fontSize: '2rem', width: '450px' }} />
      <div style={{display: 'flex', margin: '20px 0 240x 0'}}>
        <Skeleton variant="rounded" width={200} height={35} />
        <Skeleton variant="rounded" width={200} height={35} />
        <Skeleton variant="rounded" width={200} height={35} />
      </div>
      <Skeleton sx={{margin: '30px'}} variant="rounded" width={400} height={500} />
    </Content>
  );
};
export default Loading;

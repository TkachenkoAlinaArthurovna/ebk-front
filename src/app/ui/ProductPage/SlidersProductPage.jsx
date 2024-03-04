'use client';
import { useEffect, useState } from 'react';
import PageTitle from '@/app/ui/PageTitle';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box } from '@mui/material';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';

const SlidersProductPage = ({ currentProduct }) => {
  const [filteredArr, setFilteredArray] = useState([]);

  useEffect(() => {
    const sessionArr = JSON.parse(sessionStorage.getItem('currentProduct'));
    if (!sessionArr || sessionArr.length === 0) {
      return;
    } else {
      const filterArr = sessionArr.filter(
        (obj) => obj._id !== currentProduct._id,
      );
      setFilteredArray(filterArr); 
    }
  }, []);

  return (
    <div>
      {filteredArr ? filteredArr.map((obj) => <p>{obj.name}</p>) : null}
    </div>
  );

  // <StyledSection as="section">
  //   <Content>
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //       }}
  //     >
  //       <Box sx={{ marginBottom: '24px' }}>
  //         <PageTitle>Схожі товари</PageTitle>
  //       </Box>
  //       <Box>
  //         <Slider
  //           autoplay={false}
  //           spaceBetween="16px"
  //           slidesPerView="4"
  //           pagination={false}
  //           products={true}
  //           prevtype={'reviews'}
  //           nexttype={'reviews'}
  //         />
  //       </Box>
  //     </Box>
  //   </Content>
  // </StyledSection>
};

export default SlidersProductPage;

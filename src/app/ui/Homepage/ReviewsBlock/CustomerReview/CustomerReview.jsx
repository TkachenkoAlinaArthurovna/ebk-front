'use client';

import React, { useState } from 'react';
import ShadowBox from '@/app/ui/ShadowBox';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { createInitials } from '@/app/lib/helpers';
import { Stack } from '@mui/system';
import {
  StyledName,
  StyledDate,
  StyledText,
  StyledCustomerInitials,
  StyledMainContainer,
  StyledWrapper,
  StyledDateWrapper,
  StyledComponentWrapper,
  StyledNameAndInitialsContainer,
  ReviewMenuWrapper,
} from '@/app/ui/Homepage/ReviewsBlock/CustomerReview/CustomerReviewStyles';

const CustomerReview = ({ date, firstName, lastName, text, menu }) => {
  const customerInitials = createInitials(firstName, lastName);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const options = ['Редагувати', 'Видалити'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const reviewMenu = (
    <ReviewMenuWrapper>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </ReviewMenuWrapper>
  );

  return (
    <StyledMainContainer>
      <ShadowBox $padding="8%">
        <StyledComponentWrapper>
          <StyledNameAndInitialsContainer>
            <Stack direction="row" alignItems="center" flexShrink="0">
              <StyledWrapper>
                <StyledCustomerInitials>
                  {customerInitials}
                </StyledCustomerInitials>
              </StyledWrapper>
              <StyledName variant="subtitle1">
                {firstName} {lastName}
              </StyledName>
            </Stack>
            <StyledDateWrapper>
              <StyledDate variant="subtitle2">{date}</StyledDate>
              {reviewMenu}
            </StyledDateWrapper>
          </StyledNameAndInitialsContainer>
          <StyledText variant="body1">{text}</StyledText>
        </StyledComponentWrapper>
      </ShadowBox>
    </StyledMainContainer>
  );
};

export default CustomerReview;

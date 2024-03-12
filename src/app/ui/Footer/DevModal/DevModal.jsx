'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop, Fade } from '@mui/material';
import { closeDevModal } from '@/redux/slices/DevModalSlice';
import TeamList from '@/app/ui/Footer/DevModal/TeamList';
import devList from '@/app/lib/devList';
import {
  StyledModalContent,
  ModalTitle,
  DevelopersListWrapper,
  CloseButton,
  StyledModal,
} from '@/app/ui/Footer/DevModal/DevModalStyles';

const DevModal = () => {
  const dispatch = useDispatch();
  const handleCloseDevModal = () => dispatch(closeDevModal());
  const devModalOpen = useSelector((state) => state.devModal.modalIsOpen);

  const developers = devList.map(({ id, teamname, members }) => {
    return <TeamList key={id} teamname={teamname} members={members} />;
  });

  return (
    <div>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={devModalOpen}
        onClose={handleCloseDevModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={devModalOpen}>
          <StyledModalContent>
            <CloseButton onClick={handleCloseDevModal} />
            <ModalTitle id="transition-modal-title" variant="h5" component="h2">
              Created by:
            </ModalTitle>
            <DevelopersListWrapper>{developers}</DevelopersListWrapper>
          </StyledModalContent>
        </Fade>
      </StyledModal>
    </div>
  );
};

export default DevModal;

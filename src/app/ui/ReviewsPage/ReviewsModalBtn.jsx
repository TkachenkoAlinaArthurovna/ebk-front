'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  StyledBoxModal,
  StyledButtonFirstReview,
  StyledBoxTop,
  StyledTypographyTitle,
  StyledTextFieldComent,
  StyledBoxName,
  StyledTextFieldName,
} from '@/app/ui/ReviewsPage/ReviewsPageStyles';
import { Button, TextField, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PageTitle from '@/app/ui/PageTitle';

export default function ReviewsModalBtn({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBoxModal>
          <StyledBoxTop>
            <StyledTypographyTitle>Написати відгук</StyledTypographyTitle>
            <IconButton onClick={handleClose}>
              <ClearIcon />
            </IconButton>
          </StyledBoxTop>
          <StyledTextFieldComent
            id="outlined-multiline-static"
            label="Ваш коментар"
            multiline
            rows={5}
          />
          <StyledBoxName>
            <StyledTextFieldName
              id="outlined-multiline-flexible"
              label="Ім'я"
              multiline
            />
            <TextField
              sx={{ width: '100%' }}
              id="outlined-multiline-flexible"
              label="Прізвище"
              multiline
            />
          </StyledBoxName>
          <StyledButtonFirstReview fullWidth variant="contained">
            Додати відгук
          </StyledButtonFirstReview>
        </StyledBoxModal>
      </Modal>
    </div>
  );
}

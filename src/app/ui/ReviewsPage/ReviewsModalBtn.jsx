'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  ModalStyles,
  StyledButtonFirstReview,
} from '@/app/ui/ReviewsPage/ReviewsPageStyles';
import { TextField, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function ReviewsModalBtn({ open, handleClose }) {
  return (
    <div>
      <Modal
        component={'form'}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyles}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >
            <Typography
              fontSize={28}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Написати відгук
            </Typography>
            <IconButton onClick={handleClose}>
              <ClearIcon sx={{ width: '32px', height: '32px' }} />
            </IconButton>
          </Box>
          <TextField
            sx={{ width: '100%', marginBottom: '24px' }}
            id="outlined-multiline-static"
            label="Ваш коментар"
            multiline
            rows={5}
          />
          <Box sx={{ display: 'flex', marginBottom: '32px' }}>
            <TextField
              sx={{ width: '100%', marginRight: '32px' }}
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
          </Box>
          <StyledButtonFirstReview fullWidth variant="contained">
            Додати відгук
          </StyledButtonFirstReview>
        </Box>
      </Modal>
    </div>
  );
}

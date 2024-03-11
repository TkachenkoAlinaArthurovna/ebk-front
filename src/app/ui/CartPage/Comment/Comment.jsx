'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import { Field, ErrorMessage } from 'formik';

const Comment = ({ comment, setComment }) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="comment-info"
        aria-controls="comment-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Додати коментар до замовлення</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <Field
          as={TextField}
          label="Коментар"
          placeholder={'Маєте уточнення чи запитання?'}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          name={'comment'}
          spellCheck={false}
        />
        <ErrorMessage
          name={'comment'}
          component={'div'}
          style={{ color: '#dc362e' }}
        />
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default Comment;

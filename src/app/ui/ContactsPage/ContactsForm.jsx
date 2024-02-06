'use client';

import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { StyledButton } from '@/app/ui/ContactsPage/ContactsStyles';

const ContactsForm = () => {
  return (
    <Grid>
      <TextField
        sx={{ mb: 3 }}
        label="Ім'я"
        id="contact-name"
        placeholder="Вкажіть ім'я"
        fullWidth
      />
      <TextField
        sx={{ mb: 3 }}
        label="Email"
        id="contact-email"
        placeholder="Вкажіть email"
        fullWidth
      />
      <TextField
        sx={{ mb: 3 }}
        label="Повідомлення"
        id="contact-message"
        multiline
        rows={4}
        placeholder="Ваше повідомлення"
        fullWidth
      />
      <StyledButton variant="contained" fullWidth>
        Відправити
      </StyledButton>
    </Grid>
  );
};

export default ContactsForm;

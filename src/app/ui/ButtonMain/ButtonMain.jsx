import { StyledButton } from '@/app/ui/ButtonMain/ButtonMainStyles';

const ButtonMain = ({ children, onClick, variant, endIcon }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} endIcon={endIcon}>
      {children}
    </StyledButton>
  );
};

export default ButtonMain;

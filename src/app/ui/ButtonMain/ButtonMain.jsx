import { StyledButton } from '@/app/ui/ButtonMain/ButtonMainStyles';

const ButtonMain = ({
  children,
  onClick,
  variant,
  endIcon,
  startIcon,
  width,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      style={{ width: `${width}` }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonMain;

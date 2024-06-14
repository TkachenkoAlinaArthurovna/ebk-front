import { StyledButton } from '@/app/ui/ButtonMain/ButtonMainStyles';

const ButtonMain = ({
  children,
  onClick,
  variant,
  endIcon,
  startIcon,
  width,
  disabled,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      style={{
        width: `${width}`,
        cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
        backgroundColor: `${disabled ? '#E5E5E5' : '#49BEB7'}`,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonMain;

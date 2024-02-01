import {
  StyledIconButtonMenu,
  StyledMenuIcon,
} from '@/app/ui/Header/HeaderStyles';
import SideBar from '@/app/ui/Header/SideBar';

const IconButtonMenu = ({ toggleDrawer, openDrawer, handleOpenCatalog }) => {
  return (
    <StyledIconButtonMenu
      onClick={toggleDrawer}
      color="inherit"
      edge="start"
      sx={{ marginRight: '16px' }}
    >
      <StyledMenuIcon fontSize="large" />
      <SideBar
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        handleOpenCatalog={handleOpenCatalog}
      />
    </StyledIconButtonMenu>
  );
};
export default IconButtonMenu;
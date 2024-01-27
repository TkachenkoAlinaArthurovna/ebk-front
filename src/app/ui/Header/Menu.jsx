'use client'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { catalog } from '@/app/lib/mockData';

const updatedCatalog = catalog.map((item) => ({
  ...item,
  children: catalog.filter((subItem) => subItem.parentId === item.id),
}));
const categories = updatedCatalog.filter((item) => !item.parentId);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const Menu = ({ handleCloseCatalog }) => {
  return (
    <>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
        }}
      >
        {categories.map((category) => (
          <ListItem key={category.id} sx={{ padding: '0' }}>
            <Box className="hack">
              <HoverCard key={category.id}>
                <HoverCardTrigger href="/cart" onClick={handleCloseCatalog}>
                  <ListItemButton
                    sx={{ width: '400px', borderRadius: '100px' }}
                  >
                    <ListItemText>
                      {capitalizeFirstLetter(category.name)}
                    </ListItemText>
                    {category.children.length > 0 && (
                      <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
                    )}
                  </ListItemButton>
                </HoverCardTrigger>
                {category.children.length > 0 && (
                  <HoverCardContent>
                    <Box
                      sx={{
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {
                          width: '0 !important',
                        },
                        scrollbarWidth: 'none',
                      }}
                    >
                      {category.children.map((item) => (
                        <ListItemButton
                          key={item.id}
                          sx={{ borderRadius: '100px' }}
                        >
                          <Link href="/">
                            {capitalizeFirstLetter(item.name)}
                          </Link>
                        </ListItemButton>
                      ))}
                    </Box>
                  </HoverCardContent>
                )}
              </HoverCard>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Menu;

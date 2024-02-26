import Link from 'next/link';
import { useState } from 'react';
import {
  StyledButton,
  StyledButtonMob,
  StyledAccordionSummary,
  WrapperMobMenu,
} from '@/app/ui/Header/HeaderStyles';
import { ListItemText, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { capitalizeFirstLetter } from '@/app/lib/helpers';

const MenuMob = ({ handleCloseCatalog, categories }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <WrapperMobMenu sx={{ height: '80%', overflow: 'auto' }}>
      {categories.map((category) => {
        if (category.children.length > 0) {
          return (
            <Accordion
              elevation={0}
              sx={{ '&:before': { height: '0px' } }}
              key={category.id}
              expanded={expanded === `${category.id}`}
              onChange={handleChange(`${category.id}`)}
            >
              <StyledAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {capitalizeFirstLetter(category.name)}
              </StyledAccordionSummary>
              <AccordionDetails>
                {category.children.map((item) => (
                  <StyledButton key={item.id} typebutton="subcategory">
                    <ListItemText sx={{ margin: '0' }}>
                      <Link href={`/${item.link}`} onClick={handleCloseCatalog}>
                        {capitalizeFirstLetter(item.name)}
                      </Link>
                    </ListItemText>
                  </StyledButton>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        }
        if (category.children.length == 0) {
          return (
            <StyledButtonMob key={category.id}>
              <ListItemText sx={{ margin: '0' }}>
                <Link href={`/${category.link}`} onClick={handleCloseCatalog}>
                  <Box component="span" sx={{ fontWeight: '500' }}>
                    {capitalizeFirstLetter(category.name)}
                  </Box>
                </Link>
              </ListItemText>
            </StyledButtonMob>
          );
        }
      })}
    </WrapperMobMenu>
  );
};

export default MenuMob;

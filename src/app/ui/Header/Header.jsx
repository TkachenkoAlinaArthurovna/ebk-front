import React from 'react';
import Content from '@/app/ui/Content/Content';
import Toolbar from '@/app/ui/Header/Toolbar';
import { StyledAppBar } from '@/app/ui/Header/HeaderStyles';

export default function Header({ catalog }) {
  return (
    <StyledAppBar position="static" color="white">
      <Content>
        <Toolbar catalog={catalog} />
      </Content>
    </StyledAppBar>
  );
}

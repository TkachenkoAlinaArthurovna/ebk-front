'use client';

import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledWrapper,
  StyledListItem,
  StyledChip,
  StyledSelectedFilterText,
  StyledSelectedFilterParamsBox,
} from '@/app/ui/CategoryPage/SelectedFilters/SelectedFiltersStyles';

const SelectedFilters = () => {
  const ChipsArray = () => {
    const [chipData, setChipData] = useState([
      { key: 0, label: 'Новинка' },
      { key: 1, label: 'Унісекс' },
      { key: 2, label: 'Гірські' },
    ]);

    const handleDelete = (chipToDelete) => () => {
      setChipData((chips) =>
        chips.filter((chip) => chip.key !== chipToDelete.key),
      );
    };

    const selectedFilterParams = chipData.map((data) => (
      <StyledListItem key={data.key}>
        <StyledChip
          label={data.label}
          onDelete={handleDelete(data)}
          deleteIcon={<CloseIcon />}
        />
      </StyledListItem>
    ));

    return (
      <StyledSelectedFilterParamsBox>
        {selectedFilterParams}
      </StyledSelectedFilterParamsBox>
    );
  };

  return (
    <StyledWrapper>
      <StyledSelectedFilterText variant="body1">
        Обрані фільтри:
      </StyledSelectedFilterText>
      <ChipsArray />
    </StyledWrapper>
  );
};

export default SelectedFilters;

const getTeamColor = (teamname) => {
  switch (teamname) {
    case 'Frontend':
      return '#f0652a';
    case 'Backend':
      return '#5a83c3';
    case 'Design':
      return '#953493';
    case 'QA':
      return '#8cc641';
    default:
      return '#000000';
  }
};

export default getTeamColor;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tab, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const hoveringStyle = {
  color: 'white',
  backgroundColor: '#403f3f',
  opacity: 1,
  transition: 'background-color color 0.2s ease-in',
};

const selectedStyle = {
  color: 'white',
  opacity: 1,
  backgroundColor: '#626262',
};

const sharedStyles = {
  color: 'grey',
  backgroundColor: 'transparent',
  minHeight: '32px',
  '&.Mui-focusVisible': {
    color: 'white',
    backgroundColor: '#403f3f',
  },
  '&.MuiTabs-indicator': {
    color: 'white',
    backgroundColor: 'transparent',
  },
  '&.Mui-selected': {
    color: 'white',
    backgroundColor: '#626262',
  },
};

const StyledTab = styled((props) => <Tab {...props} />)(
  () => ({
    ...sharedStyles,
    width: '100%',
    maxWidth: '100%',
  }),
);

const StyledIconButton = styled((props) => (
  <IconButton {...props}>
    <ClearIcon fontSize="small" />
  </IconButton>
))(
  () => ({
    ...sharedStyles,
    zIndex: 999,
    position: 'absolute',
    right: '5px',
    bottom: '5px',
    top: '5px',
    borderRadius: '4px',
    padding: '5px',
    ':hover': {
      backgroundColor: '#565656',
    },
  }),
);

const TerminalTab = ({
  selectedTab,
  numTabs,
  onClick,
  label,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: `${100 / numTabs}%`,
        color: 'white',
        backgroundColor: '#444444',
        ...(selectedTab === label && selectedStyle),
        ...(selectedTab !== label && isHovering && hoveringStyle),
      }}
    >
      <StyledTab
        disableRipple
        label={label}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...props}
      />
      <StyledIconButton
        disableRipple
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
      />
    </div>
  );
};

TerminalTab.propTypes = {
  label: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  numTabs: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TerminalTab;

import React from 'react';

import PropTypes from 'prop-types';

import Terminal from './Terminal';

const Content = ({ terminalMode }) => (
  <>
    {terminalMode && <Terminal /> }

  </>
);

Content.propTypes = {
  terminalMode: PropTypes.bool.isRequired,
};

export default Content;

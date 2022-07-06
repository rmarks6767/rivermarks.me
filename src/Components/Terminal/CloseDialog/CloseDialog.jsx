import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import PropTypes from 'prop-types';

const CloseDialog = ({
  tab,
  tabs,
  setTab,
  setTabs,
  open,
  handleClose,
}) => (
  <Dialog
    style={{
      borderRadius: '10px',
    }}
    open={Boolean(open)}
    onClose={handleClose}
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
  >
    <DialogTitle style={{ color: 'white', backgroundColor: '#444444' }} id="dialog-title">
      Close this tab?
    </DialogTitle>
    <DialogContent style={{ backgroundColor: '#444444' }}>
      <DialogContentText style={{ color: 'white' }} id="dialog-description">
        There is still a process running in this tab. Closing the tab will kill it.
      </DialogContentText>
    </DialogContent>
    <DialogActions style={{ color: 'white', backgroundColor: '#444444' }}>
      <Button
        style={{
          color: 'white',
        }}
        fullWidth
        onClick={handleClose}
      >
        Cancel
      </Button>
      <Button
        autoFocus
        fullWidth
        variant="contained"
        color="error"
        onClick={() => {
          const { parent } = tabs.find((t) => t.label === open);
          const newTabs = tabs.filter((t) => t.label !== open);

          setTabs(newTabs);

          if (tab === open && newTabs.length) {
            if (parent) setTab(parent);
            else setTab(newTabs[0].label);
          }
          handleClose();
        }}
      >
        Close Tab
      </Button>
    </DialogActions>
  </Dialog>
);

CloseDialog.propTypes = {
  tab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  setTab: PropTypes.func.isRequired,
  setTabs: PropTypes.func.isRequired,
  open: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CloseDialog;

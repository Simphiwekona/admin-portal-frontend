import React from 'react';
import { Snackbar } from "@mui/material";

const NotificationAlert = ({message, open, onClose}) => {
    return (
        <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
            />
    );
};

export default NotificationAlert;
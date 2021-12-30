import * as React from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { Pizza, State } from '../state';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const buttonStyles = {
    "&.MuiButton-root": {
        border: "2px black solid"
    },
    "&.MuiButton-text": {
        color: "red"
    },
    "&.MuiButton-contained": {
        color: "black"
    },
    "&.MuiButton-outlined": {
        color: "brown"
    }
};

export default function Filter() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={buttonStyles} onClick={handleOpen}>Filter</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <AutoComplete />
                </Box>
            </Modal>
        </div>
    );
}



function AutoComplete() {

    const data = useSelector((state: State) => state?.pizzaInfo?.data);
    //const preferrence = ["all", "veg", "non-veg", "Price: low-high", "Price: high-low",]
    const preferences = [
        { value: 'veg', label: 'veg' },
        { value: 'non-veg', label: 'non-veg' },
        { value: 'Price: low-high', label: 'Price: low-high' },
        { value: 'Price: high-low', label: 'Price: high-low' },
    ];

    return (
        <Autocomplete
            multiple
            id="size-small-filled-multi"
            size="small"
            options={preferences}
            getOptionLabel={(option) => option.label}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option}
                        size="small"
                        {...getTagProps({ index })}
                    />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="filled"
                    label="Filter"
                    placeholder="Favorites"
                />
            )}
        />
    );
}

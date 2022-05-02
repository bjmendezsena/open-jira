import { useState, ChangeEvent, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AddCircleOutlined, SaveOutlined } from "@mui/icons-material";
import { EntriesContext, UIContext } from "../../context";

export const NewEntry = () => {
  const { addEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFiledChanges = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addEntry(inputValue);
    initInput();
  };
  const initInput = () => {
    setInputValue("");
    setTouched(false);
    setIsAddingEntry(false);
  };

  const hasError = touched && inputValue.length === 0;

  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1,
      }}
    >
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            autoFocus
            multiline
            placeholder="Nueva entrada"
            label="Nueva entrada"
            helperText={hasError && "Ingrese un valor"}
            error={hasError}
            value={inputValue}
            onChange={onTextFiledChanges}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button onClick={() => setIsAddingEntry(false)} variant="text">
              Cancelar
            </Button>
            <Button
              onClick={onSave}
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlined />}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
          startIcon={<AddCircleOutlined />}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};

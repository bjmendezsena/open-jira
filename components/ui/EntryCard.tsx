import React, { FC, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
} from "@mui/material";
import { Entry } from "../../interfaces";
import { UIContext } from "../../context";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, stopDragging } = useContext(UIContext);

  const onDragStart = ({ dataTransfer }: React.DragEvent<HTMLDivElement>) => {
    dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    stopDragging();
  };

  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
      //TODO: Evento de dragAndDrop
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">{entry.createdAt}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

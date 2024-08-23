import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function CardBasics() {
  return (
    <Card sx={{ maxWidth: 350 }} elevation={1}>
      <CardMedia
        sx={{ height: 140 }}
        image='./watermap.jpg'
        title='Water map'
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component={"div"}>
          Content of this Card will show here
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled size='small'>
          Share
        </Button>
        <Button color='info'>Like</Button>
      </CardActions>
    </Card>
  );
}

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import "./TreeView.css";

type Props = { name: string; species_name: string; image: string };

/**
 * Component that renders a material Card with tree information. The tree image
 * is hidden by default and can be shown on button press.
 */
function TreeView({ name, species_name, image }: Props) {
  const [hidden, toggleImage] = useState(true);
  const [buttonText, toggleButtonText] = useState("Show image");

  let imgElement: HTMLElement | null = null;

  useEffect(() => {
    toggleButtonText(hidden ? "Show image" : "Hide image");
    if (!hidden) {
      // Set focus on image for screen readers.
      imgElement?.focus();
    }
  }, [hidden, imgElement]);
  return (
    <Card>
      <CardContent>
        <h1>{name}</h1>
        <h2>{species_name}</h2>
        {!hidden && (
          <img
            alt={name}
            tabIndex={0}
            className="TreeImage"
            src={image}
            ref={(img) => {
              imgElement = img;
            }}
          />
        )}
        <Button variant="outlined" onClick={() => toggleImage(!hidden)}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default TreeView;

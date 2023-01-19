import Gallery from "./components/gallery/Gallery";
import TreeView from "./components/tree-view/TreeView";
import { useEffect, useState } from "react";
import "./App.css";

type Tree = { name: string; species_name: string; image: string };

/**
 * Main page component. Calls tree API to render a tree gallery, or error
 * message if API call fails.
 */
function App() {
  const [trees, setTrees] = useState<Tree[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json"
    )
      .then((response) => response.json())
      .then((json) => json["trees"])
      .then(setTrees)
      .catch((error) => setError("Error getting trees, please try again."));
  }, []);

  return (
    <div className="App">
      {error === "" && <Gallery>{buildTreeViews(trees)}</Gallery>}
      {error !== "" && <p>{error}</p>}
    </div>
  );
}

function buildTreeViews(trees: Tree[]): JSX.Element[] {
  return trees.map((tree, index) => (
    <TreeView
      name={tree.name}
      species_name={tree.species_name}
      image={tree.image}
      key={index}
    ></TreeView>
  ));
}

export default App;

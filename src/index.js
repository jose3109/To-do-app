import "./style.css";
import { setupDialogs } from "./dialogs";

import { setupHandler, setupProjectSelection, setupEdit } from "./handlers.js";
setupDialogs();
setupHandler();
setupProjectSelection();
setupEdit();
import { SingleComponentTemplate } from "../../utils/templates";
import TextField from "./TextField";

export default {
    title: 'Components/TextField',
    component: TextField,
};

export const Default = SingleComponentTemplate(TextField, {
    label: "Label",
    error: "This field is invalid",
});
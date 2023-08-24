import { SingleComponentTemplate } from "../../utils/templates";
import Select from "./Select";
import SelectMenu from "./SelectMenu";

export default {
    title: 'Components/Select',
    component: Select,
};

const props = {
    label: "Label",
    error: "This field is invalid",
    options: [
        { label: 'A' },
        { label: 'B', value: 'b' },
    ]
}

export const Default = SingleComponentTemplate(Select, {
    ...props,
});

export const Menu = SingleComponentTemplate(SelectMenu, {
    ...props,
});

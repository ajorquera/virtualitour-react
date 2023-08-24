import { SingleComponentTemplate } from "../../utils/templates";
import List from "./List";


export default {
    title: 'Components/List',
    component: List,
};

const props = {
    label: "Label",
    error: "This field is invalid",
    options: [
        { label: 'A' },
        { label: 'B', value: 'b' },
    ]
}

export const Default = SingleComponentTemplate(List, {
    onClick: () => { },
    itemProps: { onHoverColor: 'black', onHoverBg: 'secondary' },
    items: [
        { label: 'A' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
    ]
});

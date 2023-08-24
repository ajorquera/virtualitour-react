import { MultipleComponentTemplate, SingleComponentTemplate } from "../../utils/templates";
import Progress from "./Progress";


export default {
    title: 'Components/Progress',
    component: Progress,
};

const props = {
    label: "Label",
    error: "This field is invalid",
    options: [
        { label: 'A' },
        { label: 'B', value: 'b' },
    ]
}

export const Default = MultipleComponentTemplate(Progress, [
    { timeout: 1, width: '300px', height: 40, label: 'Progress...' },
    { timeout: 1, width: '300px', height: 20, label: 'Progress...', variant: 'primary' },
    { timeout: 1, width: '300px', height: 20, label: 'Progress...', variant: 'primary-dark' },
    { timeout: 1, width: '500px', height: 70, label: 'Progress...', variant: 'secondary' },
]);

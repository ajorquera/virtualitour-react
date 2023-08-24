import React, { FC, PropsWithChildren } from "react";
import Switch from "./Switch";

import { MultipleComponentTemplate } from "../../utils/templates";



export default {
    title: 'Components/Switch',
    component: Switch,
};

export const Default = MultipleComponentTemplate(Switch, [
    {},
    { label: 'With Label' },
    { label: 'Disabled', disabled: true },
    { label: 'Label on the right', labelPos: 'right' },

]);

export const Variants = MultipleComponentTemplate(Switch, [
    { label: 'Primary', variant: 'primary' },
    { label: 'Secondary', variant: 'secondary' },
    { label: 'Tertiary', variant: 'tertiary' },
]);
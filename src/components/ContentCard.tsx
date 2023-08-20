// create a ContentCard component that renders a title and children prop in a Card component and use it in the Settings page to render the Profile and Plans pages. 

// Path: src/components/ContentCard.tsx

import { FC } from "react";
import CardLoading from "./CardLoading";
import Card from "./Card";

export interface Props {
    title: string;
    children: React.ReactNode;
    loading?: boolean;
}

const ContentCard: FC<Props> = ({ title, children, loading }) => {
    if (loading) return <CardLoading />

    return (


        <Card>

            {title}

            {children}

        </Card>
    )
}

export default ContentCard;
// A Card react wrapper

// Path: src/components/CardLoading.tsx

import { Card, CardContent, Skeleton, Typography } from "@mui/material";

const CardLoading = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h3" component="h3" textAlign="left">
                    <Skeleton />
                </Typography>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </CardContent>
        </Card>
    )
}

export default CardLoading;

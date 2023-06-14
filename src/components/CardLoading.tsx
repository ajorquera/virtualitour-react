// A Card react wrapper

// Path: src/components/CardLoading.tsx

import { Card, CardContent, Skeleton, Typography } from "@mui/material";

const CardLoading = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h3" component="h3" textAlign="left">
                    <Skeleton variant="rectangular" width={300} animation="wave" />
                </Typography>

                <Typography sx={{ mt: 1 }} variant="body1" component="p" textAlign="left">
                    <Skeleton variant="rounded" animation={false} />
                </Typography>

                <Typography sx={{ mt: 1 }} variant="body1" component="p" textAlign="left">
                    <Skeleton variant="rounded" width={300} animation={false} />
                </Typography>





            </CardContent>
        </Card>
    )
}

export default CardLoading;

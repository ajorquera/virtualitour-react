import { Divider, Typography } from "@mui/material";
import ContentCard from "../../../components/ContentCard";
import Form from "../../../components/Form";

const Profile = () => {
  return (
    <ContentCard title='Profile'>
      <Typography variant='body1' component='p'>
        Aqui puedes modificar tus datos personales
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Form />



    </ContentCard>
  );
};

export default Profile;

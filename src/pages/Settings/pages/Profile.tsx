import { Divider, Typography } from "@mui/material";
import ContentCard from "../../../components/ContentCard";
import Form, { FormField } from "../../../components/Form";




const fields: FormField[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre'
  },
  {
    type: 'select',
    options: [],
    name: 'industry',
    label: 'Industria'
  },
  {
    type: 'text',
    name: 'email',
    label: 'Email'
  }
]


const Profile = () => {
  return (
    <ContentCard title='Perfil' loading>
      <Typography variant='body1' textAlign="left">
        Aqui puedes modificar tus datos personales
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Form fields={fields} />



    </ContentCard>
  );
};

export default Profile;

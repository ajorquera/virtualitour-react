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

      Aqui puedes modificar tus datos personales




      <Form fields={fields} />



    </ContentCard>
  );
};

export default Profile;

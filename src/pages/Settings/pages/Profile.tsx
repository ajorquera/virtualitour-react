import Form, { FormField } from "../../../components/Form";
import ImageUpload from "../../../components/ImageUpload/ImageUpload";
import Text, { Heading } from "../../../components/Text";




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
    disabled: true,
    label: 'Email'
  },
  {
    type: 'image-upload',
    name: 'profilePicture',
    label: 'Logo'
  },
]


const Profile = () => {
  return (
    <>
      <Heading variant="h1">Perfil</Heading>

      <Text as="p" my={3}>
        Aqui puedes modificar tus datos personales
      </Text>

      <Form fields={fields} />

    </>



  );
};

export default Profile;

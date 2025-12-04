import ContactForm from '~/components/contact-form/ContactForm'
import Box from '@mui/material/Box'
import {styles} from '~/pages/contacts/Contacts.styles.js'
const Contacts = () => {
  return (
    <Box sx={styles.root}>
      <ContactForm />
    </Box>
  )
}

export default Contacts

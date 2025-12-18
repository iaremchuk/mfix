import Box from '@mui/material/Box'
import ContactForm from '~/components/contact-form/ContactForm'
import ContactUs from '~/components/contact-us/ContactUs'
import { styles } from '~/pages/contacts/Contacts.styles.js'

const Contacts = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.contactsContainer}>
        <Box sx={styles.contactUsContainer}>
          <ContactUs />
        </Box>
      </Box>
      <ContactForm />
    </Box>
  )
}

export default Contacts

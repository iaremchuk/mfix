import { useRef } from 'react'
import { useEmail } from '~/hooks/use-email'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styles } from './ContactForm.styles'

const ContactForm = () => {
  const formRef = useRef()
  const { sendEmail } = useEmail(formRef)

  return (
    <Box sx={styles.contactFormBlock}>
      <Box
        component="form"
        ref={formRef}
        onSubmit={sendEmail}
        sx={styles.contactFormContainer}
      >
        <Typography sx={styles.contactFormTitle}>Contact Us</Typography>
        <Box sx={styles.contactFormInitialsContainer}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            sx={styles.contactFormInitials}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            sx={styles.contactFormInitials}
            required
          />
        </Box>
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          sx={styles.contactFormTextField}
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={6}
          variant="outlined"
          sx={styles.contactFormTextField}
          required
        />
        <Button variant="contained" sx={styles.contactFormButton} type="submit">
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm

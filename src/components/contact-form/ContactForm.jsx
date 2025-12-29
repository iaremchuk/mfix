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
        component='form'
        ref={formRef}
        onSubmit={sendEmail}
        sx={styles.contactFormContainer}
      >
        <Typography sx={styles.contactFormTitle}>Contact Us</Typography>
        <Box sx={styles.contactFormInitialsContainer}>
          <TextField
            id='firstName'
            label='First Name'
            name='firstName'
            variant='outlined'
            sx={styles.contactFormInitials}
            required
            autoComplete='given-name'
          />
          <TextField
            id='lastName'
            label='Last Name'
            name='lastName'
            variant='outlined'
            sx={styles.contactFormInitials}
            required
            autoComplete='family-name'
          />
        </Box>
        <TextField
          id='email'
          label='Email'
          name='email'
          type='email'
          variant='outlined'
          sx={styles.contactFormTextField}
          required
          autoComplete='email'
        />
        <TextField
          id='message'
          label='Message'
          name='message'
          multiline
          rows={6}
          variant='outlined'
          sx={styles.contactFormTextField}
          required
          autoComplete='off'
        />
        <Button variant='contained' sx={styles.contactFormButton} type='submit'>
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm

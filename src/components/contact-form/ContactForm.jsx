import { useRef } from 'react'
import emailjs from 'emailjs-com'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styles } from './ContactForm.styles'

const ContactForm = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_s8ykv0c',
        'template_3r3ee98',
        formRef.current,
        'WVPQqHVV8rivhErwl'
      )
      .then(() => {
        alert('Message sent!')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error(err)
        alert('Something went wrong.')
      })
  }

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
            label='First Name'
            name='name'
            variant='outlined'
            sx={styles.contactFormInitials}
            required
          />
          <TextField
            label='Last Name'
            name='name'
            variant='outlined'
            sx={styles.contactFormInitials}
            required
          />
        </Box>
        <TextField
          label='Email'
          name='email'
          type='email'
          variant='outlined'
          sx={styles.contactFormTextField}
          required
        />
        <TextField
          label='Message'
          name='message'
          multiline
          rows={6}
          variant='outlined'
          sx={styles.contactFormTextField}
          required
        />
        <Button variant='contained' sx={styles.contactFormButton} type='submit'>
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm

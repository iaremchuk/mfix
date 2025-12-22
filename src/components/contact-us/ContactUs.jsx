import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ContentContainer from '~/containers/content-container/ContentContainer'
import { styles } from '~/components/contact-us/ContactUs.slyles.js'

const ContactUs = () => {
  return (
    <Box sx={styles.contactUsContainer}>
      <ContentContainer>
        <Typography sx={styles.contactUsTitle}>Let's chat</Typography>
        <Box sx={styles.contactUsContent}>
          <Typography sx={styles.contactUsText}>
            If you have a project or would like to find out more about us,
            please get in touch.
          </Typography>
          <Typography
            component='a'
            href='mailto:mfixconstruction@gmail.com'
            sx={styles.contactUsEmail}
          >
            mfixconstruction@gmail.com
          </Typography>
        </Box>
      </ContentContainer>
    </Box>
  )
}

export default ContactUs

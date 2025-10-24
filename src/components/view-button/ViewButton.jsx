import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { styles } from '~/components/view-button/ViewButton.styles.js'

const ViewButton = () => {
  const navigate = useNavigate()

  return (
    <Button onClick={() => navigate('/projects')} sx={styles.viewButton}>
      View Our Projects <ArrowForwardIcon />
    </Button>
  )
}

export default ViewButton

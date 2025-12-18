import emailjs from 'emailjs-com'

export const useEmail = (formRef) => {
  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      alert('Message sent!')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      alert('Something went wrong.')
    }
  }

  return { sendEmail }
}

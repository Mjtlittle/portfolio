import React from 'react'

import mailtoLink from 'mailto-link'

import styles from './EmailForm.module.sass'

import { useInputState } from '../../hooks/useInputState'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

const EmailForm = () => {
  const { email } = useSiteMetadata()

  const [subject, subjectHandleChange, subjectReset] = useInputState('')
  const [body, bodyHandleChange, bodyReset] = useInputState('')

  const submitEmail = () => {
    // open the mailto link
    const link = mailtoLink({
      to: email,
      subject: subject,
      body: body,
    })
    window.open(link)

    // reset the form
    subjectReset()
    bodyReset()
  }

  return (
    <form className={styles.container} onSubmit={submitEmail}>
      <label>Subject</label>
      <input type='text' value={subject} onChange={subjectHandleChange} />
      <label>Body</label>
      <textarea value={body} onChange={bodyHandleChange} />
      <input type='submit' value='Send' />
    </form>
  )
}

export default EmailForm

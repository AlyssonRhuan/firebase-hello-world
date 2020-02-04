import { useToasts } from 'react-toast-notifications'
import React from 'react';

export default class Toast {
  static Success = ({ content }) => {
    const { addToast } = useToasts()
    return (
      <Button onClick={() => addToast(content, {
        appearance: 'success',
        autoDismiss: true,
      })}>
        Add Toast
      </Button>
    )
  }

  static Error = ({ content }) => {
    const { addToast } = useToasts()
    return (
      <Button onClick={() => addToast(content, {
        appearance: 'error',
        autoDismiss: true,
      })}>
        Add Toast
      </Button>
    )
  }

  static Warning = ({ content }) => {
    const { addToast } = useToasts()
    return (
      <Button onClick={() => addToast(content, {
        appearance: 'warning',
        autoDismiss: true,
      })}>
        Add Toast
      </Button>
    )
  }

  static Info = ({ content }) => {
    const { addToast } = useToasts()
    return (
      <Button onClick={() => addToast(content, {
        appearance: 'info',
        autoDismiss: true,
      })}>
        Add Toast
      </Button>
    )
  }
}
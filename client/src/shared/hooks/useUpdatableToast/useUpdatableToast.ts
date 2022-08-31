import * as React from 'react'
import { toast, ToastContent, TypeOptions } from 'react-toastify'

export const useUpdatableToast = () => {
  const toastId = React.useRef<React.ReactText | null>(null)

  const notify = (toastContent: ToastContent) => {
    toastId.current = toast(toastContent, {
      autoClose: false,
      position: toast.POSITION.TOP_LEFT,
    })
  }

  const updateToast = (
    toastContent: ToastContent,
    type: TypeOptions = toast.TYPE.SUCCESS
  ) => {
    if (!toastId.current) return

    toast.update(toastId.current, {
      render: toastContent,
      type,
      autoClose: 5000,
    })
  }

  return {
    notify,
    updateToast,
  }
}

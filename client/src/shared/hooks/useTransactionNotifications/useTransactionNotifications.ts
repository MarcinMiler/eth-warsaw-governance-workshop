import * as React from 'react'
import { TransactionState } from '@usedapp/core'
import { match } from 'ts-pattern'
import { toast } from 'react-toastify'

import { useUpdatableToast } from '../useUpdatableToast/useUpdatableToast'

export const useTransactionNotifications = (status: TransactionState) => {
  const { notify, updateToast } = useUpdatableToast()

  React.useEffect(() => {
    match(status)
      .with('Mining', () => notify('Transaction started 🚀'))
      .with('Success', () => updateToast('Transaction Succedded'))
      .with('Fail', 'Exception', () =>
        updateToast('Transaction Failed', toast.TYPE.ERROR)
      )
      .with('None', () => null)
      .exhaustive()
  }, [status])
}

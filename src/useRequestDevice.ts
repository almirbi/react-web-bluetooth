import React from 'react'

function useRequestDevice(options?: RequestDeviceOptions) {
  const [device, setDevice] = React.useState<BluetoothDevice | undefined>(undefined)
  const onClick = React.useCallback(() => {
    async function getDevice() {
      setDevice(await navigator.bluetooth.requestDevice(options))
    }

    getDevice()
  }, [options])

  return { device, onClick }
}

export default useRequestDevice

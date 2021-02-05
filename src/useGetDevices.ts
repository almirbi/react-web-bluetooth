import React from 'react'

function useGetDevices() {
  const [devices, setDevices] = React.useState<BluetoothDevice[] | null>()

  React.useEffect(() => {
    async function getDevices() {
      setDevices(await navigator.bluetooth.getDevices())
    }

    getDevices()
  }, [])
  return devices
}

export default useGetDevices

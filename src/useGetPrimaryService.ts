import React from 'react'

function useGetPrimaryService(
  server: BluetoothRemoteGATTServer | undefined,
  bluetoothServiceUUID: BluetoothServiceUUID,
) {
  const [service, setService] = React.useState<BluetoothRemoteGATTService>()

  React.useEffect(() => {
    async function getPrimaryService() {
      if (server) {
        setService(await server.getPrimaryService(bluetoothServiceUUID))
      }
    }

    getPrimaryService()
  }, [server, bluetoothServiceUUID])

  return service
}

export default useGetPrimaryService

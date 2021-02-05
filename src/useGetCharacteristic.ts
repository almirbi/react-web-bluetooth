import React from 'react'

function useGetCharacteristic(
  service: BluetoothRemoteGATTService | undefined,
  bluetoothCharacteristicUUID: BluetoothCharacteristicUUID,
) {
  const [characteristic, setCharacteristic] = React.useState<BluetoothRemoteGATTCharacteristic>()

  async function getCharacteristic() {
    if (service) {
      setCharacteristic(await service.getCharacteristic(bluetoothCharacteristicUUID))
    }
  }

  getCharacteristic()

  return characteristic
}

export default useGetCharacteristic

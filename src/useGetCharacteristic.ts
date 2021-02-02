import React from "react";

function useGetCharacteristic(
  service: BluetoothRemoteGATTService | undefined,
  bluetoothCharacteristicUUID: BluetoothCharacteristicUUID
) {
  const [
    characteristic,
    setCharacteristic,
  ] = React.useState<BluetoothRemoteGATTCharacteristic>();

  async function getCharacteristic() {
    if (service) {
      const characteristic = await service.getCharacteristic(
        bluetoothCharacteristicUUID
      );
      setCharacteristic(characteristic);
    }
  }

  getCharacteristic();

  return characteristic;
}

export default useGetCharacteristic;

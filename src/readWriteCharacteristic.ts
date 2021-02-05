import React from 'react'

function writeValue(characteristic: BluetoothRemoteGATTCharacteristic | undefined, value: BufferSource) {
  async function writeValueAsync() {
    await characteristic?.writeValue(value)
  }

  writeValueAsync()
}

function useReadValue(characteristic: BluetoothRemoteGATTCharacteristic | undefined) {
  const [value, setValue] = React.useState<DataView>()
  React.useEffect(() => {
    async function readValue() {
      if (characteristic) {
        setValue(await characteristic.readValue())
      }
    }

    readValue()
  }, [characteristic])

  return value
}

export { writeValue, useReadValue }

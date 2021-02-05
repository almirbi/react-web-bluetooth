# React Hooks for Web Bluetooth

This is a package that provides a hooks wrapper around the new [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)

It is an experimental feature implemented under a flag in Chrome. In order to use this feature in Chrome, enable:

`chrome://flags/#enable-experimental-web-platform-features`

The `getDevices` method requires also to enable the new permissions backend experimental feature.

`chrome://flags/#enable-web-bluetooth-new-permissions-backend`

`getDevices` is used to retrieve already paired Bluetooth devices from the browser, for example after a refresh instead of pairing a device again `getDevices` can be used to connect to it without pairing.

# Example

```
const { onClick, device } = useRequestDevice({
  acceptAllDevices: true,
});

// ...

return <>
  {!device && <button onClick={onClick}>Connect</button>}
  {device && <span>{device.name}</span>}
</>
```

# API

### `useGetServer`

_Params:_

`device`: [BluetoothDevice](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice)

_Returns:_

`server`: [BluetoothRemoteGATTServer](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTServer)

<br/>

### `useGetCharacteristic`

_Params:_

`service`: [BluetoothRemoteGATTService](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService)

`bluetoothCharacteristicUUID`: string

_Returns:_

`characteristic`: [BluetoothRemoteGATTCharacteristic](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTCharacteristic)

<br/>

### `useGetDevices`

_Returns:_ `devices[]`: BluetoothDevice[]

<br/>

### `useRequestDevice`

_Params:_

`options`: https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice#parameters

_Returns:_

`onClick`: (event) => void // returns a onClick function that can be used to trigget the browser's pairing window and list the scanned Bluetooth devices.

`device`: BluetoothDevice // returns a device chosen from the Bluetooth pairing dialogue.

<br/>

### `useGetPrimaryService`

_Params:_

`device`: BluetoothDevice

_Returns:_

`service`: [BluetoothRemoteGATTService](https://developer.mozilla.org/en-US/docs/Web/API/BluetoothRemoteGATTService)

<br/>

### `useReadValue`

_Params:_

`characteristic`: [BluetoothRemoteGATTCharacteristic](BluetoothRemoteGATTCharacteristic)

_Returns:_:

`value`: [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

<br/>

### `writeValue`

_Params:_

`characteristic`: [BluetoothRemoteGATTCharacteristic](BluetoothRemoteGATTCharacteristic)

`value`: [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

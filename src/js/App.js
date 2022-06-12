import React from 'react'
import './App.css'

export default function App() {
    return (
        <div>
            <h1>Hello React App...</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification("my custom notification.")
            }}>Click me</button>
        </div>
    )
}

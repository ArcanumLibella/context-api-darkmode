import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Content() {

    const {theme} = useContext(ThemeContext)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl text-center uppercase font-black my-8">
                🌙 App with Dark Mode and Context API
            </h1>
            <p>{theme}</p>
            <p>
                Est magna officia ut excepteur magna commodo amet officia cillum ea cillum Lorem enim. Ut officia officia in consequat quis enim exercitation occaecat occaecat elit. Voluptate enim irure consequat consectetur. Minim velit exercitation quis magna ad Lorem quis Lorem eiusmod.
            </p>
            <p>
                Enim esse proident ipsum magna ea labore dolore qui incididunt laborum ad laborum. Exercitation adipisicing do quis culpa fugiat magna cupidatat in voluptate eu culpa. Ad cillum est sit mollit. Sit elit consequat fugiat non Lorem est esse cillum. Nisi non sunt ut reprehenderit occaecat sit minim laboris anim.
            </p>
            <p>
                Eu sunt ex adipisicing aliquip reprehenderit ullamco sint culpa deserunt. Ut nulla velit eiusmod veniam deserunt. Laboris ex aliquip consequat ipsum laborum. Nostrud sint sint officia culpa culpa pariatur veniam nostrud. Enim nostrud ut dolore enim cillum anim laboris amet qui eiusmod fugiat laboris. Sunt minim tempor do enim officia qui deserunt.
            </p>
            
        </div>
    )
}
